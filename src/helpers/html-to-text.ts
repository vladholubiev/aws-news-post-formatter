import {convert} from 'html-to-text';
import {load} from 'cheerio';

export function htmlToText(html: string): string {
  const $ = load(html, null, false);

  return convert(html, {
    selectors: [
      {selector: 'span', format: 'spanNBSP'},
      {selector: 'img', format: 'skip'},
      {selector: 'a', format: 'anchorSimplification', options: {ignoreHref: true}},
      {selector: 'table', format: 'dataTable', options: {maxColumnWidth: undefined}},
    ],
    wordwrap: false,
    formatters: {
      spanNBSP: (elem, walk, builder) => {
        const text = $(elem as any)
          .text()
          .replace(/[\u202F\u00A0]/g, ' ')
          // eslint-disable-next-line no-irregular-whitespace
          .replaceAll(` `, ' ');
        builder.addLiteral(text);
      },
      anchorSimplification: (elem, walk, builder) => {
        const anchorChildren = elem.children;

        if (anchorChildren.length === 1) {
          const anchorText = elem.children[0].data || '';
          const urlHostname = getURLHostname(anchorText);

          if (urlHostname) {
            elem.children[0].data = urlHostname.replace('.', ' dot ');
          }
        }

        walk(elem.children, builder);
      },
    },
  });
}

function getURLHostname(url: string): string {
  try {
    const urlObj = new URL(url);

    return urlObj.hostname;
  } catch {
    return '';
  }
}
