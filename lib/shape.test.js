const { Circle, Triangle, Square, Star } = require('./shape');
const SVG = require('./svg');
const fs = require('fs');
describe('Shape drawing', () => {
    test('Circle should draw correctly', () => {
        const circle = new Circle();
        const svgContent = circle.draw();
        expect(svgContent).toContain('<circle');
        expect(svgContent).toContain('cx="100"');
    });
    test('Triangle should draw correctly', () => {
        const triangle = new Triangle();
        const svgContent = triangle.draw();
        expect(svgContent).toContain('<polygon');
        expect(svgContent).toContain('points="100,10 10,190 190,190"')
    });
    test('Square should draw correctly', () => {
        const square = new Square();
        const svgContent = square.draw();
        expect(svgContent).toContain('<rect');
        expect(svgContent).toContain('x="0"');
    });

    test('Star should draw correctly', () => {
        const star = new Star();
        const svgContent = star.draw();
        expect(svgContent).toContain('<polygon');
    });
});