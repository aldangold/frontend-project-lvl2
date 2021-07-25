import _ from 'lodash';

const symbolls = {
  unchanged: ' ',
  added: '+',
  removed: '-',
  nested: ' ',
};

const unpackObject = (data) => {
  if (!_.isPlainObject(data)) {
    return data;
  }
  return Object.keys(data).map((key) => ({ key, status: 'unchanged', value: data[key] }));
};

const renderAst = (ast, depth = 1) => {
  const indent = ' '.repeat(depth);
  const result = [];
  ast.forEach((elem) => {
    if (elem.status === 'nested') {
      result.push(`${indent}${symbolls.nested} ${elem.key}: {\n`);
      result.push(renderAst(elem.value, depth + 4));
      result.push(`${indent}  }\n`);
    } else if (_.isPlainObject(elem.value)) {
      result.push(`${indent}${symbolls[elem.status]} ${elem.key}: {\n`);
      result.push(renderAst(unpackObject(elem.value), depth + 4));
      result.push(`${indent}  }\n`);
    } else if (elem.status === 'changed') {
      result.push(`${indent}${symbolls.removed} ${elem.key}: ${elem.value[0]}\n`);
      result.push(`${indent}${symbolls.added} ${elem.key}: ${elem.value[1]}\n`);
    } else {
      result.push(`${indent}${symbolls[elem.status]} ${elem.key}: ${elem.value}\n`);
    }
  });
  return result.join('');
};

const render = (astDiff) => `{\n${renderAst(astDiff)}}`;

export default render;
