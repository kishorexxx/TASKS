class circle:

class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  toString() {
    return `Circle[radius=${this.radius}, color=${this.color}]`;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}
var circle1 = new Circle();
var circle2 = new Circle(2.5);
var circle3 = new Circle(3.0, "blue");

console.log(circle1.toString());
console.log("Area:", circle2.getArea());
console.log("Circumference:", circle3.getCircumference());

circle1.setRadius(1.5);
circle2.setColor("green");

console.log("Radius:", circle1.getRadius());
console.log("Color:", circle2.getColor());