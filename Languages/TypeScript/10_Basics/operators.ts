// ==============================
// 算術演算子
// ==============================
let a: number = 10 + 3; // 13
let b: number = 10 - 3; // 7
let c: number = 10 * 3; // 30
let d: number = 10 / 3; // 3.333...
let e: number = 10 % 3; // 1
let f: number = 10 ** 3; // 1000

// ==============================
// 比較演算子
// ==============================
let x: number = 5;
let y: number = 10;
x == y; // false
x != y; // true
x === y; // false
x !== y; // true
x < y; // true
x > y; // false
x <= 5; // true
x >= 10; // true

// ==============================
// 論理演算子
// ==============================
const p: boolean = true;
const q: boolean = false;
// AND
p && q; // false
// OR
p || q; // true
// NOT
!p; // false
!q; // true

// ==============================
// 代入演算子
// ==============================
let n: number = 20;
// 代入
n = 10;
// 加算代入
n += 5;
// 減算代入
n -= 2;
// 乗算代入
n *= 3;
// 除算代入
n /= 4;
// 剰余代入
n %= 2;

export {};
