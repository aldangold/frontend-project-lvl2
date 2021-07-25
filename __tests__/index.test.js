import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('gendif flat file ext: json, yaml', () => {
  const pathFile1Json = getFixturePath('file1.json');
  const pathFile2Json = getFixturePath('file2.json');
  const pathFile1Yaml = getFixturePath('file1.yml');
  const pathFile2Yaml = getFixturePath('file2.yml');
  const pathFileOutput = getFixturePath('file1_output');
  const dataFileOutput = readFileSync(pathFileOutput, { encoding: 'utf8', flag: 'r' });
  expect(genDiff(pathFile1Json, pathFile2Json)).toBe(dataFileOutput);
  expect(genDiff(pathFile1Yaml, pathFile2Yaml)).toBe(dataFileOutput);
});

test('gendif nested file ext: json, yaml', () => {
  const pathFile1Json = getFixturePath('file3.json');
  const pathFile2Json = getFixturePath('file4.json');
  const pathFile1Yaml = getFixturePath('file3.yml');
  const pathFile2Yaml = getFixturePath('file4.yml');
  const pathFileOutput = getFixturePath('file2_output');
  const dataFileOutput = readFileSync(pathFileOutput, { encoding: 'utf8', flag: 'r' });
  expect(genDiff(pathFile1Json, pathFile2Json)).toBe(dataFileOutput);
  expect(genDiff(pathFile1Yaml, pathFile2Yaml)).toBe(dataFileOutput);
});
