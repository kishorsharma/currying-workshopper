#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')


function fpath (f) {
  return path.join(__dirname, f)
}

workshopper({
      name        : 'curry'
    , appDir      : __dirname
})
