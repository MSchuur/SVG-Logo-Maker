const shapes = require("../lib/shapes.js")
const circle = require("../lib/circle.js")
const triangle = require("../lib/triangle")
//Function where svg is rendered. First I create the svg tag, since it's the 
//same for all shapes I do this before the switch. Then I create the shape
//element in the switch.  These are all concatinated into a string variable
//and returned
const generateSVG = (data) => {
   console.log(data)
   let newStr = ""
   const newShape = new shapes
   newStr = newShape.render();
   
      switch(data.shapeType){
        
        case 'Circle':
            const newCircle = new circle(data.chars, data.charColor, data.shapeColor)
            newStr += `\n     ${newCircle.renderMiddle()}\n     ${newCircle.renderBottom()}`
            break;

         case 'Triangle':
            const newTriangle = new triangle(data.chars, data.charColor, data.shapeColor);
            newStr += `\n     ${newTriangle.renderMiddle()}\n   ${newTriangle.renderBottom()}`;
            break;
         case 'Square':
            const newSquare = new square(data.chars, data.charColor, data.shapeColor);
            newStr += `\n     ${newSquare.renderMiddle()}\n     ${newSquare.renderBottom()}`;
            break;


      }
      return newStr;
}

module.exports = generateSVG