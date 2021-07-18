#!/usr/bin/env node
import program from 'commander';
import generateDiff from '../src/index.js';

program
  .version('0.2.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(generateDiff(filepath1, filepath2));
  });

program.parse();
