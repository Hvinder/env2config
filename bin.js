#!/usr/bin/env node

const initEnvParse = require("./index");
const yargs = require("yargs");

const { envPath, targetPath, excludePrefixes = "[]" } = yargs.argv;

initEnvParse({
  envPath,
  targetPath,
  excludePrefixes: JSON.parse(excludePrefixes),
});
