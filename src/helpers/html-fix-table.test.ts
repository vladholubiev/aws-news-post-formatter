import {load} from 'cheerio/lib/slim';
import {fixHTMLTables} from './html-fix-table';

const badTable = `<table align="center" border="0" cellspacing="0" cellpadding="0" width="348">
  <tbody>
    <tr>
      <td>
        <table border="1" cellspacing="1" cellpadding="10" width="351" height="200" bgcolor="#999">
          <tbody>
            <tr valign="top">
              <td valign="top" width="25%;" style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-weight: bold; font-family: arial,helvetica,sans-serif; font-size: 12px;">Region</span>
              </td>
              <td width="25%;" style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-weight:bold; font-family: arial,helvetica,sans-serif; font-size: 12px;">Old Price</span>
              </td>
              <td width="25%;" style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-weight: bold; font-family: arial,helvetica,sans-serif; font-size: 12px;">New Price</span>
              </td>
              <td width="25%;" style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-weight: bold; font-family: arial,helvetica,sans-serif; font-size: 12px;">Savings</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">US East (Northern Virginia)</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.090</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.080</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">11%</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">US West (Northern California)</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.098</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.085</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">13%</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">US West (Oregon)</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.090</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.080</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">11%</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">AWS GovCloud (US)</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.110</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.090</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">18%</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">Europe (Ireland)</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.098</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.085</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">13%</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">Asia Pacific (Singapore)</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.115</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.100</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">13%</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">Asia Pacific (Tokyo)</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.120</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.110</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">8%</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">Asia Pacific (Sydney)</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.115</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.100</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">13%</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">South America (Sao Paulo)</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.120</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">$0.100</span>
              </td>
              <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">17%</span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`;

it('should fix html table', () => {
  const $ = load(badTable, null, false);

  fixHTMLTables($);
  const fixedHTML = $.root().html() || '';

  expect(fixedHTML).toMatchInlineSnapshot(`
    "<table border="1" cellspacing="1" cellpadding="10" width="351" height="200" bgcolor="#999">
              
                <thead><tr valign="top">
                  <th>
                    <span style="font-weight: bold; font-family: arial,helvetica,sans-serif; font-size: 12px;">Region</span>
                  </th>
                  <th>
                    <span style="font-weight:bold; font-family: arial,helvetica,sans-serif; font-size: 12px;">Old Price</span>
                  </th>
                  <th>
                    <span style="font-weight: bold; font-family: arial,helvetica,sans-serif; font-size: 12px;">New Price</span>
                  </th>
                  <th>
                    <span style="font-weight: bold; font-family: arial,helvetica,sans-serif; font-size: 12px;">Savings</span>
                  </th>
                </tr></thead>
                <tr>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">US East (Northern Virginia)</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.090</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.080</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">11%</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">US West (Northern California)</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.098</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.085</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">13%</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">US West (Oregon)</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.090</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.080</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">11%</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">AWS GovCloud (US)</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.110</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.090</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">18%</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">Europe (Ireland)</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.098</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.085</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">13%</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">Asia Pacific (Singapore)</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.115</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.100</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">13%</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">Asia Pacific (Tokyo)</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.120</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.110</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">8%</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">Asia Pacific (Sydney)</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.115</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.100</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">13%</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">South America (Sao Paulo)</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.120</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">&#x24;0.100</span>
                  </td>
                  <td style="padding: 5px; background-color:#fff; font-size: 14px; color: #000000; line-height: 17px;" bgcolor="#fff">
                    <span style="font-family: arial,helvetica,sans-serif; font-size: 12px;">17%</span>
                  </td>
                </tr>
              
            </table>"
  `);
});
