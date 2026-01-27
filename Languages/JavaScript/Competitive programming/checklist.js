// ==============================
// 入力処理チェック
// ==============================
// 入力データはパースすること
const N = Number(lines[0]);
const [a, b] = line.split(" ").map(Number);

const inputLine = "10 20 30";
const numbers = inputLine.split(" ").map(Number); // [10, 20, 30]

// ==============================
// 入力処理チェック
// ==============================
// ❌️
Array(h).fill(Array(w).fill(0));
// ✅
Array.from({ length: h }, () => Array(w).fill(0));

// ==============================
// index のズレチェック
// ==============================
// 入力：1-index
// 配列：0-index
const r = inputR - 1;
const c = inputC - 1;

// ==============================
// 配列の範囲外アクセスチェック
// ==============================
if (0 <= y && y < H && 0 <= x && x < W) {
  // OK
}

// ==============================
// sort チェック
// ==============================
// 文字列比較に < を使っていないか
// ❌️
a.name < b.name
// ✅
a.name.localeCompare(b.name)

// ==============================
// ロジック・アルゴリズムチェック
// ==============================
// 毎回 Math.max(...array) していないか
// ❌️
for (const a of array) {
  Math.max(...array)
}
// ✅
array.sort((a, b) => (a - b));

// ==============================
// 出力チェック
// ==============================
// console.log を大量に呼んでいないか
// ❌️
for (const message of messages) console.log(message);
// ✅
let messages = [];
messages.push(message);
console.log(messages.join("\n"));
