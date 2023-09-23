import {NodeHtmlMarkdown} from 'node-html-markdown';

export function htmlToMd(wikiContentText: string): string {
  const md = new NodeHtmlMarkdown({});

  return md.translate(wikiContentText);
}
