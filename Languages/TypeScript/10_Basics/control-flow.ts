// ==============================
// 分岐処理(if, switch)
// ==============================
// 条件分岐(if-else)
const score = 85;
if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 70) {
  console.log("Good!");
} else {
  console.log("Try harder!");
}

// if文の短縮形
const passed = score >= 60;

// 短縮形のif文
if (passed) console.log("You passed!");

// 条件分岐(switch)
let command = "start";
switch (command) {
  case "start":
    console.log("Starting...");
    break;
  case "stop":
    console.log("Stopping...");
    break;
  default:
    console.log("Unknown command");
}

// 三項演算子
// 条件式 ? 真の場合の値 : 偽の場合の値;
const isEven = score % 2 === 0 ? "Even" : "Odd";

// ==============================
// 反復処理(for)
// ==============================
// for
for (let i = 0; i < 5; i++) {
  console.log(`i = ${i}`); // i = 0, i = 1, i = 2, i = 3, i = 4
}

// for-of（配列ループ）
const items = ["apple", "banana", "orange"];
for (const item of items) {
  console.log(item); // apple, banana, orange
}

// forEach
items.forEach((item) => console.log(item)); // apple, banana, orange

// ==============================
// よく使用される条件式
// ==============================
// 配列のサイズ分ループ 1
for (let i = 0; i < items.length; i++) {
  console.log(items[i]); // apple, banana, orange
}

// 配列のサイズ分ループ 2
for (let i = 0; i + 1 <= items.length; i++) {
  console.log(items[i]); // apple, banana, orange
}

// 逆順ループ
for (let i = items.length - 1; i >= 0; i--) {
  console.log(items[i]); // orange, banana, apple
}

// n個おきにループ
const step = 2;
for (let i = 0; i + step < items.length; i += step) {
  console.log(items[i]); // apple, orange
}

// 早期終了
let limit = 2;
for (let i = 0; i < items.length || i < limit; i++) {
  console.log(items[i]); // apple, banana
}

// ==============================
// 反復処理を使ったアルゴリズム
// ==============================
// 配列の合計値を求める
// const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (const num of numbers) {
  sum += num;
}
console.log(`Sum: ${sum}`); // Sum: 150

// 配列の最大値を求める
let max = numbers[0];
for (const num of numbers) {
  if (num > max) {
    max = num;
  }
}
console.log(`Max: ${max}`); // Max: 50

// 配列の最小値を求める
let min = numbers[0];
for (const num of numbers) {
  if (num < min) {
    min = num;
  }
}
console.log(`Min: ${min}`); // Min: 10

// 約数を求める
const number = 36;
for (let i = 1; i * i <= number; i++) {
  if (number % i === 0) {
    console.log(i); // 1, 2, 3, 4, 6, 9, 12, 18, 36
  }
}

// 素数判定
const checkPrime = (n: number): boolean => {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
console.log(`Is 29 prime? ${checkPrime(29)}`); // Is 29 prime? true
console.log(`Is 30 prime? ${checkPrime(30)}`); // Is 30 prime? false

// フィボナッチ数列
const fibonacci = (n: number): number[] => {
  const fib: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};
console.log(`Fibonacci sequence (10 terms): ${fibonacci(10)}`); // Fibonacci sequence (10 terms): 0,1,1,2,3,5,8,13,21,34

// 回文判定
const isPalindrome = (str: string): boolean => {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(`Is "racecar" a palindrome? ${isPalindrome("racecar")}`); // Is "racecar" a palindrome? true
console.log(`Is "hello" a palindrome? ${isPalindrome("hello")}`); // Is "hello" a palindrome? false

// 素因数分解
const primeFactorization = (n: number): number[] => {
  const factors: number[] = [];
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
};
console.log(`Prime factorization of 60: ${primeFactorization(60)}`); // Prime factorization of 60: 2,2,3,5
console.log(`Prime factorization of 97: ${primeFactorization(97)}`); // Prime factorization of 97: 97

export {};
