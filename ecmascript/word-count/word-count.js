export default function () {
  return {
    count(sentence) {
      const wordExistsAndIsNumber = (counts, word) => counts[word] && typeof counts[word] === 'number';

      const updateCounts = (counts, word) => {
        if (wordExistsAndIsNumber(counts, word)) {
          counts[word]++;
        } else {
          counts[word] = 1;
        }
        return counts;
      };

      return sentence
        .toLowerCase()
        .trim()
        .split(/[\s,]+/)
        .reduce((counts, word) => updateCounts(counts, word), {});
    },
  };
}
