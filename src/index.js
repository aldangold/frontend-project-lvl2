import { readFileSync } from 'fs';
import _ from 'lodash';

const symbolls = {
  unchanged: ' ',
  added: '+',
  removed: '-',
};

const format = (obj, depth = 1) => {
  const arr = Object.entries(obj);
  const indent = ' '.repeat(depth);
  let str = '';
  arr.forEach(([key, valueKey]) => {
    if (valueKey.status === 'changed') {
      str += `${indent}${symbolls.removed} ${key}: ${valueKey.valueBefore}\n`;
      str += `${indent}${symbolls.added} ${key}: ${valueKey.valueAfter}\n`;
    } else {
      str += `${indent}${symbolls[valueKey.status]} ${key}: ${valueKey.value}\n`;
    }
  });

  const result = `{\n${str}}`;
  return result;
};

const genDiff = (dataFile1, dataFile2) => {
  const commonKeys = _.intersection(Object.keys(dataFile1), Object.keys(dataFile2));
  const removedKeys = _.difference(Object.keys(dataFile1), Object.keys(dataFile2));
  const addedKeys = _.difference(Object.keys(dataFile2), Object.keys(dataFile1));
  const diffResult = {};
  commonKeys.forEach((key) => {
    if (dataFile1[key] === dataFile2[key]) {
      diffResult[key] = { status: 'unchanged', value: dataFile1[key] };
    } else {
      diffResult[key] = { status: 'changed', valueBefore: dataFile1[key], valueAfter: dataFile2[key] };
    }
  });
  addedKeys.forEach((key) => {
    diffResult[key] = { status: 'added', value: dataFile2[key] };
  });
  removedKeys.forEach((key) => {
    diffResult[key] = { status: 'removed', value: dataFile1[key] };
  });
  const diffSorted = Object.keys(diffResult).sort().reduce(
    (acc, key) => {
      const result = { ...acc };
      result[key] = diffResult[key];
      return result;
    }, {},
  );
  return diffSorted;
};

export const loadFile = (path) => {
  const dataFile = readFileSync(path, { encoding: 'utf8', flag: 'r' });
  const result = JSON.parse(dataFile);
  return result;
};

export default (path1, path2) => format(genDiff(loadFile(path1), loadFile(path2)));
