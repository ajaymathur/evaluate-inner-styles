# evaluate-inner-styles

> Compile the css-in-js before-hand for styled-components

Inspired by -> https://github.com/styled-components/styled-components/blob/master/src/constructors/css.js

We can export evaluated css styles from an object.

Basic usage:

```js
import evaluateInerStyles from 'evaluate-inner-styles';

evaluateInerStyles()`
    h1: {
        height: 10px;
    }
`
// returns =>
// h1: {
//     height: 10px;
// }

```
