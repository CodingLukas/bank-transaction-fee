module.exports = class Fee {

    constructor() {
        this.fracionsAmount = 2;
    }

    calculateFee(){
        throw new Error('Cannot instanciate abstract method');
    }

    roundUp(num) {
        const precision = Math.pow(10, this.fracionsAmount);
        const roundedFee = Math.ceil(num * precision) / precision;
        return this.format(roundedFee);
    }

    format(num) {
        return new Intl.NumberFormat('en-IN', {
            minimumFractionDigits: this.fracionsAmount,
            maximumFractionDigits: this.fracionsAmount,
        }).format(num);
    }

};