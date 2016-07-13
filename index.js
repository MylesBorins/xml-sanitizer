// A list of invalid XML characters can be found at https://www.w3.org/TR/2000/REC-xml-20001006#NT-Char
// Originally found via http://www-01.ibm.com/support/docview.wss?uid=swg21514211&aid=1

var stripAnsi = require('strip-ansi');

function xmlSanitizer(string, replacement) {
  return stripAnsi(string.replace(/[\u0000-\u0008]|\u000B|\u000C|[\u000E-\u001F]|[\u007f-\u0084]|[\u0086-\u009f]|[\uD800-\uDFFF]|[\uFDD0-\uFDFF]|\uFFFF|\uC008/g, replacement || ''));
}

module.exports = xmlSanitizer;
