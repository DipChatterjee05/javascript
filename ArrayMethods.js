// const array = [1, 2, 3, 4, 5];

// 1. at() Returns the item located at the specified index.
// array.at(1); // Output: 2

// 2. pop() Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// array.pop(); // Output: [1, 2, 3, 4];

// 3. push() Appends new elements to the end of an array, and returns the new length of the array.
// array.push(6); // Output: [1, 2, 3, 4, 5, 6];

// 4. fill() Changes all array elements from start to end index to a static value and returns the modified array.
// array.fill(1); // Output: [1, 1, 1, 1, 1];

// 5. join() Adds all the elements of an array into a string, separated by the specified separator string.
// array.join("-"); // Output: "1-2-3-4-5"

// 6. shift() Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// array.shift(); // Output: [3, 4, 5];

// 7. reverse() Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
// array.reverse(); // Output: [5, 4, 3, 2, 1];

// 8. unshift() Inserts new elements at the start of an array, and returns the new length of the array.
// array.unshift(1); // Output: [1, 1, 2, 3, 4, 5];

// 9. includes() Determines whether an array includes a certain element, returning true or false as appropriate.
// array.includes(2); // Output: true

// 10. map() Calls a defined callback function on each element of an array, and returns an array that contains the results.
// array.map(num => num * 2); // Output: [2, 4, 6, 8, 10];

// 11. some() Determines whether the specified callback function returns true for any element of an array.
// array.some(num => num > 3); // Output: true

// 12. find() Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// array.find(num => num > 2); // Output: 3

// 13. every() Determines whether all the members of an array satisfy the specified test.
// array.every(num => num > 3); // Output: false

// 14. filter() Returns the elements of an array that meet the condition specified in a callback function.
// array.filter(num => num > 2); // Output: [3, 4, 5];

// 15. findIndex() Returns the index of the first element in the array where predicate is true, and -1 otherwise.
// array.findIndex(num => num > 2); // Output: 2

// 16. reduce() Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
// array.reduce((acc, num) => acc + num); // Output: 15

// console.log();
// console.log(array);



// <---------- JavaScript Array Methods ---------->
// 1. .concat()
// 2. .filter()
// 3. .pop()
// 4. .slice()
// 5. .unshift()
// 6. .shift()
// 7. .sort()
// 8. .find()
// 9. .push()
// 10. .reverse()
// 11. .map()
// 12. .splice()
// 13. .join()
// 14. .toString()


// let array = [1, 2, 3];

// 1. length Gets or sets the length of the array. This is a number one higher than the highest index in the array.
// let x = array.length;
// console.log(x); // Output: 3

// 2. push() Appends new elements to the end of an array, and returns the new length of the array.
// array.push(4);
// console.log(array); // Output: [1, 2, 3, 4];

// 3. unshift() Inserts new elements at the start of an array, and returns the new length of the array.
// array.unshift(0);
// console.log(array); // Output: [0, 1, 2, 3];

// 4. pop() Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// array.pop();
// console.log(array); // Output: [1, 2];

// 5. shift() Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// array.shift();
// console.log(array); // Output: [2, 3];

// 6. at() Returns the item located at the specified index.
// let x = array.at(2);
// console.log(x); // Output: 3

// 7. indexOf() Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// let x = array.indexOf(3);
// console.log(x); // Output: 2

// 8. includes() Determines whether an array includes a certain element, returning true or false as appropriate.
// let x = array.includes(3);
// console.log(x); // Output: true

// 9. map() Calls a defined callback function on each element of an array, and returns an array that contains the results.
// let x = array.map((num) => Math.pow(num, 2));
// console.log(x); // Output: [1, 4, 9];

// 10. filter() Returns the elements of an array that meet the condition specified in a callback function.
// let x = array.filter((num) => num % 2);
// console.log(x); // Output: [1, 3];

// 11. every() Determines whether all the members of an array satisfy the specified test.
// array.every((num) => num > 1); // Output: false

// 12. some() Determines whether the specified callback function returns true for any element of an array.
// array.some((num) => num == 3); // Output: true

// 13. fill() Changes all array elements from start to end index to a static value and returns the modified array.
// array.fill(10);
// console.log(array); // Output: [10, 10, 10];

// 14. reduce() Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
// let x = array.reduce((acc, num) => acc + num, 0);
// console.log(x); // Output: 6

// 15. concat() Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// let x = array.concat([4, 5]);
// console.log(x); // Output: [1, 2, 3, 4, 5];

// 16. reverse() Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
// array.reverse();
// console.log(array); // Output: [3, 2, 1];

// 17. sort() Sorts an array in place. This method mutates the array and returns a reference to the same array.
// array.sort();
// console.log(array); // Output: [1, 2, 3];

// 18. join() Adds all the elements of an array into a string, separated by the specified separator string.
// let x = array.join("-");
// console.log(x); // Output: "1-2-3"

// 19. Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// let x = [1, 2, [3], [4]].flat();
// console.log(x); // OutPut: [1, 2, 3, 4];

// 20. find() Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// let x = array.find((num, i) => i === 1);
// console.log(x); // Output: 2

// 21. findIndex() Returns the index of the first element in the array where predicate is true, and -1 otherwise.
// let x = array.findIndex((num) => num === 2);
// console.log(x); // Output: 1

// 22. toString() Returns a string representation of an array.
// let x = array.toString();
// console.log(x); // Output: "1,2,3"

// 23. slice() Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.
// let x = array.slice(1);
// console.log(x); // Output: [2, 3];

// 24. splice() Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// let x = [1, 4];
// x.splice(1, 0, 2, 3);
// console.log(x); // Output: [1, 2, 3, 4];

// 25. Array.isArray()
// let x = Array.isArray("[1,2,3]");
// console.log(x); // Output: false

// 26. Array.from()
// let x = Array.from("123");
// console.log(x); // Output: ["1", "2", "3"];
