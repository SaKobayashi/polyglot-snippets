// ==============================
// 配列操作
// ==============================
const numbers: number[] = [1, 2, 3, 4, 5];
const words: string[] = ["apple", "banana", "cherry"];
console.log(numbers);
// [1, 2, 3, 4, 5]

// push(末尾に追加)
numbers.push(6); // [1, 2, 3, 4, 5, 6]

// unshift(先頭に追加)
numbers.unshift(0); // [0, 1, 2, 3, 4, 5]

// pop(末尾を削除)
let last = numbers.pop(); // [1, 2, 3, 4]
console.log(numbers); // [1, 2, 3, 4]
console.log(last); // 5

// shift(先頭を削除)
let first = numbers.shift(); // [2, 3, 4, 5]
console.log(numbers); // [1, 2, 3, 4]
console.log(first); // 1

// slice(コピーして切り取り)
let slicedNumbers = numbers.slice(1, 3);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(slicedNumbers); // [2, 3]

// sort(ソート)
// 文字列 昇順ソート
let fruits = ["apple", "banana", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]

// 数値 昇順ソート
let sortNumbersAsc = [2, 4, 3, 5, 1];
sortNumbersAsc.sort((a, b) => a - b);
console.log(sortNumbersAsc); // [1, 2, 3, 4, 5]

// 数値 降順ソート
let sortNumbersDesc = [2, 4, 3, 5, 1];
sortNumbersDesc.sort((a, b) => b - a);
console.log(sortNumbersDesc); // [5, 4, 3, 2, 1]

// forEach(ループ)
fruits.forEach((fruit, index, array) => console.log(fruit, index));
// apple 0
// banana 1
// cherry 2

// ==============================
// 配列要素の検索
// ==============================
// map(編集して新しい配列を作る)
let doubledNumbers = numbers.map((number) => number * 2);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// find(検索：条件に一致する最初の要素)
numbers.find((number) => number < 10); // 1

// filter(検索：条件に一致する全ての要素)
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 存在チェック(返り値:boolean)
numbers.includes(3); // true

// 存在チェック(返り値:一致する最初のインデックス)
numbers.indexOf(4); // 3

// ==============================
// 要素の操作
// ==============================
// map（配列を変換）
const doubled = numbers.map((n) => n * 2); // [2, 4, 6, 8, 10]

// filter（条件に合うものだけ残す）
const evens = numbers.filter((n) => n % 2 === 0); // [2, 4]

// reduce（集計する）
const total = numbers.reduce((sum, n) => sum + n, 0); // 15

// forEach（要素数分ループ）
numbers.forEach((n) => console.log(n)); // 1 2 3 4 5

// ==============================
// ソート
// ==============================
// 数値ソート
numbers.sort((a, b) => a - b); // 昇順
numbers.sort((a, b) => b - a); // 降順

// ==============================
// 配列のコピーと結合
// ==============================
// コピー
const copiedNumbers = [...numbers];

// 結合
const merged = [...numbers, ...copiedNumbers];

// 部分取り出し
const sliced = numbers.slice(1, 3); // index1〜2 を取得

// ==============================
// 配列のコピーと結合
// ==============================
const splited = "ABCDE".split(""); // ["A", "B", "C", "D", "E" ]
const joined = sliced.join("-"); // "A-B-C-D-E"

export {};
