import {RAW_DATA} from '../test-data-raw';
import {normalizeHTML} from './html-normalize';

it('should format a table w/o unnecessary styles', () => {
  const rawHTML = RAW_DATA[0].post_body;
  const formattedHTML = normalizeHTML(rawHTML);

  expect(formattedHTML).toMatchSnapshot();
});

it('should normalize complex html', () => {
  const rawHTML = RAW_DATA[62].post_body;
  const formattedHTML = normalizeHTML(rawHTML);

  expect(formattedHTML).toMatchSnapshot();
});

it('should normalize complex table html', () => {
  const rawHTML = RAW_DATA[1].post_body;
  const formattedHTML = normalizeHTML(rawHTML);

  expect(formattedHTML).toMatchSnapshot();
});

it('should fix formatting of a bullet list', () => {
  const rawHTML = RAW_DATA[20].post_body;
  const formattedHTML = normalizeHTML(rawHTML);

  expect(formattedHTML).toMatchSnapshot();
});

it('should fix formatting of a bullet list with bullet list inside single tag', () => {
  const rawHTML = RAW_DATA[9].post_body;
  const formattedHTML = normalizeHTML(rawHTML);

  expect(formattedHTML).toMatchSnapshot();
});

it('should render a table w/o unnecessary styles', async () => {
  const rawHTML = RAW_DATA[0].post_body;
  const formattedHTML = normalizeHTML(rawHTML);

  await page.goto('about:blank');
  await page.setContent(formattedHTML);
  const image = await page.screenshot({type: 'png', fullPage: true});

  expect(image).toMatchImageSnapshot();
});
