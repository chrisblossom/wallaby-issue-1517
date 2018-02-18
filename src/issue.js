'use strict';

const path = require('path');
const existsSync = require('fs').existsSync;

function issue() {
    const file = path.resolve(process.cwd(), '.test_file');
    const exists = existsSync(file);

    return exists;
}

module.exports = issue;
