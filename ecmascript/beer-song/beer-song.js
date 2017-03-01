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

        const getFirstLine = (number) => `${capitalizeFirstLetter(getBottles(number))} of beer on the wall, ${getBottles(number)} of beer.\n`;

        const getLastLine = (number) => {
            if (number > 0) {
                return `Take ${getPronoun(number)} down and pass it around, ${getBottles(number - 1)} of beer on the wall.\n`
            } else {
                return `Go to the store and buy some more, ${getBottles(99)} of beer on the wall.\n`
            }
        };

        return (getFirstLine(number) + getLastLine(number))
    },

    sing(start, end)
    {
        start = start || 99;
        end = end || 0;

        let song = ``;
        for (let i = start; i >= end; i--) {
            song += this.verse(i);
            song += i !== end ? '\n' : ``
        }
        return song;
    }
}