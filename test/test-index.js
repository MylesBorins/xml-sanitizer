'use strict';
var test = require('tap').test;

var xmlSanitizer = require('../');

// FIXME
// This does not incldue all characters between \uD800 - \uDFFF
// nor does it include all characters between \uFDD0 - \uFFFF
// Feel free to submit a PR including those or with a better way
// to source all of these characters

var invalidCharacters = [
  '\u0000',
  '\u0001',
  '\u0002',
  '\u0003',
  '\u0004',
  '\u0005',
  '\u0006',
  '\u0007',
  '\u0008',
  '\u000B',
  '\u000C',
  '\u000E',
  '\u000F',
  '\u0010',
  '\u0011',
  '\u0012',
  '\u0013',
  '\u0014',
  '\u0015',
  '\u0016',
  '\u0017',
  '\u0018',
  '\u0019',
  '\u001A',
  '\u001B',
  '\u001C',
  '\u001D',
  '\u001E',
  '\u001F',
  '\u007F',
  '\u0080',
  '\u0081',
  '\u0082',
  '\u0083',
  '\u0084',
  '\u0086',
  '\u0087',
  '\u0088',
  '\u0089',
  '\u008A',
  '\u008B',
  '\u008C',
  '\u008D',
  '\u008E',
  '\u008F',
  '\u0090',
  '\u0091',
  '\u0092',
  '\u0093',
  '\u0094',
  '\u0095',
  '\u0096',
  '\u0097',
  '\u0098',
  '\u0099',
  '\u009A',
  '\u009B',
  '\u009C',
  '\u009D',
  '\u009E',
  '\u009F',
  '\uD800',
  '\uDFFF',
  '\uFDD0',
  '\uFDFF',
  '\uFFFF'
];

test('Sanitizes as expected', function (t) {
  invalidCharacters.forEach(function(char) {
    t.equal(xmlSanitizer(char), '', 'it should return an empty string');
  });
  t.end();
});

test('Multiple Characters', function (t) {
  invalidCharacters.forEach(function(char) {
    t.equal(xmlSanitizer(char + '\u0000\u0000'), '', 'it should return an empty string');
  });
  t.end();
});

test('Replace Characters', function (t) {
  invalidCharacters.forEach(function(char) {
    t.equal(xmlSanitizer(char, '🎉'), '🎉', 'it should return 🎉');
  });
  t.end();
});

test('Do not replace proper character', function (t) {
  var text = 'Why oh why do you do this to me';
  t.equal(xmlSanitizer(text), text, 'it should return the original text');
  t.end();
});
