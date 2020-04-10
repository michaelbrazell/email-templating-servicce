const heml = require('heml');

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
  <style>
    /* Email Background */
    body { 
      background: #e6e6e6;
      font-family: Arial, Helvetica, sans-serif; 
      color: #999999; 
      font-weight: normal;  
      width: 100%;
    }
    
    .bodyTable {
      width: 100%;
    }

    .preheader {
      font-family: Arial, Helvetica, sans-serif; 
      color: #999999; 
      font-weight: normal; 
      font-size: 10px;
      margin-bottom: 0;
      text-align: center;
    }

    /* Main Container */
    container.email_wrapper {
      max-width: 650px;
      border-bottom: 1px solid #c6c6c6;
      background: #ffffff;
      font-family: Arial, Helvetica, sans-serif; 
      font-size: 14px; 
      color: #3c3c3c; 
      line-height: 140%; 
    }

    /* Not Used since Email Header Standardization */
    .email_header.sub_application .sub_application_left {
      padding-top: 15px; 
      padding-bottom: 15px;
      padding-left: 40px;
    }

    /* Not Used since Email Header Standardization */
    .email_header.sub_application .sub_application_right {
      padding-top: 15px; 
      padding-right: 40px;
      padding-bottom: 8px;
    }

    /* Not Used since Email Header Standardization */
    .email_header.sub_application .sub_application_right img {
      display: inline-block;
    }

    .email_header h1 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 22px;
      color: #0076a8;
      margin: 0;
      line-height: 28px;
    }

    .email_header h1 sup {
      font-size: 10px
    }

    block {
      background: #e6e6e6;
      padding: 0 20px;
    }

    .separator {
      background: #0076a8;
      height: 5px;
    }

    .separator_content {
      background: #e6e6e6;
      height: 20px;
    }

    .email_content {
      padding-bottom: 20px;
    }


    .email_content p {
      margin: 20px 0 20px 0;
    }

    button {
      padding: 10px 14px 9px 14px;
      border: none;
      border-radius: 5px;
      white-space: normal;
      text-align: center;
      font-family: Arial, Helvetica, sans-serif; 
    }

    .btn_color_green {
      background: #48a23f;
      border-radius: 5px;
      color: #fff;
      font-size: 15px;
      line-height: 1.00;
    }

    .btn_color_blue {
      background: #0076a8;
      border-radius: 5px;
      color: #fff;
      font-size: 15px;
      line-height: 1.00;
    }

    .btn_align_left {
      margin-left: 0;
    }

    p.small,
    span.small {
      font-size: 12px;
    }

    a, 
    a:hover, 
    a:visited {
      color: #0076a8;
      text-decoration: none;
    }

    /* Email Footer */
    container.email_footer {
      max-width: 650px;
      font-family: Arial, Helvetica, sans-serif; 
      font-size: 11px; 
      color: #7f7f7f; 
      line-height: 140%; 
      padding-bottom: 20px;
    }

    .nowrap {
      white-space: nowrap; 
    }

    /* Not Used anymore since moving to standard layout for all emails */
    .mw_logo_mobile {
      width: 110px;
      height: auto;
    }

    /* Helpers & Utilities */
    .remove_padding_top {
      padding-top: 0;
    }

    .remove_padding_bottom {
      padding-bottom: 0;
    }

    .remove_margin_top {
      margin-top: 0;
    }

    .remove_margin_bottom {
      margin-bottom: 0;
    }

    .text_align_right {
      text-align: right;
    }

    .add_text_align_center {
      text-align: center;
    }

    .add_text_align_left {
      text-align: left;
    }

    .add_text_align_right {
      text-align: right;
    }

    .show_on_desktop {
      display: block;
    }

    .show_on_desktop_inline {
      display: inline-block;
    }

    .show_on_desktop_tablecell {
      display: table-cell;
    }

    .show_on_mobile {
      display: none;
    }

    .show_on_mobile_inline {
      display: none;
    }

    @media only screen and (max-width: 599px) {
      .show_on_desktop {
        display: none !important;
      }

      .show_on_desktop_inline {
        display: none !important;
      }

      .show_on_desktop_tablecell {
        display: none !important;
      }

      .show_on_mobile {
        display: block !important;
      }

      .show_on_mobile_inline {
        display: inline-block !important;
      }
    }

    /* Outlook Hack to Hide Elements */
    div[class=mobile_content_outlook]{
      display: block !important;
      max-height: none !important;
    }

    /* MWA Styles */
    button.btn_in_context { 
      margin-bottom: 20px;
    }

    .table_presentation_body p:last-child {
      margin-bottom: 0;
    }

    /* 
      2020 LD Feedback
      White background, center aligned
     */
    
     .preheader {
      display: none;
    }

    
    body {
      background: #FFFFFF;
      padding-top: 10px;
    }


  </style>
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