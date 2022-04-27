const arr = [];
for (let i = 1; i <= 20; i++) {
  arr.push(i);
}

arr.forEach((el) => {
  if (el % 3 == 0 && el % 5 == 0) {
    console.log("FizzBuzz");
  } else if (el % 3 == 0) {
    console.log("Fizz");
  } else if (el % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(el);
  }
});
