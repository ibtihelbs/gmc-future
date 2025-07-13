let x = 15;
x = 20;
let y = "hi buy 55244";
console.log(y);

const toys = [
  "balls",
  "fig",
  "balls",
  "balls",
  "balls",
  "balls",
  "balls",
  "figs",
  "balls",
];
const ammar = [
  {
    content: "balls",
    number: 3,
  },
  {
    content: "figs",
    number: 5,
  },
  {
    content: "balls",
    number: 1,
  },
  {
    content: "balls",
    number: 4,
  },
  {
    content: "balls",
    number: 2,
  },
  {
    content: "balls",
    number: 3,
  },
  {
    content: "balls",
    number: 15,
  },
  {
    content: "figs",
    number: 20,
  },
  {
    content: "balls",
    number: 10,
  },
];
/*
console.log(ammar[0].content + 0 + " is not bigger than 5");
console.log(ammar[1].content + 1 + " is not bigger than 5");
console.log(ammar[2].content + 2 + " is  bigger than 5");
console.log(ammar[3].content + 3 + " is not bigger than 5");
console.log(ammar[4].content + 4 + " is not bigger than 5");
console.log(ammar[5].content + 5 + " is not bigger than 5");
console.log(ammar[6].content + 6 + " is  bigger than 5");
console.log(ammar[7].content + 7 + " is  bigger than 5");
console.log(ammar[8].content + 8 + " is  bigger than 5");*/
function isBiggerThan5(x) {
  if (x.number > 5) {
    console.log(x.content + " " + "is bigger that 5");
    console.log(x.number - 5);
  } else {
    console.log(x.content + " " + "is lesser that 5");
    console.log(x.number - 5);
  }
}
for (let i = 0; i < 9; i++) {
  isBiggerThan5(ammar[i]);
}

function add(f, y) {
  return f - y;
}

const sum = add(14, 8);

console.log(sum);
const hamza = add(15, 20);

console.log(hamza);


const str =
  "At this checkpoint, you are asked to write an algorithm that reads a sentence, which ends with a point, character by character, and to determine:";

function vowlsCount(y) {
  let counter = 0;
  const vowls = "aeuioy";
  const arr = str.split("");
  arr.forEach(function (v, i) {
    if (vowls.includes(v)) {
      counter = counter + 1;
    }
  });
  return counter;
}
console.log(vowlsCount(str));
