"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function () {
    return {
        hello: function hello(name) {
            return name ? "Hello, " + name + "!" : "Hello, World!";
        }
    };
};

;
module.exports = exports["default"];