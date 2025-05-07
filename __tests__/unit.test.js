// unit.test.js
import * as functions from '../code-to-unit-test/unit-test-me.js';

// TODO - Part 2

// Tests for isPhoneNumber
test('isPhoneNumber returns true for valid format (123) 456-7890', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber returns true for valid format 123-456-7890', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber returns false for missing separators 1234567890', () => {
  expect(functions.isPhoneNumber('1234567890')).toBe(false);
});
test('isPhoneNumber returns false for short number 456-789', () => {
  expect(functions.isPhoneNumber('456-789')).toBe(false);
});

// Tests for isEmail
test('isEmail returns true for simple valid email user@example.com', () => {
  expect(functions.isEmail('user@example.com')).toBe(true);
});
test('isEmail returns true for valid email john_doe@domain.co', () => {
  expect(functions.isEmail('john_doe@domain.co')).toBe(true);
});
test('isEmail returns false for missing @ symbol userexample.com', () => {
  expect(functions.isEmail('userexample.com')).toBe(false);
});
test('isEmail returns false for missing TLD user@domain', () => {
  expect(functions.isEmail('user@domain')).toBe(false);
});

// Tests for isStrongPassword
test('isStrongPassword returns true for valid password Abcd1234', () => {
  expect(functions.isStrongPassword('Abcd1234')).toBe(true);
});
test('isStrongPassword returns true for valid password a1_b2C', () => {
  expect(functions.isStrongPassword('a1_b2C')).toBe(true);
});
test('isStrongPassword returns false for too short password A1b', () => {
  expect(functions.isStrongPassword('A1b')).toBe(false);
});
test('isStrongPassword returns false for starting with digit 1abcd12', () => {
  expect(functions.isStrongPassword('1abcd12')).toBe(false);
});

// Tests for isDate
test('isDate returns true for single-digit month and day 1/1/2020', () => {
  expect(functions.isDate('1/1/2020')).toBe(true);
});
test('isDate returns true for two-digit month and day 12/31/2020', () => {
  expect(functions.isDate('12/31/2020')).toBe(true);
});
test('isDate returns false for wrong separators 12-31-2020', () => {
  expect(functions.isDate('12-31-2020')).toBe(false);
});
test('isDate returns false for two-digit year 12/31/20', () => {
  expect(functions.isDate('12/31/20')).toBe(false);
});

// Tests for isHexColor
test('isHexColor returns true for shorthand #ABC', () => {
  expect(functions.isHexColor('#ABC')).toBe(true);
});
test('isHexColor returns true for six-digit lowercase #abcdef', () => {
  expect(functions.isHexColor('#abcdef')).toBe(true);
});
test('isHexColor returns false for invalid characters #GGG', () => {
  expect(functions.isHexColor('#GGG')).toBe(false);
});
test('isHexColor returns false for incorrect length #1234', () => {
  expect(functions.isHexColor('#1234')).toBe(false);
});

