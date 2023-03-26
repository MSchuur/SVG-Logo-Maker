// Creating the modules required
const inquirer = require('inquirer');
const generateSVGLogo = require('./util/generateSVGLogo');
const fs = require('fs');

// Created the questions that will be asked at the command line
inquirer
    .prompt([
    {
      type: 'input',
      message: 'Enter upto three characters to be shown on your logo: ',
      name:   'chars',
      validate: (input) => {if(input) {return true} else {return 'I require an input'}},
      validate: (input) => {if(input.length <=3) {return true} else {return 'Only three characters are permitted!'}}
    },
    {
      type: 'input',
      message: 'What color would you like the characters of your logo to be. Enter color keyword or hexidecinal number: ',
      name: 'charColor',
      validate: (input) => {if(input) {return true} else {return 'I require an input'}}
    },
    {
      type: 'list',
      message: 'Choose the shape you wish to use for your logo: ',
      name: 'shapeType',
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      message: 'What color would you like the shape of your logo to be. Enter color keyword or hexidecinal number: ',
      name: 'shapeColor',
      validate: (input) => {if(input) {return true} else {return 'I require an input'}}
    },
    
])
    //Handling the data recieved from Inquirer prompts and creating the SVG file  

    .then((data) =>
    fs.writeFile('./examples/logo.svg', generateSVGLogo(data), (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log('Generated logo.svg')
        }
    }))



