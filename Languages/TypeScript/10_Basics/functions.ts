// ==============================
// 関数の定義
// ==============================
// 基本的な関数定義
function add(a: number, b: number): number {
  return a + b;
}

// void：戻り値なし
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}

// アロー関数
const multiply = (x: number, y: number): number => x * y;

// optional parameter（?）: 引数省略可
function printMessage(msg?: string): void {
  console.log(msg ?? "No message");
}

// default parameter：デフォルト値
function say(message: string = "Hi"): void {
  console.log(message);
}

// rest parameter：可変長引数
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// 関数の呼び出し
console.log(add(2, 3)); // 5
greet("Alice"); // Hello, Alice
console.log(multiply(4, 5)); // 20
printMessage(); // No message
say(); // Hi
console.log(sumAll(1, 2, 3, 4)); // 10

export {};
