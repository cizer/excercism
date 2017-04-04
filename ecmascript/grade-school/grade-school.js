function getDeepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}

export default function() {
  let db = {};

  return {
    roster() {
      return getDeepCopy(db);
    },

    add(name, grade) {
      !db[grade] ?
        db[grade] = [name] :
        db[grade] = [...db[grade], name].sort();
    },

    grade(grade) {
      if (!db[grade]) return [];
      return getDeepCopy(db)[grade];
    },
  };
}
