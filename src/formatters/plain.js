import _ from 'lodash';

const stringifyValue = (value) => {
  if (_.isPlainObject(value)) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return value;
};

const renderAst = (ast, parent = '') => {
  const result = [];
  ast.forEach((elem) => {
    switch (elem.status) {
      case 'nested':
        result.push(renderAst(elem.children, `${parent + elem.key}.`));
        break;
      case 'updated':
        result.push(`Property '${parent}${elem.key}' was ${elem.status}. From ${
          stringifyValue(elem.value1)} to ${stringifyValue(elem.value2)}`);
        break;
      case 'removed':
        result.push(`Property '${parent}${elem.key}' was ${elem.status}`);
        break;
      case 'added':
        result.push(`Property '${parent}${elem.key}' was ${elem.status} with value: ${
          stringifyValue(elem.value)}`);
        break;
      default:
        break;
    }
  });
  return result.join('\n');
};

export default (astDifference) => renderAst(astDifference);
