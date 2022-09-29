// const number = [1, 2, 3, 4];
// console.log(number);

//const numbers = new Array();//constructor object
//const numbers = new Array(1,2,3,'Hi');//normal array as like []
//const numbers = new Array(10);//a fixed size [10] array

//remove the (new) keyword as same behaviour

//const numbers = Array();//constructor object
//const numbers = Array(1,2,3,'Hi');//normal array as like []
//const numbers = Array(10);//a fixed size [10] array

//const numbers = Array.of(10,'Hi',10);// slow as like arr = [];

//const numbers = Array.from(1,2);//type error bcoz you can't pass multiple normal values
// const numbers = Array.from('Hi!'); //convert to ['H', 'i', '!']
// console.log(numbers);

// const dataSet = [
//   [1, 2, 3],
//   [1.2, 2.3, 'float'],
// ];

// for (const data of dataSet) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(arr);
// arr.push(5,6);
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();

// console.log(arr);//[1,2,3,4,5]

// const hobbies = ['Reading', 'Cocking'];
// hobbies.splice(0,0,'Sport','Coding');
// arr.splice(2,0,0);


const arr = [1,2,3,4,5];
const arr2 = arr.slice(-3,-1);
//arr.push(6,7);

console.log(arr,arr2);
