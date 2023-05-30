const fs = require('fs');

function writeSvgFile(svgContent) {
  fs.writeFileSync('logo.svg', svgContent);
}

module.exports = {
  writeSvgFile
};
