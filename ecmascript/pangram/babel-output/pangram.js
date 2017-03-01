'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function (sentence) {

    var sortedAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return {

        isPangram: function isPangram() {
            return sortedAlphabet.filter(function (a) {
                return !sentence.toLowerCase().includes(a);
            }).length === 0;
        }
    };
};

module.exports = exports['default'];