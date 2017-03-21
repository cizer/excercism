export default function (dob) {
  const gigasecond = 10 ** 9;
  return {
    date() {
      return new Date(dob.getTime() + (gigasecond * 1000));
    },
  };
}
