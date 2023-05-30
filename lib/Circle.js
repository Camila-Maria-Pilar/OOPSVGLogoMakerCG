const Shape = require('./Shape');

class Circle extends Shape {
  render() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />
                  <text x="150" y="110" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                </svg>`;
    return svg;
  }
}

module.exports = Circle;
