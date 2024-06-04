const fs = require('fs');
const readline = require('readline');
const inquirer = require('inquirer');
const SVG = require('./lib/shape')
const svg = new SVG

// async function generateSVG() {
//   let text = await SVG.askQuestion('Enter up to three characters: ');
//   if (text.length > 3) {
//     console.log('Error: Text must be up to three characters.');
//     rl.close();
//     return;
//   }

//   let textColor = await SVG.askQuestion('Enter text color (keyword or hexadecimal): ');
//   if (!isValidColor(textColor)) {
//     console.log('Error: Invalid color input.');
//     rl.close();
//     return;
//   }

//   let shape = await SVG.askQuestion('Choose a shape (circle, triangle, square): ');
//   if ([!'circle', 'triangle', 'square'].includes(shape.toLowerCase())) {
//     console.log('Error: Invalid shape.');
//     rl.close();
//     return;
//   }

//   let shapeColor = await SVG.askQuestion('Enter shape color (keyword or hexadecimal): ');
//   if (!isValidColor(shapeColor)) {
//     console.log('Error: Invalid color input.');
//     rl.close();
//     return;
//   }

//   let svgContent = generateSVG(text, textColor, shape, shapeColor);

//   // Write the SVG content to a file
//   fs.writeFileSync('logo.svg', svgContent.trim());

//   console.log('Generated logo.svg');
//   rl.close();
// }
  
svg.run();