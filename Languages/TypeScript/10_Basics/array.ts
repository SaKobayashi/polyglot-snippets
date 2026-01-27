// ==============================
// 配列の基本
// ==============================
// 基本
let strings: string[] = [];
let numbers: number[] = [1, 2, 3, 4, 5];
let words: string[] = ["hello", "world"];
let nSizeArray: number[] = Array(n); // 長さnの空配列

// タプル
let mixed: (number | string)[] = [1, "a"];
let user: [number, string] = [1, "Alice"];
let rgb: [number, number, number, ...string[]] = [255, 0, 0, "red", "primary"];

// readonly
const readonlyNumbers: readonly number[] = [10, 20, 30];

// Arrayを使った宣言
let numberArray: Array<number> = [1, 2, 3, 4, 5];
let wordArray: Array<string> = ["hello", "world"];
let mixedArray: Array<string | number> = [1, "a"];

// ★Array.fromを使った配列生成（推奨）
let fromArray: number[] = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]
let fromCharArray: string[] = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
let fromSetArray: number[] = Array.from(new Set([1, 2, 2, 3])); // [1, 2, 3]
let fromMapArray: number[] = Array.from(
  new Map([
    [1, "a"],
    [2, "b"],
  ]).keys()
); // [1, 2]

// Array.ofを使った配列生成
let ofArray: number[] = Array.of(5); // [5]
// let ofArray: number[] = Array(5); // 長さ5の空配列になってしまうため、引数が1つのときはof()を使用する

// アクセス方法
console.log(numbers[0]); // 1
console.log(words[1]); // 'world'

// アクセス方法(atメソッド)※推奨
console.log(numbers.at(0)); // '1' (最初の要素)
console.log(numbers.at(1)); // '2' (2番目の要素)
console.log(numbers.at(-1)); // '5' (最後の要素)
console.log(numbers.at(-2)); // '4' (後ろから2番目)

// 更新
numbers[1] = 200;

// 多次元配列（型指定）
let twoDimensionalNumbers: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

type User = {
  id: number;
  name: string;
  email?: string; // オプショナル
};

export {};
