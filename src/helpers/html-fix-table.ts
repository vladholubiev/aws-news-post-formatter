import type {CheerioAPI} from 'cheerio/lib/slim';

export function fixHTMLTables($: CheerioAPI): void {
  // find <table> which has only one <tr> which has only one <td> inside
  // which has only one <table> inside. And then, move the inner <table> outside
  $('table').each((_, element) => {
    const table = $(element);
    const tr = table.children('tbody').children('tr');
    const td = table.children('tbody').children('tr').children('td');
    const innerTable = td.children('table').first();

    if (tr.length === 1 && td.length === 1 && innerTable) {
      table.replaceWith(innerTable);
    }
  });

  // if table has no <th>, transform all <td> in the  first <tr> into <th>
  $('table').each((_, element) => {
    const table = $(element);
    const th = table.find('th');

    if (th.length === 0) {
      const firstTr = table.find('tr').first();
      const tds = firstTr.find('td');

      tds.each((_, td) => {
        $(td).replaceWith(`<th>${$(td).html()}</th>`);
      });
    }
  });

  // if there are <th> tags but not <thead>, wrap the <tr> containing <th> into <thead>
  // and wrap all other <tr> into <tbody>. But consider a case where <tbody> is already present
  // so we need to move out all <tr> except the first one into <tbody>
  $('table').each((_, element) => {
    const table = $(element);
    const th = table.find('th');

    if (th.length > 0) {
      const thead = table.find('thead');
      const tbody = table.find('tbody');

      if (thead.length === 0) {
        const firstTr = table.find('tr').first();
        const otherTr = table.find('tr').not(firstTr);

        firstTr.wrap('<thead></thead>');

        if (tbody.length === 0) {
          otherTr.wrapAll('<tbody></tbody>');
        }

        // in case we have <thead> inside <tbody>, move it out
        const theadInsideTbody = table.find('tbody > thead');

        if (theadInsideTbody.length > 0) {
          theadInsideTbody.unwrap();
        }
      }
    }
  });

  $('td,th').each((_, element) => {
    const elTagNames = Array.from(
      new Set(
        $(element)
          .find('*')
          .map((_, el) => el.tagName)
          .get()
      )
    );
    const elText = $(element).text();

    if (elTagNames.length === 1 && elTagNames[0] === 'br') {
      $(element).html(elText);
    }

    // if <td> has only <br> and <b> tags inside, remove <br> and replace <td> html with the rest of html
    if (elTagNames.length === 2 && elTagNames.includes('br') && elTagNames.includes('b')) {
      $(element).find('br').remove();
    }
  });
}
