const Triangle = require('../lib/Triangle');

test('Triangle render method should return the correct SVG string', () => {
  const triangle = new Triangle('blue');
  const expectedSvg = `<svg width="300" height="200">
                        <polygon points="150,50 250,150 50,150" fill="blue" />
                      </svg>`;

  expect(triangle.render()).toBe(expectedSvg);
});
