"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = {
    verse: function verse(number) {
        var getBottles = function getBottles(number) {
            if (number === 0) {
                return "no more bottles";
            } else if (number === 1) {
                return "1 bottle";
            }
            return number + " bottles";
        };

        var getPronoun = function getPronoun(number) {
            return number === 1 ? "it" : "one";
        };

        return getBottles(number) + " of beer on the wall, " + getBottles(number) + " of beer.\nTake " + getPronoun(number) + " down and pass it around, " + getBottles(number - 1) + " of beer on the wall.\n";
    },

    sing: function sing(start, end) {}
};
module.exports = exports["default"];