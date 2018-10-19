# evaluate-inner-styles

> Compile the css-in-js before-hand for styled-components

Inspired by -> https://github.com/styled-components/styled-components/blob/master/src/constructors/css.js

We can export evaluated css styles from an object.

Basic usage:

```js
import evaluateInnerStyles from 'evaluate-inner-styles';

evaluateInnerStyles()`
    h1: {
        height: 10px;
    }
`
// returns =>
// 'h1: {
//     height: 10px;
// }'
```

Usage with themes:

```js
import evaluateInnerStyles from 'evaluate-inner-styles';

const headColor = ({ mode }) => mode === 'dark' ? "#303030" : "#000000";

evaluateInnerStyles({ mode: 'dark' })`
    .head { 
        color: ${headColor} 
    }
`;
// returns => 
// .head {
//      color: #303030
//  }

evaluateInnerStyles({ mode: 'light' })`
    .head {
        color: ${headColor}
    }
`;
// returns => 
// .head {
//      color: #000000
//  }
```
