# xml-sanitizer

> Sanitize out invalid xml characters from your strings

## Purpose

Have you ever tried to put the output of a child process into an xml document before? Certain CLI utilities will generate characters that look great on your terminal, but will cause mayhem in XML world. This package is a simply regular expression that will clean all of that up for you!

## Usage
```js
var xmlSanitizer = require('xml-sanitizer');
var someText = 'This is invalid \u0000';

xmlSanitizer(someText); \\ 'This is invalid '
xmlSanitizer(someText, '🎉'); \\ 'This is invalid 🎉'
```

## License

MIT.

You can find a copy in LICENSE in the root directory of this project.
