const heml = require('heml');
const styles = require('./partials/styles/default.js')
const header = require('./partials/header.js')
const footer = require('./partials/footer.js')
const content = require('./partials/content.js')

const options = {
  validate: 'soft', // validation levels - 'strict'|'soft'|'none'
  cheerio: {}, // config passed to cheerio parser
  juice: {},
  beautify: {}, // config passed to js-beautify html method
  elements: [
    // any custom elements you want to use
  ]
};

heml(`
<heml>
<head>
  <subject>Two-Step Verification Code</subject>
  <preview>One-Time Passcode: 925155</preview>
  ${styles.styles()}
</head>
<body>
  
    ${header.header()}
    <row class="email_content">
      <column>
        <table class="table_presentation" role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
          <tbody>
            <tr>
              <td class="table_presentation_gutter" width="10">&nbsp;</td>
              
              <td class="table_presentation_body">

                ${content.content()}
                
                
                

                <table class="table_presentation outlook_bottom_padding" role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                  <tbody>
                    <tr>
                      <td height="12"></td>
                    </tr>
                  </tbody>
                </table>

              </td>
              
              <td class="table_presentation_gutter" width="10">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </column>
    </row>
    
  ${footer.footer()}
</body>
</heml>
`, options)
.then(({ html, metadata, errors }) => {
  console.log(html, metadata, errors)
})