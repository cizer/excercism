export default function perfectNumbers() {
  function sumOfFactors(number) {
    const half = Math.floor(number / 2);
    let sum = 0;
    for (let i = 1; i <= half; i++) {
      if(number % i === 0){
        sum += i;
      }
    }
    return sum;
  }

  return {
    classify(number) {
      if(number<=0){
        return 'Classification is only possible for natural numbers.';
      }

      const sum = sumOfFactors(number);
      return sum === number ?
        'perfect' :
        sum > number ?
        'abundant' :
        'deficient';
    },
  };
}
