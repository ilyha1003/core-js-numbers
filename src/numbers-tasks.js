function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function getLinearEquationRoot(a, b) {
  return -b / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  return Math.acos(
    (x1 * x2 + y1 * y2) /
      (Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2))
  );
}

function getLastDigit(value) {
  return value % 10;
}

function parseNumberFromString(value) {
  return Number(value);
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

function roundToPowerOfTen(num, pow) {
  return 10 ** pow * Math.round(num / 10 ** pow);
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function toNumber(value, def) {
  return Number(value) || def;
}

function getCube(num) {
  return num ** 3;
}

/**
 * Returns the Fibonacci number located at the index position.
 *
 * @param {number} index
 * @return {number}
 *
 * @example:
 *   0  => 0
 *   1  => 1
 *   2  => 1
 *   3  => 2
 *   10 => 55
 */
function getFibonacciNumber(index) {
  if (index <= 1) {
    return index;
  }
  return getFibonacciNumber(index - 1) + getFibonacciNumber(index - 2);
}

/**
 * Returns the sum of all numbers from 1 to n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   5  => 15 // (1+2+3+4+5)
 *   10 => 55 // (1+2+3+...+10)
 *   1  => 1
 */
function getSumToN(/* n */) {
  throw new Error('Not implemented');
}

/**
 * Returns the sum of the digits of a given number.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   123 => 6  // (1+2+3)
 *   202 => 4  // (2+0+2)
 *   5   => 5  // 5
 */
function getSumOfDigits(/* num */) {
  throw new Error('Not implemented');
}

/**
 * Returns true if the given number is a power of two, false otherwise.
 *
 * @param {number} num
 * @return {boolean}
 *
 * @example:
 *   4   => true
 *   16  => true
 *   15  => false
 */
function isPowerOfTwo(/* num */) {
  throw new Error('Not implemented');
}

/**
 * Returns the sine of a number.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   0 => 0
 *   Math.PI / 2 => 1
 */
function getSine(/* num */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string representation of a number in a specified base (radix).
 *
 * @param {number} number
 * @param {number} base
 * @return {string}
 *
 * @example:
 * 255, 16 => 'ff'
 * 2, 2    => '10'
 */
function numberToStringInBase(/* number, base */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string representation of a number in exponential notation.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '1.23e+4'
 */
function toExponential(/* number, fractionDigits */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string representation of a number in fixed-point notation.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '12345.00'
 * 12.345, 1   => '12.3'
 */
function toFixed(/* number, fractionDigits */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string representation of a number in normal (fixed-point or exponential)
 * notation rounded to precision significant digits.
 *
 * @param {number} number
 * @param {number} precision
 * @return {string}
 *
 * @example:
 * 12345, 7    => '12345.00'
 * 12.345, 4   => '12.35'
 */
function toPrecision(/* number, precision */) {
  throw new Error('Not implemented');
}

/**
 * Returns the primitive value of a Number object.
 *
 * @param {Number} number
 * @return {number}
 *
 * @example:
 * new Number(5) => 5
 * Number(-5)    => -5
 */
function getNumberValue(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns a boolean value indicating whether the parameter is a number or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * Infinity => false
 * NaN      => false
 * 0        => true
 * 'a' / 1  => false
 * 'a'      => false
 * 5        => true
 * '5'      => false
 */
function isNumber(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns a boolean value indicating whether a number is an integer or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 5    => true
 * 5.1  => false
 * '5'  => false
 */
function isInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns a floating point number or, if the number cannot be parsed from the argument, returns NaN.
 *
 * @param {string} str
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh' => 4.567
 * 'abcdefgh'      => NaN
 */
function getFloatOnString(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Returns an integer of the specified base or, if the number cannot be parsed
 * from the argument, returns NaN.
 *
 * @param {string} str
 * @param {number} base
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh', 10  => 4
 * 'abcdefgh', 10       => NaN
 * '1.234', 2           => 1
 * '10', 8              => 8
 */
function getIntegerOnString(/* str, base */) {
  throw new Error('Not implemented');
}

/**
 * Returns whether a number is a safe integer.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 10       => true
 * 3.5      => false
 * 2 ** 53  => false
 */
function isSafeInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the smallest integer less than or equal to a given number.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.9  => 5
 * -5.1 => -6
 */
function roundToSmallestInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the largest integer greater than or equal to a given number.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.1  => 6
 * -5.9 => -5
 */
function roundToLargestInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the value of a number rounded to the nearest integer.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 6
 * 5.4  => 5
 * -5.5 => -5
 */
function roundToNearestInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the integer part of a number by removing any fractional digits.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 5
 * 5.4  => 5
 * -5.5 => -5
 */
function getIntegerPartNumber(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the sum of numbers.
 *
 * @param {number} x1
 * @param {number} x2
 * @param {number} x3
 * @returns {number}
 *
 * @example:
 * 1, 2, 3       => 6
 * 0.1, 0.2, 0.3 => 0.6
 */
function getSumOfNumbers(/* x1, x2, x3 */) {
  throw new Error('Not implemented');
}

/**
 * Returns the largest number.
 *
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 *
 * @example:
 * 1, 2   => 2
 * -5, -6 => -5
 * 0, 5   => 5
 */
function getMaxNumber(/* firstNumber, secondNumber */) {
  throw new Error('Not implemented');
}

/**
 * Returns a random integer in the range from min to max.
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 *
 * @example:
 * 1, 2  => 1 | 2
 * -5, 0 => -5 | -4 | -3 | -2 | -1 | 0
 * -1, 1 => -1 | 0 | 1
 */
function getRandomInteger(/* min, max */) {
  throw new Error('Not implemented');
}

/**
 * Returns the length of the hypotenuse of a right triangle.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 * 3, 4 => 5
 */
function getHypotenuse(/* a, b */) {
  throw new Error('Not implemented');
}

/**
 * Returns count of odd numbers from zero to the resulting number.
 * The resulting number is taken into account.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 4  => 2
 * 5  => 3
 * 10 => 5
 * 15 => 8
 */
function getCountOfOddNumbers(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
