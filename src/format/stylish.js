import _ from 'lodash';

const symbolls = {
  unchanged: ' ',
  added: '+',
  removed: '-',
  nested: ' ',
};

const indent = (depth) => ' '.repeat(depth);

const unpackObject = (data) => {
  if (!_.isPlainObject(data)) return data;
  return _.keys(data).map((key) => ({ key, status: 'unchanged', value: data[key] }));
};

const getString = (data, depth) => {
  if (!_.isObject(data)) return data;
  return _.keys(data).map((key) => `{\n  ${indent(depth + 4)}${key}: ${data[key]}\n  ${indent(depth)}}`);
};

const renderAst = (ast, depth = 1) => {
  const result = [];
  ast.forEach((elem) => {
    if (elem.status === 'nested') {
      result.push(`${indent(depth)}${symbolls.nested} ${elem.key}: {\n`);
      result.push(renderAst(elem.children, depth + 4));
      result.push(`${indent(depth)}  }\n`);
    } else if (_.isPlainObject(elem.value)) {
      result.push(`${indent(depth)}${symbolls[elem.status]} ${elem.key}: {\n`);
      result.push(renderAst(unpackObject(elem.value), depth + 4));
      result.push(`${indent(depth)}  }\n`);
    } else if (elem.status === 'changed') {
      result.push(`${indent(depth)}${symbolls.removed} ${elem.key}: ${getString(elem.value1, depth)}\n`);
      result.push(`${indent(depth)}${symbolls.added} ${elem.key}: ${getString(elem.value2, depth)}\n`);
    } else {
      result.push(`${indent(depth)}${symbolls[elem.status]} ${elem.key}: ${elem.value}\n`);
    }
  });
  return result.join('');
};

const render = (astDiff) => `{\n${renderAst(astDiff)}}`;

export default render;
