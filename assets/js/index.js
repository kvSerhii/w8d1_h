'use strict'

// Оценка сложности

// O(n+1)
// при оценка сложности по времени O(n)
// function sum(arr) {
//     const sum = arr[0] + arr[1]; // пренебрегаем
//     return arr.reduce((a, b) => a + b + sum);
// }


// //O(n*n) -> O(n^2)
// function test(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             console.log(arr[i] * j);
//         }
//     }
// }

//

// MyArra & Symbol.iterator
// class MyArray {
//     length = 0;
//     data = {};
//     constructor(...args) {
//         this.length = args.length;
//         for (const key in args) {
//             this.data[key] = args[key];
//         }
//         /* for (const key of args) {
//             this.data[key] = args[key];
//         } */
//         /*  for (let i = 0; i < arguments.length; i++) {
//              this[this.length] = arguments[i];
//              this.length++;
//          } */
//     }

//     static isArray(arr) {
//         return arr instanceof MyArray;;
//     }

//     isEmpty() {
//         return this.length === 0;
//     }

//     push(...item) {
//         for (const key in item) {
//             this.data[this.length++] = item[key];
//         }
//         // return this.length;
//     }

//     pop() {
//         const element = this.data[this.length - 1];
//         delete this.data[this.length - 1];
//         this.length--;
//         return element;
//     }

//     forEach(callback) {
//         for (let i = 0; i < this.length; i++) {
//             callback(this.data[i], i, this.data);
//         }
//     }

//     concat(arr) {
//             let res = new MyArray();

//             for (let i = 0; i < this.length; i++) {
//                 res.push(this.data[i]);
//             }
//             for (let i = 0; i < arr.length; i++) {
//                 res.push(arr.data[i]);
//             }
//             return res.getMyArray();
//         }
//         /*     concat(...args) {
//                 let res = new MyArray();
//                 let initialArr = this.data;
//                 for (let i = 0; i < initialArr.length; i++) {
//                     res.push(initialArr[i]);
//                 }
//                 for (let j = 0; j < args.length; j++) {
//                     if (MyArray.isArray(args[j])) {
//                         let arr = args[j];
//                         for (let k = 0; k < arr.length; k++) {
//                             res.push(arr[k]);
//                         }
//                     } else {
//                         res.push(args[j]);
//                     }
//                 }
//                 return res;
//             } */

//     /* concat(...arr) {
//         let res = new MyArray();
//         for (let i = 0; i < this.length; i++) {
//             res.push(this.data[i]);
//         }
//         for (let i = 0; i < arr.length; i++) {
//             res.push(arr[i]);
//         }
//         return res.getMyArray();
//     } */

//     /*     concat(arr, ...values) {
//             const res = [...arr];
//             const {
//                 length
//             } = values;
//             for (let i = 0; i < length; i++) {
//                 const value = values[i];
//                 if (MyArray.isArray(value)) {
//                     this.push(res, ...value);
//                 } else {
//                     this.push(res, value);
//                 }
//             }
//             return res.getMyArray();
//         } */

//     flat(depth = 1) {
//         if (depth < 0) {
//             console.error("depth must be a positive value");
//             return;
//         }
//         let flatArr = new MyArray();
//         if (depth === 0) {
//             flatArr = flatArr.concat(this.data);
//             return flatArr;
//         }
//         for (let i = 0; i < this.length; i++) {
//             if (Array.isArray(this.data[i])) {
//                 // Always array}
//                 const buffer = this.data[i].flat(depth - 1);
//                 flatArr = flatArr.concat(buffer);
//             } else if (this.data[i] !== undefined) {
//                 // Always rest
//                 flatArr.push(this.data[i]);
//             }
//         }
//         return flatArr;
//     }

//     shift() {
//         const {
//             length
//         } = this.data;
//         const firstVal = this.data[0];

//         for (let i = 0; i < length; i++) {
//             const val = this.data[i];
//             this.data[i - 1] = val;
//         }
//         this.data.length = length - 1;
//         return firstVal;
//     }

//     unshift(arr, ...vals) {
//         const resArr = this.data.concat(vals, ...arr);
//         const {
//             length: resArrLen
//         } = resArr;

//         for (let i = 0; i < resArrLen; i++) {
//             const val = resArr[i];
//             arr[i] = val;
//         }
//         return arr.length;
//     }

//     [Symbol.iterator]() {
//         return new MyArrayIterator(this);

//         /* return {
//             iterable: this,
//             iteration: 0,

//             next() {

