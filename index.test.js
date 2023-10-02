const { addition, multiplication, subtraction, division, modulo } = require("./index.js");
const { describe, test } = require('node:test');
const assert = require("node:assert/strict");

describe('Mathematical operations - function definitions', () => {
    test('tests whether addition is a function', () => {
    assert.strictEqual(typeof addition, 'function');   
    })
    test('tests whether multiplication is a function', () => {
    assert.strictEqual(typeof multiplication, 'function');   
    })  
    test('tests whether subtraction is a function', () => {
    assert.strictEqual(typeof subtraction, 'function');   
    })
    test('tests whether division is a function', () => {
    assert.strictEqual(typeof division, 'function');   
    })
    test('tests whether modulo is a function', () => {
    assert.strictEqual(typeof modulo, 'function');   
    })
})
describe('Mathematical operations - function testing', () => {
    test('addition function correctly adds 2 numbers', () => {
        assert.strictEqual(addition(1, 2), 3);
    })
    test('multiplication function correctly multiplies 2 numbers', () => {
        assert.strictEqual(multiplication(1, 2), 2);
    })
    test('subtraction function correctly subtracts 2 numbers', () => {
        assert.strictEqual(subtraction(1, 2), -1);
    })
    test('division function correctly divides 2 numbers', () => {
        assert.strictEqual(division(1, 2), 0.5);
    })
    test('modulo function correctly divides 2 numbers', () => {
        assert.strictEqual(modulo(1, 2), 1);
    })
})


