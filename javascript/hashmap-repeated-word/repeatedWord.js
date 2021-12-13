function repetedWord(string) {
  let result = [];
  let array = string.toLowerCase().split(" ");
  for (let i = 0; i < array.length; i++) {
    let removed = array[i];
    let first = array.shift();
    if (array.includes(first)) {
      result.push(removed);
    }
  }
  return result;
}
let string =
  "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
console.log(repetedWord(string));
