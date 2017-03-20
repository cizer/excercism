const isDivisibleBy = divisor =>
    divisible =>
    divisible % divisor === 0;

const isLeapYear = year =>
    isDivisibleBy(4)(year) &&
    !isDivisibleBy(100)(year) ||
    isDivisibleBy(400)(year);

export default isLeapYear;
