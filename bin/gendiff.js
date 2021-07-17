#!/usr/bin/env node
import program from 'commander';
import loadFile from '../src/index.js';

program
  .version('0.2.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(loadFile(filepath1, filepath2));
  });

program.parse(process.argv);
