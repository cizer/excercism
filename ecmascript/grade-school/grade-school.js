function getDeepCopy(object){
    return JSON.parse(JSON.stringify(object));
}

export default function() {
  let db = {};

  return {
    roster() {
      return getDeepCopy(db);
    },

    add(name, grade) {
      if (!db[grade]) {
        db[grade] = [name];
      } else {
        let newDb = {};
        Object.keys(db).forEach(key => {
          key = parseInt(key, 10);
          newDb[key] = Object.assign([], db[key]);
          if (key === grade) {
            newDb[key].push(name);
          }
          newDb[key].sort();
        });
        db = newDb;
      }
    },

    grade(grade){
      if (!db[grade]) return [];
      return getDeepCopy(db)[grade];//.sort();
    },
  };
}
