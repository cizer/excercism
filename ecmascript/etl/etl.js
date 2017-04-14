export default source => Object.entries(source)
  .reduce((output, [score, tiles]) => {
    tiles.forEach((tile) => {
      output[tile.toLowerCase()] = +score;
    });
    return output;
  }, {});
