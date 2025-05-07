// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// Phone
test('tests valid format with parenthesis', () => {
  expect(isPhoneNumber('(858) 568-6569')).toBe(true);
});
test('tests valid format with parenthesis', () => {
  expect(isPhoneNumber('858-568-6569')).toBe(true);
});
test('tests invalid format with parenthesis', () => {
  expect(isPhoneNumber('858 568 6569')).toBe(false);
});
test('tests invalid format with parenthesis', () => {
  expect(isPhoneNumber('855686569')).toBe(false);
});

// Email
test('tests valid formats', () => {
  expect(isEmail('user@example.com')).toBe(true);
});
test('tests valid format', () => {
  expect(isEmail('user_last@domain.co')).toBe(true);
});
test('tests invalid format with no .com', () => {
  expect(isEmail('user@example')).toBe(false);
});
test('tests valid format without @', () => {
  expect(isEmail('userexample.com')).toBe(false);
});

// Strong Password
test('tests valid strong password', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});
test('tests valid strong password', () => {
  expect(isStrongPassword('a1_b2C')).toBe(true);
});
test('tests invalid password', () => {
  expect(isStrongPassword('A1b')).toBe(false);
});
test('tests invalid password', () => {
  expect(isStrongPassword('1abcd12')).toBe(false);
});

// Date
test('tests valid date', () => {
  expect(isDate('1/1/2025')).toBe(true);
});
test('tests valid date', () => {
  expect(isDate('12/31/2024')).toBe(true);
});
test('tests invalid date', () => {
  expect(isDate('1-1-2025')).toBe(false);
});
test('tests invalid date', () => {
  expect(isDate('1/1/202')).toBe(false);
});

// Hex Color
test('tests valid hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('tests valid hex color', () => {
  expect(isHexColor('#abcdef')).toBe(true);
});
test('tests invalid hex color', () => {
  expect(isHexColor('#GGG')).toBe(false);
});
test('tests invalid hex color', () => {
  expect(isHexColor('#1234')).toBe(false);
});