import _ from 'lodash';

export default (fileContent1, fileContent2) => {
  const commonKeys = _.intersection(Object.keys(fileContent1), Object.keys(fileContent2));
  const removedKeys = _.difference(Object.keys(fileContent1), Object.keys(fileContent2));
  const addedKeys = _.difference(Object.keys(fileContent2), Object.keys(fileContent1));
  const unsortDiff = {};
  commonKeys.forEach((key) => {
    if (fileContent1[key] === fileContent2[key]) {
      unsortDiff[key] = { status: 'unchanged', value: fileContent1[key] };
    } else {
      unsortDiff[key] = { status: 'changed', valueBefore: fileContent1[key], valueAfter: fileContent2[key] };
    }
  });
  addedKeys.forEach((key) => {
    unsortDiff[key] = { status: 'added', value: fileContent2[key] };
  });
  removedKeys.forEach((key) => {
    unsortDiff[key] = { status: 'removed', value: fileContent1[key] };
  });
  const sortDiff = Object.keys(unsortDiff).sort().reduce(
    (acc, key) => {
      const result = { ...acc };
      result[key] = unsortDiff[key];
      return result;
    }, {},
  );
  return sortDiff;
};
