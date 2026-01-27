// ==============================
// 基本的な型
// ==============================
// number, string, boolean
let price: number = 1000;
let productName: string = "Keyboard";
let inStock: boolean = true;

// object
const student: {
  id: number;
  name: string;
  height: number;
} = {
  id: 1,
  name: "Alice",
  height: 150,
};

// object(interface)
interface user {
  id: number;
  name: string;
  height: number;
}

// unknown
let value: unknown = 10;
// let n: number = value; // エラー：型を確認する必要あり

// union type
let id: number | string = 10;
id = "USER-001";

// literal type
let direction: "up" | "down" | "left" | "right" = "up";

// null, undefined
let empty: null = null;
let notSet: undefined = undefined;

console.log(id, direction);

export {};
