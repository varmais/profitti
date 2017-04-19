#!/usr/bin/env bash
BABEL_ENV=test mocha --require mocha-setup.js --compilers js:babel-core/register --require babel-polyfill --watch `find src -name "$1.spec.js" | xargs`