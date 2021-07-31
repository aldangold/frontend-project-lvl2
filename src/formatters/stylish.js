import _ from 'lodash';

const symbols = {
  unupdated: ' ',
  added: '+',
  removed: '-',
  nested: ' ',
};

const indent = 4;
const setIndent = (depth, spaces = 2) => ' '.repeat(depth * indent - spaces);

const stringify = (value, depth) => {
  if (!_.isObject(value)) return value;
  return `{\n${Object.entries(value).map(([key, val]) => `${setIndent(depth)}  ${key}: ${stringify(val,
    depth + 1)}`).join('\n')}\n${setIndent(depth - 1)}  }`;
};

const renderAst = (elem, depth) => {
  switch (elem.status) {
    case 'added':
    case 'removed':
    case 'unupdated':
      return `${setIndent(depth)}${symbols[elem.status]} ${elem.key}: ${stringify(elem.value, depth + 1)}`;
    case 'updated':
      return `${setIndent(depth)}${symbols.removed} ${elem.key}: ${stringify(elem.valueBefore,
        depth + 1)}\n${setIndent(depth)}${symbols.added} ${elem.key}: ${stringify(elem.valueAfter, depth + 1)}`;
    case 'nested':
      return `${setIndent(depth)}${symbols[elem.status]} ${elem.key}: {\n${elem.children
        .map((element) => renderAst(element, depth + 1)).join('\n')}\n  ${setIndent(depth)}}`;
    default:
      throw new Error('Unknown state!');
  }
};

export default (astDifference) => `{\n${astDifference.map((elem) => renderAst(elem, 1)).join('\n')}\n}`;
