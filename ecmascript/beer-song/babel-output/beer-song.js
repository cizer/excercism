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
            return capitalizeFirstLetter(getBottles(number)) + ' of beer on the wall, ' + getBottles(number) + ' of beer.';
        };

        var getLastLine = function getLastLine(number) {
            if (number > 0) {
                return 'Take ' + getPronoun(number) + ' down and pass it around, ' + getBottles(number - 1) + ' of beer on the wall.';
            } else {
                return 'Go to the store and buy some more, ' + getBottles(99) + ' of beer on the wall.';
            }
        };

        return getFirstLine(number) + '\n' + getLastLine(number) + '\n';
    },

    sing: function sing(start, end) {
        var _this = this;

        start = start || 99;
        end = end || 0;

        var range = function range() {
            var start = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
            var end = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
            return Array.from({ length: start - end + 1 }, function (v, k) {
                return start--;
            });
        };

        return range(start, end).map(function (number, i, arr) {
            return _this.verse(number) + (arr[i] === end ? '\n' : '');
        }).join('\n').slice(0, -1);
    }
};
module.exports = exports['default'];