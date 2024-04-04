#!/usr/bin/env node

const initEnvParse = require("./index");
const yargs = require("yargs");

const {
  "env-file": envPath,
  output: targetPath,
  "exclude-prefixes": excludePrefixes = "[]",
} = yargs.argv;

initEnvParse({
  envPath,
  targetPath,
  excludePrefixes: JSON.parse(excludePrefixes),
});
