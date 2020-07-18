module.exports = class Fee {

    calculateFee(){
        throw new Error('Cannot instanciate abstract class');
    }

    roundUp(num, precision) {
        precision = Math.pow(10, precision);
        const roundedFee = Math.ceil(num * precision) / precision;
        return this.format(roundedFee);
    }

    format(num) {
        return new Intl.NumberFormat('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(num);
    }

};