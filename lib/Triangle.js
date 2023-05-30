const Shape = require('./Shape');

class Triangle extends Shape {
  render() {
    const svg = `<svg width="300" height="200">
                  <polygon points="150,50 250,150 50,150" fill="${this.color}" />
                </svg>`;
    return svg;
  }
}

module.exports = Triangle;
