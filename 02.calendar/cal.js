const defaultDate = new Date();
const defaultArray = defaultDate.toISOString().split("T")[0].split("-");

const monthIndex =
  process.argv.indexOf("-m") !== -1
    ? +process.argv[process.argv.indexOf("-m") + 1]
    : +defaultArray[1];

const yearIndex =
  process.argv.indexOf("-y") !== -1
    ? +process.argv[process.argv.indexOf("-y") + 1]
    : +defaultArray[0];

let firstDay = new Date(yearIndex, monthIndex - 1, 1);
let lastDay = new Date(yearIndex, monthIndex, 0);

let firstDayValue = firstDay.toDateString().split(" ");
const date = lastDay.toDateString().split(" ");

const arr = [];
for (let i = 1; i <= +date[2]; i++) {
  arr.push(i);
}

const day = ["日 ", "月 ", "火 ", "水 ", "木 ", "金 ", "土"];
const countDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

day.forEach((el) => {
  process.stdout.write(String(el));
});

console.log(" ");
const firstDayNum = firstDayValue[0];
let firstDayIndex = countDay.indexOf(firstDayNum);

console.log(" ");

for (let i = 0; i <= firstDayIndex; i++) {
  if (i !== 0) {
    process.stdout.write("   ");
  }
}
arr.forEach((el) => {
  if (firstDayIndex === 7) {
    console.log(" ");
    firstDayIndex = 0;
  }
  if (String(el).length === 1) {
    process.stdout.write(" " + String(el) + " ");
  } else {
    process.stdout.write(String(el) + " ");
  }
  firstDayIndex++;
});
console.log(" ");
