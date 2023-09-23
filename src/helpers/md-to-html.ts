import showdown from 'showdown';

const markdownToHTMLConverter = new showdown.Converter({tables: true});

export function mdToHTML(md: string): string {
  return markdownToHTMLConverter.makeHtml(md);
}
