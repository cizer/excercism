export default  {
    verse(number)
    {
        const getBottles = (number) => {
            if (number === 0) {
                return `no more bottles`
            } else if (number === 1) {
                return `1 bottle`
            }
            return `${number} bottles`
        };

        const getPronoun = (number) => {
            return number === 1 ? `it` : `one`;
        };

        return `${getBottles(number)} of beer on the wall, ${getBottles(number)} of beer.
Take ${getPronoun(number)} down and pass it around, ${getBottles(number - 1)} of beer on the wall.
`
    },

    sing(start, end){

    }
}