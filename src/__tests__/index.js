import test from 'ava';
import plugin from '..';
import {transform} from 'babel-core';

test('object property', t => {
    const fixture = 'const code = {at: "@".charCodeAt(0)};';
    const expected = 'const code = { at: 64 };';
    t.deepEqual(transform(fixture, {plugins: [plugin]}).code, expected);
});

test('variable declaration', t => {
    const fixture = 'const at = "@".charCodeAt(0);';
    const expected = 'const at = 64;';
    t.deepEqual(transform(fixture, {plugins: [plugin]}).code, expected);
});

test('multiple variable declarations', t => {
    const fixture = [
        'var minus = "-".charCodeAt(0);',
        'var plus = "+".charCodeAt(0);',
        'var dot = ".".charCodeAt(0);'
    ].join('\n');
    const expected = 'var minus = 45;\nvar plus = 43;\nvar dot = 46;';
    const output = transform(fixture, {plugins: [plugin]}).code;
    t.deepEqual(expected, output);
});

test('pass through other member expressions', t => {
    const fixture = 'const at = "@".slice(0);';
    const expected = 'const at = "@".slice(0);';
    t.deepEqual(transform(fixture, {plugins: [plugin]}).code, expected);
});
