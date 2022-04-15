import { genericFunction, genericFunctionArrow, printObject } from './generics/generics';

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2 });
// printObject([1, 2, 3]);
// printObject('Hello World');

console.log(genericFunction(3.1416).toFixed(2));
console.log(genericFunction('Hello World').toLocaleUpperCase());
console.log(genericFunction(new Date()).toLocaleDateString());

console.log('\n');
console.log(genericFunctionArrow(3.1416).toFixed(2));
console.log(genericFunctionArrow('Hello World').toLocaleUpperCase());
console.log(genericFunctionArrow(new Date()).toLocaleDateString());
