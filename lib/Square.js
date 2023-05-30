const Shape = require('./Shape');

class Square extends Shape {
  render() {
    const svg = `<svg width="300" height="200">
                  <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
                </svg>`;
    return svg;
  }
}

module.exports = Square;
