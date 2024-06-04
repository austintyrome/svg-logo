const fs = require('fs');
const readline = require('readline');
const inquirer = require('inquirer');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class SVG {
  constructor(initals, textColor, shapeColor, shape) {
    this.initals = initals;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.shape = shape;
  }
  generateSVG() {
    // let svgContent;
console.log("this", this);
    let shapeElement = '';
    switch (this.shape) {
      case 'circle':
        shapeElement = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
        break;
      case 'triangle':
        console.log(this.shapeColor);
        shapeElement = `<polygon points="150,20 250,180 50,180" fill="${this.shapeColor}" />`;
        break;
      case 'square':
        shapeElement = `<rect x="75" y="50" width="150" height="150" fill="${this.shapeColor}" />`;
        break;
      default: break;
    }

    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeElement}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.initals}</text>
</svg>`;

    //   switch(this.shape){
    //     case 'circle':
    // svgContent = new this.shape.circle('circle', this.shapeColor).draw();
    //     case 'triangle':
    //       svgContent = new this.shape.tirangle('triangle', this.shapeColor).draw();
    //     case 'square':
    //       svgContent = new this.shape.square('square', this.shapeColor).draw();
    //   }
    //   svgContent =`<text font-size-"40" x-"36%" y-"50%" fill-"${this.textcolor}">${this.initals}</text>`;
    //   return svgContent;
  }
  run() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'initals',
        message: 'What are your initals?'
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text?'
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like for the shape'
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Which shape would you like to use?',
        choices: ['triangle', 'circle', 'square']
      }
    ])
      .then((answers) => {
        this.initals = answers.initals;
        this.textColor = answers.textColor;
        this.shapeColor = answers.shapeColor;
        this.shape = answers.shape;

        const newSvg = new SVG(answers.initals, answers.textColor, answers.shapeColor, answers.shape)
        // => {
        //     let shapeElement = '';
        //     switch (shape.toLowerCase()) {
        //       case 'circle':
        //         shapeElement = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
        //         break;
        //       case 'triangle':
        //         shapeElement = `<polygon points="150,20 250,180 50,180" fill="${shapeColor}" />`;
        //         break;
        //       case 'square':
        //         shapeElement = `<rect x="75" y="50" width="150" height="150" fill="${shapeColor}" />`;
        //         break;
        //     }

        //     return `
        //   <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        //     ${shapeElement}
        //     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${initals}</text>
        //   </svg>`;
        //   };

        let svgContent = newSvg.generateSVG();

        fs.writeFileSync('logo.svg', svgContent.trim());
      })
  }
};

// const askQuestion = (question) => {
//   return new Promise((resolve) => rl.question(question, resolve));
// };

const isValidColor = (color) => {
  const keywordRegex = /^[a-zA-Z]+$/;
  const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
  return keywordRegex.test(color) || hexRegex.test(color);
};
module.exports = SVG;
