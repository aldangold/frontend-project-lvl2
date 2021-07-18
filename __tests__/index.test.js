import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const pathFile1 = getFixturePath('file1.json');
const pathFile2 = getFixturePath('file2.json');
const pathFileOutput = getFixturePath('file_output');
const dataFileOutput = readFileSync(pathFileOutput, { encoding: 'utf8', flag: 'r' });

test('gendif flat file', () => {
  expect(genDiff(pathFile1, pathFile2)).toBe(dataFileOutput);
});
