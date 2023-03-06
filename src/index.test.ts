import 'expect-puppeteer';
import {getFoo} from './index';

it('should return bar', () => {
  expect(getFoo()).toEqual('bar');
});

describe('google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('should be titled "Google"', async () => {
    const image = await page.screenshot({type: 'png'});

    expect(image).toMatchImageSnapshot();
  });
});
