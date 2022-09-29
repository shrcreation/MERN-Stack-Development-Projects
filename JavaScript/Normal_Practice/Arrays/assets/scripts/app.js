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

// const arr = [1,2,3,4,5];
// //const arr2 = arr.slice(-3,-1);
// //arr.push(6,7);
// const arrConcat = arr.concat([6,7,8]);

// console.log(arr,arrConcat);

// arrConcat.splice(-3,3);
// console.log(arr,arrConcat);

// const newArr = arrConcat.concat([6,7,8]);
// console.log(arr,newArr);

// const copyArr = newArr.slice(0);

// newArr.push(9,10,11);

// console.log(newArr,copyArr);

// const prices = [1.2, 10, 4.0, 44, 11];
// const tax = 0.27;
// const taxAdjustPrice = [];

// // for(const price of prices){
// // taxAdjustPrice.push(price * (1 + tax));
// // }

// prices.forEach((price, index, prices) => {
//   const rslt = {
//     price: price,
//     index: index,
//     taxAdjustPrice: price * (1 + tax),
//     prices:prices
//   };
//   taxAdjustPrice.push(rslt);
// });

// console.log(taxAdjustPrice);

// const prices = [1.99, 10.99, 4.99, 6.99, 5.99];
// const tax = 0.27;

// const taxAdjustPrice = prices.map((price, index, prices) => {
//   const rslt = {
//     price: price,
//     index: index,
//     taxAdjustPrice: price * (1 + tax),
//     prices: prices,
//   };
//   //const rslt = [price, index, price * (1 + tax)];//array
//   //const rslt = price * (1 + tax) + ' ' + index + ' ' + prices;
//   return rslt; //return a brand new array with changing the elements
// });

// console.log(prices, taxAdjustPrice);

// const sortedValue = prices.sort((a, b) => {
//   return a - b; //sort ascending order
// });

// console.log(sortedValue);

// const filteredArray = prices.filter(filterItems);

// function filterItems(price, index, prices) {
//     console.log(`index: ${index} and prices: ${prices}`);
//     return price > 6;
// }

// console.log(filteredArray);

//const dummyArray = ['2', 2, '3', 3, '1', 1, '5', 5, '4', 4];
//const dummyArray = [1.99, 10.99, 4.99, 6.99, 5.99];
//const dummyArray = [10,20,50,100,500,30];
// const sortValues = dummyArray.sort((a, b) => a - b);

// console.log(sortValues);

// const filteredValues = dummyArray.filter(num => num > 6);
// console.log(filteredValues);

// let sum = 0;
// dummyArray.forEach((num) =>{
//     sum += num;
// })
// console.log(sum);
// const result = dummyArray.reduce(
//   (preValue, currValue) => preValue + currValue,
//   0//initialy set the previous value 0 or anything either it says undefined.
// );

// console.log(result);

// const data =
//   'Name: Shahadot Hossain; Age: 29; 06021994; Number: 01860984790; Hobbies: Programming,Coding';

// const transformData = data.split(';');
// transformData[2] = +transformData[2]; //converting into number;
// console.log(transformData);

// const reverseValue = transformData.join('\n');
// console.log(reverseValue);

//array
// const number1 = [1,2,3,4,5];//change
// const number2 = [...number1,6,7,8,9];// change
// const number3 = [...number2];//not change bcoz we copy the address of the items
// const number4 = number1.concat(...number1, ...number2, ...number3);
// number2.push(10,11,12);
// console.log(number1,number2,number3,number4);

//object
// const testObj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const testObj2 = { d: 4 };

// const testObj3 = { ...testObj1, ...testObj2 };

// console.log(testObj1,testObj2,testObj3);

//array destructing
//const userData = ['Shahadot', 'Hossain'];
// const userData = ['Shahadot', 'Hossain','Rahat', 29];

// //const [firstName, lastName] = userData;
// const [firstName, lastName, ...otherInfo] = userData;

// console.log(firstName,lastName,otherInfo);
