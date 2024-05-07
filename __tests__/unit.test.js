// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


//PHONE NUMBER TESTS
test('too short phone number', () => {
  expect(isPhoneNumber('1234')).toBe(false);
});

test('letters', () => {
  expect(isPhoneNumber('my phone number')).toBe(false);
});

test('use parenthesis', () => {
  expect(isPhoneNumber('(324)-432-1369')).toBe(true);
});

test('10 digit number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

// EMAIL TESTS

test('no @ symbol', () => {
  expect(isEmail('johndoegmail.com')).toBe(false);
});

test('no .', () => {
  expect(isEmail('johndoe@gmailcom')).toBe(false);
});

test('gmail', () => {
  expect(isEmail('johndoe@gmail.com')).toBe(true);
});

test('ucsd email', () => {
  expect(isEmail('johndoe@ucsd.edu')).toBe(true);
});

// PASSWORD TESTS

test('too short password', () => {
  expect(isStrongPassword('a')).toBe(false);
});

test('whitespace', () => {
  expect(isStrongPassword('pass word')).toBe(false);
});

test('strong password 1', () => {
  expect(isStrongPassword('abd0d3dA0')).toBe(true);
});

test('normal password', () => {
  expect(isStrongPassword('dogCollar2004')).toBe(true);
});

// DATE TESTS

test('year only', () => {
  expect(isDate('2004')).toBe(false);
});

test('2004 shortened to 04', () => {
  expect(isDate('12/25/04')).toBe(false);
});

test('today', () => {
  expect(isDate('05/06/2024')).toBe(true);
});

test('today shortened', () => {
  expect(isDate('5/6/2024')).toBe(true);
});

// HEX COLOR TESTS

test('4 characters', () => {
  expect(isHexColor('3FFA')).toBe(false);
});

test('uses letters G-Z', () => {
  expect(isHexColor('A3G')).toBe(false);
});

test('white', () => {
  expect(isHexColor('FFFFFF')).toBe(true);
});

test('white shortened', () => {
  expect(isHexColor('FFF')).toBe(true);
});
