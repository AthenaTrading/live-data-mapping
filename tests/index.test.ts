import { addNumbers } from '../src/index';
import { should, test } from 'vitest';

test('addNumbers should return the sum of two numbers', () => {
    const result = addNumbers(2, 3);
    should().equal(result, 5);
});

test('addNumbers should return 0 when both numbers are 0', () => {
    const result = addNumbers(0, 0);
    should().equal(result, 0);
});

test('addNumbers should return a negative number when one of the numbers is negative', () => {
    const result = addNumbers(-5, 3);
    should().equal(result, -2);
});

// Add more test cases as needed

// Run the tests
// test.run();

// Remove the duplicate import statement

test('addNumbers should return the sum of two positive numbers', () => {
    const result = addNumbers(2, 3);
    should().equal(result, 5);
});

test('addNumbers should return 0 when both numbers are 0', () => {
    const result = addNumbers(0, 0);
    should().equal(result, 0);
});

test('addNumbers should return a negative number when one of the numbers is negative', () => {
    const result = addNumbers(-5, 3);
    should().equal(result, -2);
});

// Add more test cases as needed

// Run the tests
test('addNumbers should return the sum of two negative numbers', () => {
    const result = addNumbers(-2, -3);
    should().equal(result, -5);
});

test('addNumbers should return the sum of a positive and a negative number', () => {
    const result = addNumbers(5, -3);
    should().equal(result, 2);
});

test('addNumbers should return the sum of two large numbers', () => {
    const result = addNumbers(1000000, 2000000);
    should().equal(result, 3000000);
});
