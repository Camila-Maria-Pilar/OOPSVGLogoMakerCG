const Shape = require('./Shape');

class Circle extends Shape {
  render() {
    const svg = `<svg width="300" height="200">
                  <circle cx="150" cy="100" r="50" fill="${this.color}" />
                </svg>`;
    return svg;
  }
}

module.exports = Circle;
