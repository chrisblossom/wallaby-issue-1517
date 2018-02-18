'use strict';

const babel = {
    presets: [
        [
            'env',
            {
                targets: {
                    node: 'current',
                },
                useBuiltIns: true,
            },
        ],
    ],
    plugins: ['dynamic-import-node', 'transform-object-rest-spread'],
};

module.exports = babel;
