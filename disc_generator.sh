#!/bin/bash

mkdir -p tmp

BUNDLE=tmp/bundle.js
BUNDLE_MIN=tmp/bundle.min.js
DISC=tmp/disc.html
DISC_MIN=tmp/disc.min.html
NODE_BIN=node_modules/.bin

$NODE_BIN/browserify src/index.js --full-paths > $BUNDLE
cat $BUNDLE | uglifyjs --mangle > $BUNDLE_MIN

echo -e '\nO_o Generating discs'
$NODE_BIN/discify $BUNDLE > $DISC
$NODE_BIN/discify $BUNDLE_MIN > $DISC_MIN
