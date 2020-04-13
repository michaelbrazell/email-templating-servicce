const heml = require('heml');
const fs = require('fs');
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
    ${content.content()}
    ${footer.footer()}
</body>
</heml>
`, options)
.then(({ html, metadata, errors }) => {
  var fileName = metadata.subject.toLowerCase().replace(/\s+/g, '-')
  fs.writeFile('./output/' + fileName + '.html', html, function (err) {
    if (err) return console.log(err);
    if (errors) console.log(errors);
    console.log('Wrote HTML to basic-template.html', metadata)
  })
})