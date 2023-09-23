import {RAW_DATA} from '../test-data-raw';
import {htmlToMd} from './html-to-md';
import {mdToHTML} from './md-to-html';
import {normalizeHTML} from './html-normalize';

it('should convert markdown to html', () => {
  const html = RAW_DATA[0].post_body;
  const md = htmlToMd(html);
  const htmlFromMd = mdToHTML(md);

  expect(htmlFromMd).toMatchSnapshot();
});

it('should convert complex markdown to html', () => {
  const html = RAW_DATA[62].post_body;
  const md = htmlToMd(normalizeHTML(html));
  const htmlFromMd = mdToHTML(md);

  expect(md).toMatchSnapshot();
  expect(htmlFromMd).toMatchSnapshot();
});

it('should convert markdown tables to html', () => {
  const html = RAW_DATA[1].post_body;
  const md = htmlToMd(normalizeHTML(html));
  const htmlFromMd = mdToHTML(md);

  expect(md).toMatchSnapshot();
  expect(htmlFromMd).toMatchSnapshot();
});
