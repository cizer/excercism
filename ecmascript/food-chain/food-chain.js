const songData = [{
    animal: 'fly',
    description: 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
  },
  {
    animal: 'spider',
    description: 'It wriggled and jiggled and tickled inside her.\n',
  },
  {
    animal: 'bird',
    description: 'How absurd to swallow a bird!\n',
  },
  {
    animal: 'cat',
    description: 'Imagine that, to swallow a cat!\n',
  },
  {
    animal: 'dog',
    description: 'What a hog, to swallow a dog!\n',
  },
  {
    animal: 'goat',
    description: 'Just opened her throat and swallowed a goat!\n',
  },
  {
    animal: 'cow',
    description: 'I don\'t know how she swallowed a cow!\n',
  },
  {
    animal: 'horse',
    description: 'She\'s dead, of course!\n',
  },
];

const range = (start, end) =>
  Array.from({
    length: (end - start) + 1
  }, () => start++);

export default function() {
  return {
    verses(start, end) {
      return range(start, end)
        .map(verseNumber => {
          return this.verse(verseNumber);
        }).join('\n') + '\n';
    },

    verse(verseNumber) {
      const verseData = songData.slice(0, verseNumber);
      const totalLines = verseData.length;

      return verseData
        .reverse()
        .reduce((output, verse, index) => {
          if (index === 0) {
            output += `I know an old lady who swallowed a ${verse.animal}.\n`;
            output += verse.description;
          }

          if (totalLines === songData.length) {
            return output;
          }

          if (totalLines > 1 && (index + 1 < totalLines)) {
            if (verse.animal === 'bird') {
              output += `She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n`
            } else {
              output += `She swallowed the ${verse.animal} to catch the ${verseData[index + 1].animal}.\n`
            }
          }
          if (totalLines > 1 && totalLines - 1 === index) {
            output += verse.description;
          }
          return output;
        }, '');
    },
  };
}
