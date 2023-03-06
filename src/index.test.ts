import 'expect-puppeteer';
import rawData from '../test-data/raw.json';
import {getFormattedHTML} from './index';

type RawData = {
  post_body: string;
  count: number;
};

it.each((rawData as RawData[]).map(r => r.post_body).slice(0, 100))(
  'should return a formatted html',
  (rawHTML: string) => {
    const formattedHTML = getFormattedHTML(rawHTML);

    expect(formattedHTML).toMatchSnapshot();
  }
);

it.each((rawData as RawData[]).map(r => r.post_body).slice(0, 100))(
  'should render a good-looking html',
  async (rawHTML: string) => {
    await page.goto('about:blank');
    await page.setContent(rawHTML);
    const image = await page.screenshot({type: 'png', fullPage: true});

    expect(image).toMatchImageSnapshot();
  }
);
