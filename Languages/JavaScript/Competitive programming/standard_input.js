// 標準入力を受け取るためのコード例
process.stdin.resume();
process.stdin.setEncoding("utf8");

const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
    lines.push(line);
});
reader.on("close", () => {
    // ここで入力されたデータを処理する
    // 処理例1
    lines.forEach((line, index) => {
        console.log(`Line ${index + 1}: ${line}`);
    });

    // 処理例2
    const firstLine = lines[0].split(" ").map(Number);
    console.log(`First line numbers: ${firstLine}`);

    // 処理例3
    let index = 0;
    const [N, W, H] = lines[index++].split(" ").map(Number);
    for (let i = 0; i < N; i++) {
        const values = lines[index++].split(" ").map(Number);
        console.log(`Values for line ${i + 1}: ${values}`);
    }
});
