//no time to do validations on function params

export const UpperCaseArrayObjects = arr => {
  return arr.map(item => _UpperCaseObject(item));
};

const _UpperCaseObject = lObj => {
  let obj = { ...lObj };
  for (let i in obj) {
    obj[i] = obj[i].toUpperCase();
  }
  return obj;
};
