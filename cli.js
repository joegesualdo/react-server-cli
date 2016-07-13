#!/usr/bin/env node

var parseArgv = require('parse-argv')
let path = require('path')
const ReactServer = require('@joegesualdo/react-server');

var argv = parseArgv(process.argv.slice(2), {
  usage: '$ react-server [options]',
  options: [
    {
      flag: 'entry',
      alias: 'e',
      description: 'The entry file you want built'
    },
    {
      flag: 'output',
      alias: 'o',
      description: 'The path were you want to store the build file'
    }
  ],
  examples: [
    {
      usage: "$ react-server --entry='./index.jsx' --output='assets/bundle.js'",
      output: ''
    }
  ]
})

let inputPath = argv['entry']
let outputPath = argv['output']
let server = new ReactServer();

server.start(inputPath, outputPath);
