const Circle = require('../lib/Circle');

test('Circle render method should return the correct SVG string', () => {
  const circle = new Circle('red');
  const expectedSvg = `<svg width="300" height="200">
                        <circle cx="150" cy="100" r="50" fill="red" />
                      </svg>`;

  expect(circle.render()).toBe(expectedSvg);
});
