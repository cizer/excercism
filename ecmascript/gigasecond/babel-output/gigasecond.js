"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (dob) {
    var gigasecond = Math.pow(10, 9);
    return {
        date: function date() {
            return new Date(dob.getTime() + gigasecond * 1000);
        }
    };
};

module.exports = exports["default"];