import { memoize } from "./decorators";

class Calculator {
    @memoize add(...number: number[]) {
        return number.reduce((total, current) => total + current);
    }
}

const calculator = new Calculator();
const calculator2 = new Calculator();
console.log(calculator.add(1,2,4,5));
console.log(calculator.add(1,2,4,5));
console.log(calculator2.add(1,2,4,5));