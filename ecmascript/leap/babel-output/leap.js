"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var isDivisibleBy = function isDivisibleBy(divisor) {
    return function (divisible) {
        return divisible % divisor === 0;
    };
};

var isLeapYear = function isLeapYear(year) {
    return isDivisibleBy(4)(year) && !isDivisibleBy(100)(year) || isDivisibleBy(400)(year);
};

exports["default"] = isLeapYear;
module.exports = exports["default"];