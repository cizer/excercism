'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

var verses = {
    zeroBottles: 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n',
    oneBottle: '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n',
    twoBottles: '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n',
    manyBottles: function manyBottles(bottles) {
        return bottles + ' bottles of beer on the wall, ' + bottles + ' bottles of beer.\nTake one down and pass it around, ' + (bottles - 1) + ' bottles of beer on the wall.\n';
    }
};

var getBottles = function getBottles(bottles) {
    if (bottles === 0) {
        return 'no more bottles';
    }
    if (bottles === 1) {
        return '1 bottle';
    }
    return bottles + ' bottles';
};

var getPronoun = function getPronoun(bottles) {
    return bottles === 1 ? 'it' : 'one';
};

var getFirstLine = function getFirstLine(bottles) {
    return capitalizeFirstLetter(getBottles(bottles)) + ' of beer on the wall, ' + getBottles(bottles) + ' of beer.';
};

var getLastLine = function getLastLine(bottles) {
    if (bottles > 0) {
        return 'Take ' + getPronoun(bottles) + ' down and pass it around, ' + getBottles(bottles - 1) + ' of beer on the wall.';
    } else {
        return 'Go to the store and buy some more, ' + getBottles(99) + ' of beer on the wall.';
    }
};

var verse = function verse(bottles) {
    if (bottles === 0) return verses.zeroBottles;
    if (bottles === 1) return verses.oneBottle;
    if (bottles === 2) return verses.twoBottles;
    return verses.manyBottles(bottles);

    //return (getFirstLine(number) + `\n` + getLastLine(number) + `\n`)
};

var range = function range(start, end) {
    return Array.from({ length: start - end + 1 }, function (v, k) {
        return start--;
    });
};

var sing = function sing() {
    var start = arguments.length <= 0 || arguments[0] === undefined ? 99 : arguments[0];
    var end = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    return range(start, end).map(function (bottle, i, arr) {
        return verse(bottle) + (arr[i] === end ? '\n' : '');
    }).join('\n').slice(0, -1);
};

exports['default'] = {
    verse: verse,
    sing: sing
};
module.exports = exports['default'];