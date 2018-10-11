"use strict";
import test from "ava";
import evaluateInnerStyles from "./";

test("to handle simple interpolation", t => {
    t.is(evaluateInnerStyles()`.head { color: red; }`, `.head { color: red; }`);
});

test("to handle function interpolation", t => {
  const color = () => "#303030";
  t.is(evaluateInnerStyles()`.head { color: ${color()} }`, `.head { color: #303030 }`);
});

test("to handle two level function interpolation", t => {
  const themed = () => () => "#303030";
  const color = themed();
  t.is(evaluateInnerStyles()`.head { color: ${color} }`, `.head { color: #303030 }`);
});

test("to handle two level function interpolation which returns template string with interpolation", t => {
  const color = () => "#303030";
  const headStyle = () => () => `color: ${color()}`;
  t.is(evaluateInnerStyles()`.head { ${headStyle} }`, `.head { color: #303030 }`);
});

test('to handle evaluate styles context', t => {
  const headColor = ({ mode }) => mode === 'dark' ? "#303030" : "#000000";
  t.is(evaluateInnerStyles({ mode: 'dark' })`.head { color: ${headColor} }`, '.head { color: #303030 }');
  t.is(evaluateInnerStyles({ mode: 'light' })`.head { color: ${headColor} }`, '.head { color: #000000 }');
});
