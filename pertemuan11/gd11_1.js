class Shape_2206 {
    calculateArea() {
        throw new Error("Method 'calculateArea' must be implemented");
    }

    hitungKeliling_2206 () {
        throw new Error("Method 'hitungKeliling' must be implemented");
    }
}

class Rectangle_2206 extends Shape_2206 {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    hitungKeliling_2206() {
        return 2 * (this.width + this.height);
    }
}

class Square_2206 extends Shape_2206 {
    constructor(side) {
        super();
        this.side = side;
    }

    calculateArea() {
        return this.side * this.side;
    }

    hitungKeliling_2206() {
        return 4 * this.side;
    }
}

class Circle_2206 extends Shape_2206 {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    hitungKeliling_2206() {
        return 2 * Math.PI * this.radius;
    }
}

function printArea(shape) {
    console.log(shape.calculateArea());
    console.log(shape.hitungKeliling_2206());
}

const rectangle = new Rectangle_2206(5, 10);
const square = new Square_2206(5);
const circle = new Circle_2206(7);

printArea(rectangle);
printArea(square);
printArea(circle);