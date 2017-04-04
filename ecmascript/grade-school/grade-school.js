function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}

export default function() {
  let db = {};

  return {
    roster() {
      return deepCopy(db);
    },

    add(name, grade) {
      !db[grade] ?
        db[grade] = [name] :
        db[grade] = [...db[grade], name].sort();
    },

    grade(grade) {
      return db[grade] ?
        deepCopy(db[grade]) : [];
    },
  };
}
