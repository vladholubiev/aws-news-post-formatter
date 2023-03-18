import {load} from 'cheerio';
import CUSTOM_TAGS from './custom-tags';

export function getCustomTags(headline?: string, html?: string): string[] {
  const tags: string[] = [];

  for (const customTag of CUSTOM_TAGS) {
    for (const pattern of customTag.patterns) {
      // headline
      if (headline) {
        if (pattern.headlineIncludes) {
          for (const headlineIncludesPattern of pattern.headlineIncludes) {
            if (headline.toLowerCase().includes(headlineIncludesPattern.toLowerCase())) {
              tags.push(customTag.tag);
            }
          }
        }

        if (pattern.headlineMatches) {
          for (const headlineMatchesPattern of pattern.headlineMatches) {
            if (headlineMatchesPattern.test(headline)) {
              tags.push(customTag.tag);
            }
          }
        }
      }
    }
  }

  if (html) {
    const $ = load(html);
    $('.asd').text();
  }

  return tags;
}
