export default function () {
  return {
    count(sentence) {
      const wordExistsAndIsNumber = (counts, word) => counts[word] && typeof counts[word] === 'number';

      const updateCounts = (counts, word) => {
        wordExistsAndIsNumber(counts, word) ? counts[word]++ : counts[word] = 1;
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
