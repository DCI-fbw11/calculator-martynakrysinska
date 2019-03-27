class Calc {
  constructor(num) {
    this.num = num;
  }
  add(numToAdd) {
    this.throwOnBadDatatype(numToAdd);
    this.num = this.num + numToAdd;
    return this;
  }

  substract(numToSubstract) {
    this.throwOnBadDatatype(numToSubstract);
    this.num = this.num - numToSubstract;
    return this;
  }

  multiply(numToMultiply) {
    this.throwOnBadDatatype(numToMultiply);
    this.num = this.num * numToMultiply;
    return this;
  }

  divide(numToDivide) {
    this.throwOnBadDatatype(numToDivide);
    this.num = this.num / numToDivide;
    return this;
  }

  plus(numToAdd) {
    return this.add(numToAdd);
  }

  minus(numToSubstract) {
    return this.substract(numToSubstract);
  }

  times(numToMultiply) {
    return this.multiply(numToMultiply);
  }

  dividedBy(numToDivide) {
    return this.dividedBy(numToDivide);
  }
  result() {
    return this;
  }

  throwOnBadDatatype(numToAdd) {
    if (typeof numToAdd === "string") {
      throw new Error("No strings allowed");
    }

    if (typeof numToAdd === "object") {
      throw new Error("No object allowed");
    }
  }
}

const result = new Calc(1)
  .add(3)
  .substract(3)
  .multiply(2)
  .divide(3)
  .result();

console.log(result);
module.exports = Calc;
