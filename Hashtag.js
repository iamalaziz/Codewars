/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false. 
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function hashtagGenerator(str) {
  let trimmed = str
    .replace(/\s+/g, " ")
    .trim();
  return trimmed.length > 0 && trimmed.length < 140 ? 
    '#' + trimmed.split(" ").map((word) => (word = word[0].toUpperCase() + word.slice(1)))
    .join("") : false;
}

console.log(hashtagGenerator("  "));
