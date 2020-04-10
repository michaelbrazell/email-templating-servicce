const header = () => {
  return `
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
  `
};

exports.header = header;
