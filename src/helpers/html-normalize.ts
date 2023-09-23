import {load} from 'cheerio/lib/slim';

export function normalizeHTML(rawHTML: string): string {
  const $ = load(rawHTML, null, false);

  // if table has no <th>, transform all <td> in the  first <tr> into <th>
  $('table').each((_, element) => {
    const table = $(element);
    const th = table.find('th');

    if (th.length === 0) {
      const firstTr = table.find('tr').first();
      const tds = firstTr.find('td');

      tds.each((_, td) => {
        $(td).wrap(`<th></th>`);
      });
    }
  });

  // if there are <th> tags but not <thead>, wrap the <tr> containing <th> into <thead>
  // and wrap all other <tr> into <tbody>
  $('table').each((_, element) => {
    const table = $(element);
    const th = table.find('th');

    if (th.length > 0) {
      const thead = table.find('thead');

      if (thead.length === 0) {
        const firstTr = table.find('tr').first();
        const otherTr = table.find('tr').not(firstTr);

        firstTr.wrap('<thead></thead>');
        otherTr.wrapAll('<tbody></tbody>');
      }
    }
  });

  $('td,th').each((_, element) => {
    const elTagNames = Array.from(
      new Set(
        $(element)
          .find('*')
          .map((_, el) => el.tagName)
          .get()
      )
    );
    const elText = $(element).text();

    if (elTagNames.length === 1 && elTagNames[0] === 'br') {
      $(element).html(elText);
    }

    // if <td> has only <br> and <b> tags inside, remove <br> and replace <td> html with the rest of html
    if (elTagNames.length === 2 && elTagNames.includes('br') && elTagNames.includes('b')) {
      $(element).find('br').remove();
    }
  });

  // set tables to full width
  // $('table').each((_, element) => {
  //   $(element).css('width', '100%');
  // });

  // remove bgcolor from <td> and <table>
  // $('td,table').each((_, element) => {
  //   $(element).removeAttr('bgcolor');
  // });

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
