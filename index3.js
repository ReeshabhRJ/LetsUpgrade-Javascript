
let arr = ["hello", "how", "are", "you", "sir"];
let element = "you";
arr.forEach((ele, i) => {
  if (ele === element) {
    console.log(`${ele} is present at index ${i}`);
  }
});
