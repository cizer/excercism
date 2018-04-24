const EARTH_YEAR_IN_SECONDS = 31557600;
const ORBITAL = {
  Earth: 1,
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132,
};

const round = text => parseFloat(text.toFixed(2));

const getYears = orbital => seconds =>
  round(1 / orbital * seconds / EARTH_YEAR_IN_SECONDS);

export default (seconds) => {
  const service = { seconds };
  Object.keys(ORBITAL).forEach((key) => {
    service[`on${key}`] = () => getYears(ORBITAL[key])(seconds);
  });
  return service;
};
