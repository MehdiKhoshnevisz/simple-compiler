/* 
    Lexical Analysis(Lexer or Tokenizer)

    The source code divided into tokens.
    such as keywords, oparators, identifiers, and literals.
*/

const tokenizer = (input = "") => {
  const tokens = input.split(" ");
  const tokenizerStructure = [];

  // Patterns
  const numbersPattern = /[0-9]/;
  const mathPattern = /\+|-|\*{1,2}|\/|%/;

  tokens.forEach((token) => {
    if (numbersPattern.test(token)) {
      tokenizerStructure.push({
        type: "number",
        value: token,
      });
    }

    if (mathPattern.test(token)) {
      tokenizerStructure.push({
        type: "oparator",
        value: token,
      });
    }
  });

  return tokenizerStructure;
};

export default tokenizer;
