//codewars Replace with Alphabet Position

function alphabetPosition(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
}
  return result.slice(0, result.length - 1);
}
