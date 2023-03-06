import {load} from 'cheerio';
import * as jsBeautify from 'js-beautify';

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

  // remove empty <p> and <a> blocks like "<p>&nbsp;</p>"
  $('p,a').each((_, element) => {
    if ($(element).text().trim() === '') {
      $(element).remove();
    }
  });

  // remove empty <span> with exception of "<span>&nbsp;</span>"
  $('span').each((_, element) => {
    if ($(element).text().trim() === '' && $(element).html() !== '&nbsp;') {
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

  // replace ● with •
  $('p').each((_, element) => {
    const elHTML = $(element).html();

    if (elHTML) {
      $(element).html(elHTML.replace(/●/g, '•'));
    }
  });

  // <p> tag ending with ":" and having <p> tags starting with "•" as next siblings
  // now we need to find those <p> tags and replace them with <ul> and <li> tags
  // $('p').each((_, element) => {
  //   const elHTML = $(element).html();
  //
  //   if (elHTML && elHTML.endsWith(':')) {
  //     const nextSibling = $(element).next();
  //
  //     if (nextSibling.is('p') && nextSibling.html()?.startsWith('•')) {
  //       let next = nextSibling;
  //
  //       while (next.is('p') && next.html()?.startsWith('•')) {
  //         next = next.next();
  //       }
  //
  //       $(element).nextUntil(next).wrapAll('<ul></ul>');
  //     }
  //   }
  // });

  // now we need to find all <ul> tags which have <p> tags as children that have text starting with "•"
  // and replace those <p> tags with <li> tags
  // $('ul').each((_, element) => {
  //   $(element)
  //     .children('p')
  //     .each((_, child) => {
  //       const childHTML = $(child).html();
  //
  //       if (childHTML && childHTML.startsWith('•')) {
  //         $(child).replaceWith(`<li>${childHTML.replace('•', '').trim()}</li>`);
  //       }
  //     });
  // });

  // find <ul> <li> tags with multiple <br> tags inside one <li> tag and split them into multiple <li> tags
  // $('ul').each((_, element) => {
  //   $(element)
  //     .children('li')
  //     .each((_, child) => {
  //       const childHTML = $(child).html();
  //
  //       if (childHTML && childHTML.includes('<br>')) {
  //         const splitHTML = childHTML.split('<br>');
  //
  //         $(child).replaceWith(
  //           splitHTML
  //             .map(html => `<li>${html.replace('•', '').replaceAll('&nbsp;', ' ').trim()}</li>`)
  //             .join('')
  //         );
  //       }
  //     });
  // });

  const finalHTML = $('body').html() || '';

  return jsBeautify.html(finalHTML, {indent_size: 2, wrap_line_length: 0});
}
