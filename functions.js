// let coffeeIsGrinding = false;
// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     }else{
//         console.log("Grinding is about to begin");
//       coffeeIsGrinding = true;
//     }
// }
// pressGrindBeans();

// Paramiters
// let accnumber = 50449921;
// const cashWithdrawal = (amount, accnum) => {
//     console.log(`withdrawing ${amount} from ${accnum}`);
// }
// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, 40603942);
// cashWithdrawal(200, accnumber);

// const coffee = (type, size,) => {
//     console.log(`here is your ${size} ${type} `)
// }
// coffee("latte", "small")

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }
// addUp(7,3);
// console.log(addUp(2,5));
// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };
// const getFahrenheit = (celcius) => {
//     return multiplyByNineFifths(celcius) + 32;
// };
// console.log("the temperature is " + getFahrenheit(15) + "F");

let counter = 0;
function add(){
  let counter = 0;
 function plus() {counter +=1;}
  counter += 1;
  plus();
  return counter;
}
const takeOrder = (topping) => {
    console.log(`pizza with ${topping}`);
}

takeOrder("ham");
