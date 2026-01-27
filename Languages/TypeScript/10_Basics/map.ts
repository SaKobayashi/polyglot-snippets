// ==============================
// Map（連想配列）の基本
// ==============================

// 基本宣言
let emptyMap: Map<string, number> = new Map();
let scoreMap: Map<string, number> = new Map([
  ["Alice", 100],
  ["Bob", 80],
  ["Charlie", 90],
]);

// キー・値の型を union で扱う
let mixedMap = new Map<string, number | string>([
  ["id", 1],
  ["role", "admin"],
]);

// readonly で Map を扱う（再代入を防ぐ）
const readonlyMap = new Map<string, number>([
  ["A", 10],
  ["B", 20],
]) as ReadonlyMap<string, number>;

// 追加・更新（set は「追加」と「更新」の両方に使える）
scoreMap.set("David", 70); // 追加
scoreMap.set("Bob", 200); // 更新（上書き）

// 取得
console.log(scoreMap.get("Alice")); // 100
console.log(scoreMap.get("Eve")); // undefined（存在しないキー）

// 存在チェック
console.log(scoreMap.has("Charlie")); // true
if (!scoreMap.has("Eve")) {
  console.log("Eve は存在しません");
}

// 削除
scoreMap.delete("Charlie");
console.log(scoreMap.has("Charlie")); // false

// 全削除
emptyMap.clear();

// サイズ（要素数）
console.log(scoreMap.size);

// ループ（for-of）
for (const [key, value] of scoreMap) {
  console.log(`${key}: ${value}`);
}

// forEach ループ
scoreMap.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});

// Iterator で順番に取り出す
const iterator = scoreMap.entries();
console.log(iterator.next().value); // ["Alice", 100]
console.log(iterator.next().value); // ["Bob", 200]

// キー一覧・値一覧を配列化
let keys: string[] = Array.from(scoreMap.keys());
let values: (number | string)[] = Array.from(scoreMap.values());

// Map から配列を生成
let fromMapEntries: [string, number][] = Array.from(scoreMap.entries());

// Map からキー配列を生成（Javaでいう map.keySet() の配列版）
let fromMapKeys: string[] = Array.from(scoreMap.keys());

// Map から値配列を生成（Javaでいう map.values() の配列版）
let fromMapValues: number[] = Array.from(
  new Map([
    ["x", 1],
    ["y", 2],
    ["z", 3],
  ]).values()
);

// Map から配列変換の応用
let doubledScores = Array.from(scoreMap.values()).map((v) => v * 2);

// Object との相互変換
// Object → Map
const obj = { a: 1, b: 2, c: 3 };
const mapFromObj = new Map(Object.entries(obj));

// Map → Object
const objFromMap = Object.fromEntries(scoreMap);

// JSON に変換（Map はそのままでは JSON.stringify できないので変換が必要）
const json = JSON.stringify(Array.from(scoreMap.entries()));
const parsedMap = new Map(JSON.parse(json) as [string, number][]);

// 型付き Map の実務例
type UserRecord = {
  id: number;
  name: string;
  email?: string;
};

let userMap: Map<number, UserRecord> = new Map([
  [1, { id: 1, name: "Alice", email: "a@example.com" }],
  [2, { id: 2, name: "Bob" }],
]);

// アクセス
console.log(userMap.get(1)?.email);

// 多次元 Map（ネスト）
let nestedMap: Map<string, Map<string, number>> = new Map();
nestedMap.set(
  "TeamA",
  new Map([
    ["Alice", 50],
    ["Bob", 40],
  ])
);
nestedMap.set("TeamB", new Map([["Carol", 70]]));

// ネストアクセス
console.log(nestedMap.get("TeamA")?.get("Bob")); // 40

export {};
