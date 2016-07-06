import test from 'ava';
import {transform} from 'babel-core';
import plugin from '..';

function isEqual (t, fixture, expected) {
    t.deepEqual(transform(fixture, {plugins: [plugin]}).code, expected);
}

test(
    'object property',
    isEqual,
    'const code = {at: "@".charCodeAt(0)};',
    'const code = { at: 64 };'
);

test(
    'variable declaration',
    isEqual,
    'const at = "@".charCodeAt(0);',
    'const at = 64;'
);

test(
    'multiple variable declarations',
    isEqual,
    [
        'var minus = "-".charCodeAt(0);',
        'var plus = "+".charCodeAt(0);',
        'var dot = ".".charCodeAt(0);',
    ].join('\n'),
    'var minus = 45;\nvar plus = 43;\nvar dot = 46;'
);

test(
    'pass through other member expressions',
    isEqual,
    'const at = "@".slice(0);',
    'const at = "@".slice(0);'
);
