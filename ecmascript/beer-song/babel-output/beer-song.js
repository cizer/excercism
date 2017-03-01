'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = {
    verse: function verse(number) {
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        var getBottles = function getBottles(number) {
            if (number === 0) {
                return 'no more bottles';
            }
            if (number === 1) {
                return '1 bottle';
            }
            return number + ' bottles';
        };

        var getPronoun = function getPronoun(number) {
            return number === 1 ? 'it' : 'one';
        };

        var getFirstLine = function getFirstLine(number) {
            return capitalizeFirstLetter(getBottles(number)) + ' of beer on the wall, ' + getBottles(number) + ' of beer.\n';
        };

        var getLastLine = function getLastLine(number) {
            if (number > 0) {
                return 'Take ' + getPronoun(number) + ' down and pass it around, ' + getBottles(number - 1) + ' of beer on the wall.\n';
            } else {
                return 'Go to the store and buy some more, ' + getBottles(99) + ' of beer on the wall.\n';
            }
        };

        return getFirstLine(number) + getLastLine(number);
    },

    sing: function sing(start, end) {
        start = start || 99;
        end = end || 0;

        var song = '';
        for (var i = start; i >= end; i--) {
            song += this.verse(i);
            song += i !== end ? '\n' : '';
        }
        return song;
    }
};
module.exports = exports['default'];