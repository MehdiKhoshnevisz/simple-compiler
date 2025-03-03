import tokenizer from "./tokenizer.js";

const expression = "2 + 3";

const tokenTypes = tokenizer(expression);

console.log({ tokenTypes });
