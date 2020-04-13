exports.footer = `

`

const footer = () => {
  return `
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
  `
};

exports.footer = footer;
