const verses = {
    zeroBottles: `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.\n`,
    oneBottle: `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.\n`,
    twoBottles: `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.\n`,
    manyBottles: (bottles) => {
        return `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.
Take one down and pass it around, ${bottles - 1} bottles of beer on the wall.\n`
    }
}

const verse = (bottles) => {
    if (bottles === 0) return verses.zeroBottles
    if (bottles === 1) return verses.oneBottle
    if (bottles === 2) return verses.twoBottles
    return verses.manyBottles(bottles)
}

const range = (start, end) =>
    Array.from({length: start - end + 1}, () => start--)

const sing = (start = 99, end = 0) =>
    range(start, end)
        .map((bottle, i, arr) =>
            verse(bottle) + (arr[i] === end ? `\n` : ``))
        .join('\n').slice(0, -1)

export default {
    verse,
    sing
}