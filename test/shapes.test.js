const Shapes = require('../lib/shapes')
const Circle = require('../lib/circle')
const Triangle = require('../lib/triangle')
const Square = require('../lib/square')

// Test to ensure the first line of all shapes will render
describe('Shapes', () => {
   describe('render', () => {
      it('should fill the lirst line of the shape requested', () => {
          const newShape = new Shapes();

          expect(newShape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`)
      })
   }) 
})

// Test to ensure the fill color of the circle svg will render
describe('Circle', () => {
    describe('renderShape', () => {
        it("should add the fill color the circle svg circle creation line", () => {

            const newCircle = new Circle();
            newCircle.shapeColor = "blue";
      
            expect(newCircle.renderShape()).toEqual(
                `<circle cx="150" cy="100" r="80" stroke="black" stroke-width="2" fill="blue" />`)
        })
    })
})

// Test to ensure the text line of the circle svg will render
describe('Circle',() =>{
    describe('renderText',() => {
        it("should add the text and the text color to the circle svg text line",() => {

            const newCircle = new Circle();
            newCircle.charColor = "black";
            newCircle.chars = "MJS";
    
            expect(newCircle.renderText()).toEqual(
              `<text x="150" y="120" font-size="60" text-anchor="middle" font-family="fantasy" fill="black">MJS</text>\n</svg>`)
        })
    })
})

// Test to ensure the fill color of the triangle svg will render
describe('Triangle', () => {
    describe('renderShape', () => {
        it("should add the fill color the circle svg circle creation line", () => {

            const newTriangle = new Triangle();
            newTriangle.shapeColor = "blue";
    
            expect(newTriangle.renderShape()).toEqual(
                `<polygon points="150,2 298,198 2,198" stroke="black" stroke-width="2" fill="blue" />`)
        })
    })
})

// Test to ensure the text line of the triangle svg will render
describe('Triangle',() =>{
    describe('renderText',() => {
        it("should add the text and the text color to the triangle svg text line",() => {
            const newTriangle = new Triangle();
            newTriangle.charColor = "black";
            newTriangle.chars = "MJS";
  
            expect(newTriangle.renderText()).toEqual(
                `<text x="150" y="160" font-size="60" text-anchor="middle" font-family="fantasy" fill="black">MJS</text>\n</svg>`)
        })
    })
})

// Test to ensure the fill color of the square svg will render
describe('Square', () => {
    describe('renderShape', () => {
        it("should add the fill color the circle svg circle creation line", () => {
            const newSquare = new Square();
            newSquare.shapeColor = "blue";
    
            expect(newSquare.renderShape()).toEqual(
                `<rect x="50" y="2" width="196" height="196" stroke="black" stroke-width="2" fill="blue" />`)
        })
    })
})

// Test to ensure the text line of the square svg will render
describe('Square',() =>{
    describe('renderText',() => {
        it("should add the text and the text color to the square svg text line",() => {
            const newSquare = new Square();
            newSquare.charColor = "black";
            newSquare.chars = "MJS";
  
            expect(newSquare.renderText()).toEqual(
                `<text x="150" y="120" font-size="60" text-anchor="middle" font-family="fantasy" fill="black">MJS</text>\n</svg>`)
        })
    })
})
