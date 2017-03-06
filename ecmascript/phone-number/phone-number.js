function containsLetters(string) {
    return string.match(/[a-z]/i) !== null;
}

function isNumber(digit) {
    return !Number.isNaN(parseInt(digit, 10));
}

function removePunctuation(number) {
    return number
        .split('')
        .filter(digit => isNumber(digit) || containsLetters(digit))
        .join('');
}

function isValid(number) {
    return number.length === 10 && !containsLetters(number);
}

export default function (phoneNumber) {
    return {
        number() {
            const result = removePunctuation(phoneNumber)
            if (isValid(result)) {
                return result
            }
            if (result.length === 11 && result.slice(0, 1) === "1") {
                return result.slice(1)
            }
            return null
        }
    }

}