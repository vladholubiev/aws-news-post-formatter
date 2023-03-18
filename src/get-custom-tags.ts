import {load} from 'cheerio';
import CUSTOM_TAGS from './custom-tags';

export function getCustomTags(headline?: string, html?: string): string[] {
  const tags: string[] = [];

  for (const customTag of CUSTOM_TAGS) {
    for (const pattern of customTag.patterns) {
      // headline
      if (headline && pattern.headlineIncludes) {
        for (const headlineIncludes of pattern.headlineIncludes) {
          if (headline.includes(headlineIncludes)) {
            tags.push(customTag.tag);
          }
        }
      }
    }
  }

  if (html) {
    const $ = load(html);
    console.log($('.asd').text());
  }

  return tags;
}