//                 if (this.iteration > this.iterable.length) {
//                     return {
//                         done: true
//                     }
//                 }
//                 return {
//                     value: this.iterable[this.iteration],
//                     done: false
//                 }
//             }
//         } */

//     }

//     size() {
//         return this.length;
//     }

//     // ???
//     getMyArray() {
//         return this.data;
//     }
// }


// class MyArrayIterator {
//     /* JSDocs
//     @param[MyArray] myArray
//      */
//     constructor(myArray) {
//         this.iterable = myArray;
//         this.iteration = 0;
//     }
//     next() {
//         return {
//             value: this.iterable[this.iteration++],
//             done: this.iteration > this.iterable.length,
//         };
//     }
// }


// // my Arr test
// const myArrTest = new MyArray(1, 2, 3, 4, 5, 6, 7, 8);
// const myArrTest1 = [11, 22];
// const myArrTest2 = new MyArray(333, 444, 555);

// console.log(myArrTest);
// console.log(myArrTest.size(), "size()");
// console.log(myArrTest.getMyArray(), "getMyArray()");
// console.log(myArrTest.isEmpty(), "isEmpty()");
// console.log(myArrTest.push(33), "push()");
// console.log(myArrTest.push(44, 55, 66, 77), "push()");
// console.log(myArrTest.getMyArray(), "getMyArray() after push");
// console.log(myArrTest.pop(), "pop()");
// console.log("forEach() ->");
// myArrTest.forEach(element => console.log(element * 2));
// console.log(MyArray.isArray(myArrTest), "isArray()");
// console.log(myArrTest.concat(myArrTest2, myArrTest1), "concat()");


//#region LinkedList
// Linked List
// class ListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.length = 0;
//     }
//     addNode(value) {
//         const node = new ListNode(value);
//         if (this.length === 0) {
//             this.head = node; //  скопировали ссылку на объект
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = node;
//         }
//         this.length++;
//     }

//     getNodeByIndex(index) {
//         if (this.length === 0 || index < 0 || index > this.length) {
//             throw new RangeError('Not in list');
//         }
//         let current = this.head;
//         let count = 0;

//         while (count < index) {
//             current = current.next;
//             count++;
//         }
//         return current;
//     }

//     [Symbol.iterator]() {
//         return new LinkedListIterator(this);
//     }
// }
// class LinkedListIterator {
//     /* JSDocs
//     @param[LinkedList] list
//      */
//     constructor(list) {
//         this.iterable = list.head;
//     }
//     next() {
//         if (this.iterable) {
//             const value = this.iterable.value;
//             this.iterable = this.iterable.next; //i++
//             return {
//                 value,
//                 done: false,
//             };
//         }
//         return {
//             done: true
//         };
//     }
// }

// const listIterator = new LinkedListIterator();
// const list = new LinkedList();

// list.addNode('test1');
// list.addNode('test2');
// list.addNode('test3');

// console.log(list);
// list.getNodeByIndex(0);

// const arrr = [...list];
// console.log(arrr);
//#endregion LinkedList


//#region Stack
class Stack {
    constructor(maxSize = 1000) {
        if (typeof maxSize !== 'number') {
            throw new TypeError('Size must be a number');
        }
        if (maxSize < 1) {
            throw new RangeError("must be a positiv number");
        }
        this._maxSize = maxSize;
        this._size = 0;
    }

    get maxSize() {
        return this._maxSize;
    }

    get isEmpty() {
        return this._size === 0;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    push(value) {
        if (this.size >= this.maxSize) {
            throw new RangeError("Stack overflow");
        }
        this[this.size++] = value;
        return this.size;
    }

    pop() {
        if (this.isEmpty) {
            return "Underflow";
        }
        const deletedElement = this[--this.size];
        delete this[this.size];
        return deletedElement;
    }

    peek() {
        if (this.isEmpty) {
            return;
        }
        return this[this.size - 1];
    }
}

let stack = new Stack();
//#endregion Stack

function reverse(string) {
    const stack = new Stack(string.length);

    for (const letter of string) {
        stack.push(letter);
    }
    const res = [];
    while (!stack.isEmpty) {
        res.push(stack.pop());
    }
    return res.join('');;
}

let str = '1234';
// let res = reverse(str);
// console.log(res);
console.log(reverse(str));



function perCheck(string) {
    const stack = new Stack(string.length);
    if (string.length === 0 || string[0] === ')' ||
        string.length % 2 !== 0) {
        return false;
    }
    for (const letter of string) {

        if (letter === '(') {
            stack.push(letter);
        } else {
            stack.pop();
        }
    }
    if (stack.isEmpty) {
        return true;
    }
    return false;
}

console.log(perCheck('()()()'));