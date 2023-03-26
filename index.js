// Creating the modules required
const inquirer = require('inquirer');
const generateSVGLogo = require('./lib/generateSVGLogo');
const fs = require('fs');

inquirer
    .prompt([
    {
      type: 'input',
      message: 'Enter upto three characters to be shown on your logo: ',
      name:   'chars',
      validate: (input) => {if(input) {return true} else {return 'I require an input'}}
    },
    {
      type: 'input',
      message: 'What color would you like the characters of your logo to be. Enter color keyword or hexidecinal number: ',
      name: 'charColor',
      validate: (input) => {if(input) {return true} else {return 'I require an input'}}
    },
    {
      type: 'input',
      message: 'What color would you like the shape of your logo to be. Enter color keyword or hexidecinal number: ',
      name: 'shapeColor',
      validate: (input) => {if(input) {return true} else {return 'I require an input'}}
    },
    {
      type: 'list',
      message: 'Choose the shape you wish to use for your logo: ',
      name: 'shapeType',
      choices: ['Circle', 'Triangle', 'Square']
  },
])
    .then((data) =>
    fs.writeFile('./examples/logo.svg', generateSVGLogo(data), (err) => {
      if(err){
          console.log(err);
      }
      else{
          console.log('Generated logo.svg')

      }
    }))



