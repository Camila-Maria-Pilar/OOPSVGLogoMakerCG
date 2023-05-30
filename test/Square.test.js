const Square = require('../lib/Square');

test('Square render method should return the correct SVG string', () => {
  const square = new Square('green');
  const expectedSvg = `<svg width="300" height="200">
                        <rect x="50" y="50" width="200" height="100" fill="green" />
                      </svg>`;

  expect(square.render()).toBe(expectedSvg);
});
