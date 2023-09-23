import 'expect-puppeteer';
import {getPostBody} from './get-post-body';
import {RAW_DATA} from './test-data-raw';

it.each(RAW_DATA.map(r => r.post_body).slice(0, 100))(
  'should return a formatted html',
  (rawHTML: string) => {
    const {html} = getPostBody(rawHTML);

    expect(html).toMatchSnapshot();
  }
);

it.each(RAW_DATA.map(r => r.post_body).slice(0, 100))(
  'should render a good-looking html',
  async (rawHTML: string) => {
    await page.goto('about:blank');
    await page.setContent(getPostBody(rawHTML).html);
    const image = await page.screenshot({type: 'png', fullPage: true});

    expect(image).toMatchImageSnapshot({failureThreshold: 0.01});
  }
);
