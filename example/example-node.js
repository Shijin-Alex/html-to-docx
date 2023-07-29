/* eslint-disable no-console */
const fs = require('fs');
// FIXME: Incase you have the npm package
// const HTMLtoDOCX = require('html-to-docx');
const HTMLtoDOCX = require('../dist/html-to-docx.umd');

const filePath = './example.docx';

const htmlString = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <div>
            <p>Taken from wikipedia</p>
            <img
                src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
                alt="Red dot"
            />
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
                alt="Red dot"
            />
        </div>
        <div>
            <h1>This is heading 1</h1>
            <p>Content</p>
            <h2>This is heading 2</h2>
            <p>Content</p>
            <h3>This is heading 3</h3>
            <p>Content</p>
            <h4>This is heading 4</h4>
            <p>Content</p>
            <h5>This is heading 5</h5>
            <p>Content</p>
            <h6>This is heading 6</h6>
            <p>Content</p>
        </div>
        <p>
            <strong>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book.
            </strong>
            <i>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</i>
            <u>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</u>and more recently with desktop publishing software
            <span style="color: hsl(0, 75%, 60%);"> like Aldus PageMaker </span>including versions of Lorem Ipsum.
            <span style="background-color: hsl(0, 75%, 60%);">Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        </p>
        <p style="font-family: 'Courier New', Courier, monospace;">Look at me, i'm a paragraph in Courier New!</p>
        <p style="font-family: SerifTestFont, serif;">Look at me, i'm a paragraph in SerifTestFont!</p>
        <p style="font-family: SansTestFont, sans-serif;">Look at me, i'm a paragraph in SansTestFont!</p>
        <p style="font-family: MonoTestFont, monospace;">Look at me, i'm a paragraph in MonoTestFont!</p>
        <blockquote>
            For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
        </blockquote>
        <p>
            <strong>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book.
            </strong>
        </p>
        <p style="margin-left: 40px;">
            <strong>Left indented paragraph:</strong>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        </p>
        <p style="margin-right: 40px;">
            <strong>Right indented paragraph:</strong>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        </p>
        <p style="margin-left: 40px; margin-right: 40px;">
            <strong>Left and right indented paragraph:</strong>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        </p>
        <ul style="list-style-type: circle;">
            <li>Unordered list element</li>
        </ul>
        <br>
        <ol style="list-style-type: decimal;">
            <li>Ordered list element</li>
        </ol>
        <div class="page-break" style="page-break-after: always"></div>
        <ul>
            <li><span style="font-size:10pt"><span style="color:##e28743">I am a teacup <strong><span style="color:#595959">A strong teacup</span></strong></span></span></li>
            <li><span style="font-size:10pt"><span style="color:#4d4f53">I am another teacup <strong><span style="color:#2596be">A blue</span></strong> Teacup</span></span></li>
            <li><span style="font-size:10pt"><span style="color:#cc1177">Stonks only go up if you turn the chart sometimes</span></span></li>
        </ul>
        <div class="page-break" style="page-break-after: always"></div>
        <ul>
            <li>
                <a href="https://en.wikipedia.org/wiki/Coffee">
                    <strong>
                        <u>Coffee</u>
                    </strong>
                </a>
            </li>
            <li>Tea
                <ol>
                    <li>Black tea
                        <ol style="list-style-type:lower-alpha-bracket-end;" data-start="2">
                            <li>Srilankan <strong>Tea</strong>
                                <ul>
                                    <li>Uva <b>Tea</b></li>
                                </ul>
                            </li>
                            <li>Assam Tea</li>
                        </ol>
                    </li>
                    <li>Green tea</li>
                </ol>
            </li>
            <li>Milk
                <ol>
                    <li>Cow Milk</li>
                    <li>Soy Milk</li>
                </ol>
            </li>
        </ul>
        <br>
        <table>
            <tr>
                <th>Country</th>
                <th>Capital</th>
            </tr>
            <tr>
                <td>India</td>
                <td>New Delhi</td>
            </tr>
            <tr>
                <td>United States of America</td>
                <td>Washington DC</td>
            </tr>
            <tr>
                <td>Bolivia</td>
                <td>
                    <ol>
                        <li>Sucre</li>
                        <li>La Paz</li>
                    </ol>
                </td>
            </tr>
        </table>

        <div class="page-break" style="page-break-after: always"></div>
        <table align="center" class="Table">
          <tbody>
            <tr>
              <td colspan="2" rowspan="2" style="border-bottom:none; width:249px; padding:5px 11px 5px 11px; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt">&nbsp;</span></span></span></p>
              </td>
              <td colspan="3" style="border-bottom:1px solid black; width:374px; padding:5px 11px 5px 11px; background-color:gray; border-top:1px solid black; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">Example Header</span></span></span></span></p>
              </td>
            </tr>
            <tr>
              <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#d9d9d9; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><b><span style="font-size:10.0pt"><span style="color:black">Financial</span></span></b></span></span></span></p>
              </td>
              <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#d9d9d9; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><b><span style="font-size:10.0pt"><span style="color:black">Tech</span></span></b></span></span></span></p>
              </td>
              <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#d9d9d9; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><b><span style="font-size:10.0pt"><span style="color:black">Total Market</span></span></b></span></span></span></p>
              </td>
            </tr>
            <tr>
              <td rowspan="3" style="border-bottom:none; width:125px; padding:5px 11px 5px 11px; background-color:gray; border-top:none; border-right:1px solid black; border-left:1px solid black" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><b><span style="font-size:10.0pt"><span style="color:black">Level of Meme</span></span></b></span></span></span></p>
              </td>
              <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#d9d9d9; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><b><span style="font-size:10.0pt"><span style="color:black">High</span></span></b></span></span></span></p>
              </td>
              <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:red; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">GUSH</span></span></span></span></p>
              </td>
              <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#ffc000; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">ARKK</span></span></span></span></p>
              </td>
              <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:yellow; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">SPLX</span></span></span></span></p>
              </td>
            </tr>
            <tr>
              <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#d9d9d9; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><b><span style="font-size:10.0pt"><span style="color:black">Medium</span></span></b></span></span></span></p>
              </td>
              <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#ffc000; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">[̲̅$̲̅(̲̅ ͡&deg; ͜ʖ ͡&deg;̲̅)̲̅$̲̅]</span></span></span></span></p>
              </td>
              <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:yellow; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">TQQQ</span></span></span></span></p>
              </td>
              <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#92d050; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">( ͡~ ͜ʖ ͡&deg;)</span></span></span></span></p>
              </td>
            </tr>
            <tr>
              <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#d9d9d9; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><b><span style="font-size:10.0pt"><span style="color:black">Low</span></span></b></span></span></span></p>
              </td>
              <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:yellow; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">( ◔ ʖ̯ ◔ )</span></span></span></span></p>
              </td>
              <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#92d050; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">QQQ</span></span></span></span></p>
              </td>
              <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#00b050; border-top:none; border-right:1px solid black; border-left:none" valign="top">
              <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">SPY</span></span></span></span></p>
              </td>
            </tr>
          </tbody>
        </table>
    </body>
