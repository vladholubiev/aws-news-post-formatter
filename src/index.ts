import {load} from 'cheerio';

export function getFormattedHTML(rawHTML: string): string {
  const $ = load(rawHTML);

  $('*').each((_, element) => {
    $(element).removeAttr('style');
    $(element).removeAttr('class');
  });

  $('style').remove();

  // set tables to full width
  $('table').each((_, element) => {
    $(element).css('width', '100%');
  });

  return $('body').html() || '';
}
