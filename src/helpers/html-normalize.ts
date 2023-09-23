import {load} from 'cheerio/lib/slim';
import {fixHTMLTables} from './html-fix-table';

export function normalizeHTML(rawHTML: string): string {
  const $ = load(rawHTML, null, false);

  $('*').each((_, element) => {
    $(element).removeAttr('style');
    $(element).removeAttr('class');
  });

  $('style').remove();

  // set tables to full width
  $('table').each((_, element) => {
    $(element).css('width', '100%');
  });

  // remove bgcolor from <td> and <table>
  $('td,table').each((_, element) => {
    $(element).removeAttr('bgcolor');
  });

  fixHTMLTables($);

  // remove empty <p> and <a> blocks like "<p>&nbsp;</p>"
  $('p,a').each((_, element) => {
    if ($(element).text().trim() === '') {
      $(element).remove();
    }
  });

  // fix relative urls
  $('a').each(function () {
    const href = $(this).attr('href');

    if (href?.includes('/content/aws.amazon.com/live/en_US/')) {
      const urlPath = href.split('/content/aws.amazon.com/live/en_US')[1].split('.html')[0];
      $(this).attr('href', `https://aws.amazon.com${urlPath}`);
    }

    if (href?.includes('/content/aws.amazon.com/staging/en_US/')) {
      const urlPath = href.split('/content/aws.amazon.com/staging/en_US/')[1].split('.html')[0];
      $(this).attr('href', `https://aws.amazon.com${urlPath}`);
    }
  });

  // remove double <b> tags
  $('b').each((_, element) => {
    const parent = $(element).parent();

    if (parent.is('b')) {
      $(element).contents().unwrap();
    }
  });

  // replace <b> with <strong>
  $('b').each((_, element) => {
    $(element).replaceWith(`<strong>${$(element).html()}</strong>`);
  });

  return $.root().html() || '';
}
