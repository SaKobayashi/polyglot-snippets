// ==============================
// 関数の定義
// ==============================
// 基本的な関数定義
function add(a, b) {
  return a + b;
}

// void：戻り値なし
function greet(name) {
  console.log(`Hello, ${name}`);
}

// アロー関数
const multiply = (x, y) => x * y;

// default parameter：デフォルト値
function say(message = "Hi") {
  console.log(message);
}

// rest parameter：可変長引数
function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// 関数の呼び出し
console.log(add(2, 3)); // 5
greet("Alice"); // Hello, Alice
console.log(multiply(4, 5)); // 20
say(); // Hi
console.log(sumAll(1, 2, 3, 4)); // 10
