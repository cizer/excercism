'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function () {

    var responses = {
        shouting: 'Whoa, chill out!',
        question: 'Sure.',
        silent: 'Fine. Be that way!',
        whatever: 'Whatever.'
    };

    var isShouting = function isShouting(message) {
        var isShoutingMessage = message === message.toUpperCase();
        var isCaseInsensitive = message.toUpperCase() === message.toLowerCase();
        return isShoutingMessage && !isCaseInsensitive;
    };

    var isQuestion = function isQuestion(message) {
        return message.slice(-1) === "?";
    };

    var isSilent = function isSilent(message) {
        return message.trim() === "";
    };

    return {
        hey: function hey(message) {

            if (isSilent(message)) {
                return responses.silent;
            }

            if (isShouting(message)) {
                return responses.shouting;
            }

            if (isQuestion(message)) {
                return responses.question;
            }

            return responses.whatever;
        }
    };
};

module.exports = exports['default'];