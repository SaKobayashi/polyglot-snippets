// let：再代入可
let age: number = 25;
age = 30;

// const：再代入不可
const siteName: string = "Polyglot Snippets";

// 型推論：明示しなくても TypeScript が型を推定
let message = "Hello TS"; // string と推論される
// message = 123;   // エラー：string に number は代入不可

// 明示的な型注釈
let isValid: boolean = true;

// 複数変数
let x: number = 10,
  y: number = 20;

// 文字列テンプレート
const greeting = `Welcome to ${siteName}`;
console.log(greeting); // Welcome to Polyglot Snippets

export {};
