// Creating the modules required
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
    {
      type: 'input',
      message: 'Enter upto three characters to be shown on your logo: ',
      name:   'charcaters',
      validate: (input) => {if(input) {return true} else {return 'I require an input'}}
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
.then((response) =>
    console.log(response)      
  );

// const init = () => {
//     return inquirer.prompt(shapeQuestions)
//     .then((data) => {
//         console.log(data)
//     })
// }
