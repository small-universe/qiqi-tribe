module.exports = [
  "",
  {
    title: "JS 介绍",
    prefix: "intro/",
    collapsable: false,
    children: ["", "history"],
  },
  {
    title: "快速上手",
    path: "guide/",
    prefix: "guide/",
    collapsable: false,
    children: [
      "get-started",
      "grammar",
      "data-structure",
      "variable",
      "boolean",
      "condition",
      "loop",
      "string",
      "array",
      "object",
      "exercise",
      "function",
      "map-and-set",
      "iterable",
    ],
  },
  {
    title: "数据类型",
    path: "types/",
    prefix: "types/",
    collapsable: false,
    children: [
      "general",
      "boolean",
      "number",
      "string",
      "null-undefined",
      "object",
      "function",
      "array",
    ],
  },
  {
    title: "运算符",
    path: "operators/",
    prefix: "operators/",
    collapsable: false,
    children: ["arithmetic", "comparison", "boolean", "bit", "priority"],
  },
  {
    title: "函数",
    path: "function/",
    prefix: "function/",
    collapsable: false,
    children: [
      "intro",
      "declare",
      "call",
      "method",
      "scope",
      "destructuring",
      "this",
      "arrow-function",
      "higher-order-function",
      "map-and-reduce",
      "closure",
      "generator",
    ],
  },
  {
    title: "对象",
    path: "object/",
    prefix: "object/",
    collapsable: false,
    children: [
      "intro",
      "create",
      "extend",
      "class",
      "wrap",
      "date",
      "regExp",
      "JSON",
    ],
  },
  {
    title: "浏览器",
    path: "browser/",
    prefix: "browser/",
    collapsable: false,
    children: [
      "intro",
      "browser-object",
      "DOM",
      "form",
      "file",
      "AJAX",
      "promise",
      "canvas",
    ],
  },
  {
    title: "ES6",
    path: "es6/",
    prefix: "es6/",
    collapsable: false,
    children: [
      "intro",
      "let",
      "destructuring",
      "string",
      "regex",
      "number",
      "function",
      "array",
      "object",
      "symbol",
      "set-map",
      "proxy",
      "reflect",
      "promise",
      "iterator",
      "generator",
      "generator-async",
      "async",
      "class",
      "class-extends",
      "decorator",
      "module",
      "module-loader",
      "style",
      "spec",
      "arraybuffer",
    ],
  },
  "error",
];