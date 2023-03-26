const shapes = require("../lib/shapes")
const circle = require("../lib/circle.js")
const triangle = require("../lib/triangle.js")
const square = require("../lib/square.js")

const generateSVG = (data) => {
    let newStr = ""
    const newShape = new shapes();
    newSvg = newShape.render();
   
    switch(data.shapeType){
        
        case 'Circle':
            const newCircle = new circle(data.chars, data.charColor, data.shapeColor)
            newSvg += `\n     ${newCircle.renderShape()}\n     ${newCircle.renderText()}`
            break;
        case 'Triangle':
            const newTriangle = new triangle(data.chars, data.charColor, data.shapeColor);
            newSvg += `\n     ${newTriangle.renderShape()}\n   ${newTriangle.renderText()}`;
            break;
        case 'Square':
            const newSquare = new square(data.chars, data.charColor, data.shapeColor);
            newSvg += `\n     ${newSquare.renderShape()}\n     ${newSquare.renderText()}`;
            break;
    }
    console.log()
    return newSvg;
}

module.exports = generateSVG