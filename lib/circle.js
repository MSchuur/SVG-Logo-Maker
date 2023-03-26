const Shapes = require("../lib/shapes.js")

//Circle class is a child of Shapes class.
class Circle extends Shapes{
    constructor(chars, charColor, shapeColor){
        super(chars, charColor, shapeColor)
    }
    
    // Renders the shape and color of the SVG Logo
    renderMiddle(){
        return  `<circle cx="150" cy="100" r="80" stroke="black" stroke-width="2" fill="${this.shapeColor}" />`
    }

    // Renders the text and text color of the SVG Logo
    renderBottom(){
        return `<text x="150" y="120" font-size="60" text-anchor="middle" font-family="fantasy" fill="${this.charColor}">${this.chars}</text>\n</svg>`
    }
}
module.exports = Circle;