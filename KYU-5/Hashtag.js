function hashtagGenerator(str) {
  let trimmed = str
    .replace(/\s+/g, " ")
    .trim();
  return trimmed.length > 0 && trimmed.length < 140 ? 
    '#' + trimmed.split(" ").map((word) => (word = word[0].toUpperCase() + word.slice(1)))
    .join("") : false;
}

console.log(hashtagGenerator("  "));
