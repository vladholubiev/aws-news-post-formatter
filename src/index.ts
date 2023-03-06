import {load} from 'cheerio';

export function getFormattedHTML(rawHTML: string): string {
  const $ = load(rawHTML);

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

  // remove empty <p> and <span> blocks like "<p>&nbsp;</p>"
  $('p,span,a').each((_, element) => {
    if ($(element).text().trim() === '') {
      $(element).remove();
    }
  });

  return $('body').html() || '';
}
