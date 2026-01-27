import { readFile } from "fs/promises";

const content = await readFile("data.txt", "utf-8");
console.log(content);
