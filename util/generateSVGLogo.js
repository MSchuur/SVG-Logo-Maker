const shapes = require("../lib/shapes")
const circle = require("../lib/circle.js")
const triangle = require("../lib/triangle.js")
const square = require("../lib/square.js")

const generateSVG = (data) => {
    console.log(data)
    let newStr = ""
    const newShape = new shapes();
    newStr = newShape.render();
   
    switch(data.shapeType){
        
        case 'Circle':
            const newCircle = new circle(data.chars, data.charColor, data.shapeColor)
            console.log(newCircle)
            newStr += `\n     ${newCircle.renderMiddle()}\n     ${newCircle.renderBottom()}`
            break;
        case 'Triangle':
            const newTriangle = new triangle(data.chars, data.charColor, data.shapeColor);
            console.log(newTriangle)
            newStr += `\n     ${newTriangle.renderMiddle()}\n   ${newTriangle.renderBottom()}`;
            break;
        case 'Square':
            const newSquare = new square(data.chars, data.charColor, data.shapeColor);
            console.log(newSquare)
            newStr += `\n     ${newSquare.renderMiddle()}\n     ${newSquare.renderBottom()}`;
            break;
    }
    return newStr;
}

module.exports = generateSVG