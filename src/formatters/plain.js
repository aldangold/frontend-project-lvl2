import _ from 'lodash';

const stringifyValue = (value) => {
  if (_.isPlainObject(value)) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return value;
};

const renderAst = (elem, parent = '') => {
  switch (elem.status) {
    case 'nested':
      return elem.children.map((element) => renderAst(element, `${parent + elem.key}.`))
        .filter((el) => el !== null).join('\n');
    case 'updated':
      return `Property '${parent}${elem.key}' was ${elem.status}. From ${
        stringifyValue(elem.valueBefore)} to ${stringifyValue(elem.valueAfter)}`;
    case 'removed':
      return `Property '${parent}${elem.key}' was ${elem.status}`;
    case 'added':
      return `Property '${parent}${elem.key}' was ${elem.status} with value: ${
        stringifyValue(elem.value)}`;
    case 'unupdated':
      return null;
    default:
      throw new Error('Unknown state!');
  }
};

export default (astDifference) => `${astDifference.map((elem) => renderAst(elem)).join('\n')}`;
