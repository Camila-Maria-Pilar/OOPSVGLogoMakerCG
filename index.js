const inquirer = require('inquirer');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');
const { writeSvgFile } = require('./lib/fileUtils');

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color:'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color:'
    }
  ]);
}

async function generateLogo() {
  try {
    const answers = await promptUser();

    const { text, textColor, shape, shapeColor } = answers;

    let shapeInstance;

    switch (shape) {
      case 'circle':
        shapeInstance = new Circle(shapeColor);
        break;
      case 'triangle':
        shapeInstance = new Triangle(shapeColor);
        break;
      case 'square':
        shapeInstance = new Square(shapeColor);
        break;
      default:
        console.log('Invalid shape selection.');
        return;
    }

    const svg = shapeInstance.render();

    writeSvgFile(svg);

    console.log('Generated logo.svg');
  } catch (error) {
    console.log('An error occurred:', error.message);
  }
}

generateLogo();
