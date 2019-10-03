// Converts sentence to correct form
export default function correctSentence(text) {
  if (!text.endsWith('.')) {
    text = text + ".";
  }
  // We can pass checking length, as it is at least 1, after first step where we added period.
  var first_letter = text.slice(0, 1);
  var suffix = text.slice (1, text.length);
  return first_letter.toUpperCase() + suffix;
}
