import _ from 'lodash';

const buildAst = (fileContent1, fileContent2) => {
  const getDifference = (array1, array2, key) => {
    if (!_.has(array1, key)) {
      return { key, status: 'added', value: array2[key] };
    }
    if (!_.has(array2, key)) {
      return { key, status: 'removed', value: array1[key] };
    }
    if (_.isObject(array1[key]) && _.isObject(array2[key])) {
      return { key, status: 'nested', children: buildAst(array1[key], array2[key]) };
    }
    if (array1[key] !== array2[key]) {
      return {
        key, status: 'changed', value1: array1[key], value2: array2[key],
      };
    }
    return { key, status: 'unchanged', value: array1[key] };
  };

  const keys = _.sortBy(_.union(Object.keys(fileContent1), Object.keys(fileContent2)));
  return keys.map((key) => getDifference(fileContent1, fileContent2, key));
};

export default buildAst;
