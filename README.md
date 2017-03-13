Simple library to create js custom error, the correct way.
Uses the method suggested [here](http://stackoverflow.com/questions/783818/how-do-i-create-a-custom-error-in-javascript) and [here](http://stackoverflow.com/questions/8802845/inheriting-from-the-error-object-where-is-the-message-property).

# Usage

```
const BadNewsError = require('custom-error-js')('BadNews')

const e = new BadNewsError('It just crashed')

// e.name == 'BadNews'
// e.message == 'It just Crashed'
// e instanceOf Error

throw e
```