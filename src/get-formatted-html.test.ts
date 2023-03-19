import 'expect-puppeteer';
import rawDataJSON from './test-data-raw.test.json';
import {getFormattedHTML} from './get-formatted-html';

type RawData = {
  post_body: string;
  size: number;
};

const rawData = rawDataJSON as RawData[];

it('should format a table w/o unnecessary styles', () => {
  const rawHTML = rawData[0].post_body;
  const formattedHTML = getFormattedHTML(rawHTML);

  expect(formattedHTML).toMatchSnapshot();
});

it('should fix formatting of a bullet list', () => {
  const rawHTML = rawData[20].post_body;
  const formattedHTML = getFormattedHTML(rawHTML);

  expect(formattedHTML).toMatchSnapshot();
});

it('should fix formatting of a bullet list with bullet list inside single tag', () => {
  const rawHTML = rawData[9].post_body;
  const formattedHTML = getFormattedHTML(rawHTML);

  expect(formattedHTML).toMatchSnapshot();
});

it('should render a table w/o unnecessary styles', async () => {
  const rawHTML = rawData[0].post_body;
  const formattedHTML = getFormattedHTML(rawHTML);

  await page.goto('about:blank');
  await page.setContent(formattedHTML);
  const image = await page.screenshot({type: 'png', fullPage: true});

  expect(image).toMatchImageSnapshot();
});

it.each(rawData.map(r => r.post_body).slice(0, 100))(
  'should return a formatted html',
  (rawHTML: string) => {
    const formattedHTML = getFormattedHTML(rawHTML);

    expect(formattedHTML).toMatchSnapshot();
  }
);

it.each(rawData.map(r => r.post_body).slice(0, 100))(
  'should render a good-looking html',
  async (rawHTML: string) => {
    await page.goto('about:blank');
    await page.setContent(getFormattedHTML(rawHTML));
    const image = await page.screenshot({type: 'png', fullPage: true});

    expect(image).toMatchImageSnapshot({failureThreshold: 0.01});
  }
);
