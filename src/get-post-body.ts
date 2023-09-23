import {normalizeHTML} from './helpers/html-normalize';
import {htmlToMd} from './helpers/html-to-md';
import {mdToHTML} from './helpers/md-to-html';
import {htmlToText} from './helpers/html-to-text';

export function getPostBody(html: string): {html: string; markdown: string; text: string} {
  const normalizedHTML = normalizeHTML(html);
  const markdown = htmlToMd(normalizedHTML);
  const htmlFromMarkdown = mdToHTML(markdown);
  const text = htmlToText(htmlFromMarkdown);

  return {
    html: htmlFromMarkdown,
    markdown,
    text,
  };
}
