const Shape = require('./Shape');

class Triangle extends Shape {
  render() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <polygon points="150,50 250,150 50,150" fill="${this.shapeColor}" />
                  <text x="150" y="110" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                </svg>`;
    return svg;
  }
}

module.exports = Triangle;
