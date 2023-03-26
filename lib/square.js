const Shapes = require("../lib/shapes.js")

//Square class is a child of Shapes class.
class Square extends Shapes{
    constructor(chars, charColor, shapeColor){
        super(chars, charColor, shapeColor)
    }
    
    // Renders the shape and color of the SVG Logo
    renderShape(){
        return `<rect x="50" y="2" width="196" height="196" stroke="black" stroke-width="2" fill="${this.shapeColor}" />`
    }

    // Renders the text and text color of the SVG Logo
    renderText(){
       return `<text x="150" y="120" font-size="60" text-anchor="middle" font-family="fantasy" fill="${this.charColor}">${this.chars}</text>\n</svg>`
    }
}
module.exports = Square;