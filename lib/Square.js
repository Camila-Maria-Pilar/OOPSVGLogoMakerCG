const Shape = require('./Shape');

class Square extends Shape {
  render() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />
                  <text x="150" y="110" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                </svg>`;
    return svg;
  }
}

module.exports = Square;
