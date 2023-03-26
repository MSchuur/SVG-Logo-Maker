// Create the shape class and function which will be the top line for the SVG Logo
class Shapes {
    constructor(chars, charColor, shapeColor) {
        this.chars = chars
        this.charColor = charColor;
        this.shapeColor = shapeColor;
        
    }

    render() {
       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    };
}

// Create the Square class and the additional functions to create the SVG Logo
class Square extends Shapes{
    constructor(chars, charColor, shapeColor) {
    super(chars, charColor, shapeColor)
    }
    render() {
        return `<rect x="50" y="2" width="196" height="198" stroke="black" stroke-width="2" fill="${this.charColor}"/>`
    };

    renderBottom() {
        return `<text x="55" y="115" font-size="45" font-family="Diplomata SC" fill="${this.shapeColor}">${this.chars}</text>\n</svg>`
    }
}

// Create the Circle class and the additional functions to create the SVG Logo
class Circle extends Shapes{
    constructor(chars, charColor, shapeColor) {
    super(chars, charColor, shapeColor)
    }
    render() {
        return `<circle cx="150" cy="100" r="98" stroke="black" stroke-width="2" fill="${this.shapeColor} " />`
    };

    renderBottom() {
        return `<text x="55" y="115" font-size="45" font-family="Diplomata SC" fill="${this.charColor}">${this.chars}</text>\n</svg>`
    }
}

// Create the Triangle class and the additional functions to create the SVG Logo
class Triangle extends Shapes{
    constructor(chars, charColor, shapeColor) {
    super(chars, charColor, shapeColor)
    }
    renderMiddle() {
        return `<polygon points="150,2 298,198 2,198" stroke="black" stroke-width="2" fill="${this.shapeColor} "/>`
    };

    renderBottom() {
        return `<text x="55" y="160" font-size="45" font-family="Diplomata SC" fill="${this.charColor}">${this.chars}</text>`
    }
}
    
module.exports = Shapes , Circle;
