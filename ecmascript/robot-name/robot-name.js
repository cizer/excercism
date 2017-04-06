const letters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
  'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

let nameHistory = new Set();

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function getRandomFromList(list) {
  return list[getRandomNumber(list.length -1)];
}

function getRandomDigits() {
  return `00${getRandomNumber(999)}`.slice(-3);
}

function generateName() {
  return getRandomFromList(letters) + getRandomFromList(letters) + getRandomDigits();
}

function getRobotName() {
  const name = generateName();
  if (nameHistory.has(name)) {
    return getRobotName();
  }
  nameHistory.add(name);
  return name;
}

export default function() {
  let name = getRobotName();

  return {
    get name() {
      return name
    },
    reset() {
      name = getRobotName();
    },
  };
}
