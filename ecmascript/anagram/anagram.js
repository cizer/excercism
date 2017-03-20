export default function (_anagram) {
  return {
    matches(...words) {
      const wordList = typeof words[0] === 'string' ? words : words[0];
      const anagram = _anagram.toLowerCase();

      return wordList.filter((word) => {
        let clone = anagram;

        [...word.toLowerCase()].forEach((a) => {
          const excisePoint = clone.indexOf(a);
          clone = clone.substr(0, excisePoint) + clone.substr(excisePoint + 1);
        });

        return clone.length === 0 &&
          anagram.length === word.length &&
          anagram !== word.toLowerCase();
      });
    },
  };
}
