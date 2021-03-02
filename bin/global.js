#!/usr/bin/env node
const gcm = require('../lib/index.js');
const message = process.argv[2];

gcm(message.trim());