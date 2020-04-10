const heml = require('heml');
const styles = require('./partials/styles/default.js')

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
  ${styles}
</head>
<body>
  
  <container class="email_wrapper">
    <row class="email_header">
      <column large="12">
        <table class="table_presentation" role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
          <tbody>
            <tr>
              <td style="padding-left:10px; padding-top:10px; padding-bottom:10px;">
                <img src="http://www.mathworks.com/matlabcentral/images/email-service/logo-mathworks.jpg" class="mw_logo" alt="MathWorks Logo">
              </td>
            </tr>
          </tbody>
        </table>
      </column>
    </row>
    <row class="separator">
      <column>
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
          <tbody>
            <tr>
              <td bgcolor="#0076a8" height="5" style="padding-left: 40px; font-family: Arial, Helvetica, sans-serif; font-size: 20px; color: #ffffff;"></td>
            </tr>
          </tbody>
        </table>
      </column>
    </row>
    <row class="email_content">
      <column>
        <table class="table_presentation" role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
          <tbody>
            <tr>
              <td class="table_presentation_gutter" width="10">&nbsp;</td>
              
              <td class="table_presentation_body">

                <row>
                  <column>
                    <p>
                      One-Time Passcode
                    </p>
                    <h2><strong>925155</strong></h2>
                    <p>
                      This code will expire after several minutes.  Questions?  See the <a href="#">Two-Step Verification FAQ</a>.
                    </p>
                  </column>
                </row>
                
                
                

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
    
  </container>
  <container class="email_footer">
    <table class="table_presentation" role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td class="table_presentation_gutter" width="10">&nbsp;</td>
          
          <td class="table_presentation_body">
              <p class="footer footer_address">© 2020 The MathWorks, Inc.<br>
<a href="https://www.mathworks.com">The MathWorks, Inc.</a>  |  3 Apple Hill Dr, Natick, MA 01760 USA  |  <span class="nowrap">+1 508-647-7000</span>
</p>
          </td>
          
          <td class="table_presentation_gutter" width="10">&nbsp;</td>
        </tr>
      </tbody>
    </table>
    
  </container>
</body>
</heml>
`, options)
.then(({ html, metadata, errors }) => {
  console.log(html, metadata, errors)
})