</html>`;

(async () => {
  const fileBuffer = await HTMLtoDOCX(
    htmlString,
    null,
    {
      table: { row: { cantSplit: true } },
      footer: true,
      pageNumber: true,
    },
    `
    <div>
    <table>
    <tbody>
      <tr style="mso-yfti-irow: 0; mso-yfti-firstrow: yes;">
        <td style="width: 225.4pt; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; padding: 0in 5.4pt 0in 5.4pt;" valign="top" width="301">
          <p class="MsoNormal" style="margin-bottom: 0in; line-height: normal;">
            <span style="color: #ed7d31; mso-themecolor: accent2;">State</span>
          </p>
        </td>
        <td style="width: 225.4pt; border: solid windowtext 1.0pt; border-left: none; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0in 5.4pt 0in 5.4pt;" valign="top" width="301">
          <p class="MsoNormal" style="margin-bottom: 0in; line-height: normal;">
            <span style="color: #ed7d31; mso-themecolor: accent2;">Capital</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow: 1;">
        <td style="width: 225.4pt; border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; background: #D9E2F3; mso-background-themecolor: accent1; mso-background-themetint: 51; padding: 0in 5.4pt 0in 5.4pt;" valign="top" width="301">
          <p class="MsoNormal" style="margin-bottom: 0in; line-height: normal;">
            <span style="color: black; mso-color-alt: windowtext;"> kerala ww</span>
          </p>
        </td>
        <td style="width: 225.4pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; mso-border-top-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; background: #FBE4D5; mso-background-themecolor: accent2; mso-background-themetint: 51; padding: 0in 5.4pt 0in 5.4pt;" valign="top" width="301">
          <p class="MsoNormal" style="margin-bottom: 0in; line-height: normal;">
            <span style="color: black; mso-color-alt: windowtext;">tvm</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow: 2; mso-yfti-lastrow: yes;">
        <td style="width: 225.4pt; border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0in 5.4pt 0in 5.4pt;" valign="top" width="301">
          <p class="MsoNormal" style="margin-bottom: 0in; line-height: normal;">
            <span style="background: yellow; mso-highlight: yellow;">TN</span>
          </p>
        </td>
        <td style="width: 225.4pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; mso-border-top-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0in 5.4pt 0in 5.4pt;" valign="top" width="301">
          <p class="MsoNormal" style="margin-bottom: 0in; line-height: normal;">
            <span style="color: #c5e0b4; mso-themecolor: accent6; mso-themetint: 102; mso-style-textfill-fill-color: #C5E0B4; mso-style-textfill-fill-themecolor: accent6; mso-style-textfill-fill-alpha: 100.0%; mso-style-textfill-fill-colortransforms: 'lumm=40000 lumo=60000';">chennai</span>
          </p>
        </td>
      </tr>
    </tbody>
    </table>
    </<div>
    <p>Pac Rim 1.0    <span style="color:red;">REVISED 07/29/2022</span>    Pacific Rim ISG Intellectual Property - All Rights Reserved</p>`
  );

  fs.writeFile(filePath, fileBuffer, (error) => {
    if (error) {
      console.log('Docx file creation failed');
      return;
    }
    console.log('Docx file created successfully');
  });
})();
