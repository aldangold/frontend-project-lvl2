import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import generateDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileExtensions = ['json', 'yml'];
const formats = ['stylish', 'plain', 'json'];

const testArgs = formats.flatMap((format) => (
  fileExtensions.map((fileExtension) => [fileExtension, format])
));

test.each(testArgs)('%s type files difference with %s output', (fileExtension, format) => {
  const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
  const before = getFixturePath(`before.${fileExtension}`);
  const after = getFixturePath(`after.${fileExtension}`);
  const output = readFileSync(getFixturePath(format), { encoding: 'utf8', flag: 'r' });
  expect(generateDiff(before, after, format)).toEqual(output);
});
