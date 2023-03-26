const Shapes = require("./shapes.js")

//Triangle class is a child of Shapes class.
class Triangle extends Shapes{
    constructor(chars, charColor, shapeColor){
        super(chars, charColor, shapeColor)
    }
    
    // Renders the shape and color of the SVG Logo
    renderMiddle(){
        return `<polygon points="150,2 298,198 2,198" stroke="black" stroke-width="2" fill="${this.shapeColor}" />`
    }

    // Renders the text and text color of the SVG Logo
    renderBottom(){
       return `<text x="150" y="160" font-size="60" text-anchor="middle" font-family="fantasy" fill="${this.charColor}">${this.chars}</text>\n</svg>`
    }
}
module.exports = Triangle;