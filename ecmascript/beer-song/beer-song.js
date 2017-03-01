export default  {
    verse(number)
    {
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        const getBottles = (number) => {
            if (number === 0) {
                return `no more bottles`
            }
            if (number === 1) {
                return `1 bottle`
            }
            return `${number} bottles`
        };

        const getPronoun = (number) => {
            return number === 1 ? `it` : `one`;
        };

        const getFirstLine = (number) => `${capitalizeFirstLetter(getBottles(number))} of beer on the wall, ${getBottles(number)} of beer.`;

        const getLastLine = (number) => {
            if (number > 0) {
                return `Take ${getPronoun(number)} down and pass it around, ${getBottles(number - 1)} of beer on the wall.`
            } else {
                return `Go to the store and buy some more, ${getBottles(99)} of beer on the wall.`
            }
        };

        return (getFirstLine(number) + `\n` + getLastLine(number) + `\n`)
    },

    sing(start, end)
    {
        start = start || 99;
        end = end || 0;

        const range = (start = null, end = null) => Array.from({length: start - end + 1}, (v, k) => start--);

        return range(start, end)
            .map((number, i, arr) => this.verse(number) + (arr[i]===end ? `\n`: ``))
            .join('\n').slice(0, -1);
    }
}