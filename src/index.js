import { readFileSync } from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildDifference from './builddiff.js';
import format from './formatters/index.js';

const getDataFormat = (filePath) => path.extname(filePath).substr(1);

const getFormattedContent = (filePath) => {
  const fileData = readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
  const dataFormat = getDataFormat(filePath);
  const parsedData = parse(fileData, dataFormat);
  return parsedData;
};

const generateDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const parsedData1 = getFormattedContent(filePath1);
  const parsedData2 = getFormattedContent(filePath2);
  const astDifference = buildDifference(parsedData1, parsedData2);
  return format(astDifference, formatName);
};

export default generateDiff;
