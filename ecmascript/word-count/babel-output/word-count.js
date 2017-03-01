"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function () {
    return {
        count: function count(sentence) {

            var updateCounts = function updateCounts(counts, word) {
                counts[word] && typeof counts[word] === "number" ? counts[word]++ : counts[word] = 1;
                return counts;
            };

            return sentence.toLowerCase().trim().split(/[\s,]+/).reduce(function (counts, word) {
                return updateCounts(counts, word);
            }, {});
        }
    };
};

module.exports = exports["default"];