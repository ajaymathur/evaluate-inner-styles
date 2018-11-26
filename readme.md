# evaluate-inner-styles

> Generate static styles from JS at build time

Inspired by https://github.com/styled-components/styled-components/blob/master/src/constructors/css.js

## Usage

### Basic usage

```js
import evaluateInnerStyles from "evaluate-inner-styles";

const h1Color = "#172B4D";

evaluateInnerStyles()`
    h1: {
        color: ${h1Color};
    }
`;
// returns =>
// 'h1: {
//     color: #172B4D;
// }'
```

### Advance usage

We can generate styles with support for theme.

```js
import evaluateInnerStyles from "evaluate-inner-styles";

const headColor = ({ mode }) => (mode === "dark" ? "#303030" : "#000000");

evaluateInnerStyles({ mode: "dark" })`
    .head { 
        color: ${headColor} 
    }
`;
// returns =>
// .head {
//      color: #303030
//  }

evaluateInnerStyles({ mode: "light" })`
    .head {
        color: ${headColor}
    }
`;
// returns =>
// .head {
//      color: #000000
//  }
```
