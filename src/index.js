import { readFileSync } from 'fs';
import path from 'path';
import parser from './parsers.js';
import buildAst from './designer.js';

const symbolls = {
  unchanged: ' ',
  added: '+',
  removed: '-',
};

const render = (ast, depth = 1) => {
  const arr = Object.entries(ast);
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

export const loadFile = (filePath) => {
  const fileData = readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
  const fileExtension = path.extname(filePath).substr(1);
  const fileContent = parser(fileData, fileExtension);
  return fileContent;
};

export default (filePath1, filePath2) => {
  const fileContent1 = loadFile(filePath1);
  const fileContent2 = loadFile(filePath2);
  return render(buildAst(fileContent1, fileContent2));
};
