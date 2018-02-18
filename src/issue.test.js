'use strict';

const path = require('path');

const issue = () => require('./issue')();

describe('wallaby-issue-1517', () => {
    const cwd = process.cwd();

    afterEach(() => {
        process.chdir(cwd);
    });

    it('example', () => {
        const dir = path.resolve(__dirname, '__sandbox__/test1/');
        process.chdir(dir);

        const exists = issue();

        expect(exists).toEqual(true);
    });
});
