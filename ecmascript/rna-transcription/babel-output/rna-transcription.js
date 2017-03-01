'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var rnaMap = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
};

var transcribe = function transcribe(nucleotide) {
    if (!(nucleotide in rnaMap)) {
        throw new Error('Invalid input DNA.');
    }
    return rnaMap[nucleotide];
};

exports['default'] = function () {

    return {
        toRna: function toRna(dna) {

            return [].concat(_toConsumableArray(dna)).map(function (nucleotide) {
                return transcribe(nucleotide);
            }).join('');
        }
    };
};

module.exports = exports['default'];