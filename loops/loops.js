// for(i = 0; i<10; i++){
//     console.log("hello")
//     console.log(i)
// }

// for(i = 99; i>0; i--){
//     console.log(i + " bottles of beer on the wall")
//     console.log(i + " bottles of beer on the wall")
//     console.log("take one down pass it around")
//     console.log(i-1 + "bottles of beer on the wall")
//     console.log("\n\n")
// }

// for(i = 1; i>10; i = i +3){
//     console.log(i)
// }

// for(i=1; i<=10; i++){
//     for(x = 0; x <=10; x++){
//     console.log(i + " Times " + x + " Is " + (i*x))
//     }

//     }

// diceRoll = 0;
// while (diceRoll != 6) {
//   console.log("Rolling Dice");
//   diceRoll = Math.ceil(Math.random() * 6);
//   console.log("You have rolled a " + diceRoll);
// }

// function timesTable(i){

// }

// function convertLetterToNumber(str) {
//   let out = 0,
//     len = str.length;
//   for (pos = 0; pos < len; pos++) {
//     out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
//   }
//   return out;
// }
// var str = "hello";
// var strArray = str.split("");

// abba = "abba";
// function letterValue(str) {
//   var anum = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6,
//     g: 7,
//     h: 8,
//     i: 9,
//     j: 10,
//     k: 11,
//     l: 12,
//     m: 13,
//     n: 14,
//     o: 15,
//     p: 16,
//     q: 17,
//     r: 18,
//     s: 19,
//     t: 20,
//     u: 21,
//     v: 22,
//     w: 23,
//     x: 24,
//     y: 25,
//     z: 26
//   };
//   if (str.length == 1) return anum[str] || " ";
//   return str.split("").map(letterValue);
// }
// console.log(letterValue(abba));
