class classCalculation {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    async calculation() {
        await this.sum();
        await this.sub();
        await this.mult();
    }

    async sum() {
        console.log(`${this.a} + ${this.b} = ${this.a + this.b}`);
    }
    async sub() {
        console.log(`${this.a} - ${this.b} = ${this.a - this.b}`);
    }
    async mult() {
        console.log(`${this.a} * ${this.b} = ${this.a * this.b}`);
    }
}

module.exports = classCalculation;