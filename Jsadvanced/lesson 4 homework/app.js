class TriangleSquare {
    static sin(corner) {
        return Math.sin(corner * Math.PI / 180);
    }

    static fromBaseAndHeight(base, height) {
        return 0.5 * base * height;
    }

    static fromTwoSidesAndCorner(a, b, corner) {
        return 0.5 * a * b * this.sin(corner);
    }

    static circumscribedCircleAndSides(a, b, c, radius) {
        return (a * b * c) / (4 * radius);
    }

    static inscribedCircleAndSides(a, b, c, radius) {
        return radius * (a + b + c) / 2;
    }

    static fromSideAndTwoAdjacentAngles(a, b, c) {
        return (a ** 2 * this.sin(b) * this.sin(c)) / (2 * this.sin(b + c));
    }

    static heronsFormula(a, b, c) {
        const p = (a + b + c) / 2;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }
    static sin(degree) {
        return Math.sin(degree * Math.PI / 180);
    }

    // Прямоугольный треугольник (по катетам)
    static fromRightTriangle(a, b) {
        return 0.5 * a * b;
    }

    // По гипотенузе и острому углу
    static fromHypotenuseAndAngle(c, corner) {
        return 0.25 * c ** 2 * this.sin(2 * corner);
    }

    // По катету и прилежащему углу
    static fromSideAndAngle(a, corner) {
        return 0.5 * a ** 2 * Math.tan(corner * Math.PI / 180);
    }

    // Через гипотенузу и радиус вписанной окружности
    static fromHypotenuseAndInradius(c, r) {
        return r * (r + c);
    }

    // По отрезкам, на которые делит вписанная окружность гипотенузу
    static fromHypotenuseSegments(c1, c2) {
        return c1 * c2;
    }

    // Прямоугольный треугольник по формуле Герона
    static heronsFormulaRightTriangle(a, b, c) {
        const p = (a + b + c) / 2;
        return Math.sqrt((p - a) * (p - b));
    }

    // Равнобедренный треугольник: по основанию и высоте
    static fromIsosceles(base, height) {
        return 0.5 * base * height;
    }

    // Равнобедренный: по боковой стороне и углу
    static fromIsoscelesSidesAndAngle(a, corner) {
        return 0.5 * a ** 2 * this.sin(corner);
    }

    // Равносторонний треугольник: по радиусу описанной окружности
    static fromEquilateralCircumscribed(R) {
        return (3 * Math.sqrt(3) * R ** 2) / 4;
    }

    // Равносторонний треугольник: по радиусу вписанной окружности
    static fromEquilateralInscribed(r) {
        return Math.sqrt(3) * r ** 2;
    }

    // Равносторонний: по стороне
    static fromEquilateralSide(a) {
        return (Math.sqrt(3) * a ** 2) / 4;
    }

    // Равносторонний: по высоте
    static fromEquilateralHeight(h) {
        return h ** 2 / Math.sqrt(3);
    }
}

console.log(TriangleSquare.fromBaseAndHeight(5, 4));
console.log(TriangleSquare.fromTwoSidesAndCorner(5, 4, 90)); 
console.log(TriangleSquare.circumscribedCircleAndSides(6, 5, 4, 10)); 
console.log(TriangleSquare.inscribedCircleAndSides(6, 5, 4, 7)); 
console.log(TriangleSquare.fromSideAndTwoAdjacentAngles(10, 45, 45)); 
console.log(TriangleSquare.heronsFormula(6, 5, 4));
console.log(TriangleSquare.fromRightTriangle(3, 4));
console.log(TriangleSquare.fromHypotenuseAndAngle(5, 30));
console.log(TriangleSquare.fromSideAndAngle(3, 45));
console.log(TriangleSquare.fromHypotenuseAndInradius(5, 2));
console.log(TriangleSquare.fromHypotenuseSegments(3, 4));
console.log(TriangleSquare.heronsFormulaRightTriangle(3, 4, 5));
console.log(TriangleSquare.fromIsosceles(5, 4));
console.log(TriangleSquare.fromIsoscelesSidesAndAngle(5, 60));
console.log(TriangleSquare.fromEquilateralCircumscribed(5));
console.log(TriangleSquare.fromEquilateralInscribed(3));
console.log(TriangleSquare.fromEquilateralSide(6));
console.log(TriangleSquare.fromEquilateralHeight(10));