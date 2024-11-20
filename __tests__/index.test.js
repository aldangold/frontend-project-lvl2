import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import generateDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileExtensions = ['json', 'yml'];
const formatters = ['stylish', 'plain'];

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const stylish = readFileSync(getFixturePath('stylish'), { encoding: 'utf8', flag: 'r' });
const plain = readFileSync(getFixturePath('plain'), { encoding: 'utf8', flag: 'r' });
// const json = readFileSync(getFixturePath('json'), { encoding: 'utf8', flag: 'r' });

const output = { stylish, plain };

const testArgs = formatters.flatMap((format) => (
  fileExtensions.map((fileExtension) => [fileExtension, format])
));

test.each(testArgs)('%s type files difference with %s output', (fileExtension, format) => {
  const file1 = getFixturePath(`file1.${fileExtension}`);
  const file2 = getFixturePath(`file2.${fileExtension}`);
  expect(generateDiff(file1, file2, format)).toStrictEqual(output[format]);
});
