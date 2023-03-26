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

module.exports = Shapes;

