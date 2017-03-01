'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

exports['default'] = function () {

    return {
        compute: function compute(strand1, strand2) {
            if (strand1.length !== strand2.length) {
                throw new Error('DNA strands must be of equal length.');
            }

            return [].concat(_toConsumableArray(strand1)).reduce(function (distance, nucleotide, index) {
                return nucleotide !== strand2[index] ? ++distance : distance;
            }, 0);
        }
    };
};

module.exports = exports['default'];