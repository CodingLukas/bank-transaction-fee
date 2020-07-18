module.exports = class Fee {

    calculateFee(){
        throw new Error('Cannot instanciate abstract class');
    }

    roundUp(num, precision) {
        precision = Math.pow(10, precision);
        return Math.ceil(num * precision) / precision;
    }

};