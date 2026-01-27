// ==============================
// 8方向移動の実装例
// ==============================
const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function move(x, y) {

    for (const [dx, dy] of directions) {
        let nx = x + dx;
        let ny = y + dy;
        while (isValidPosition(nx, ny)) {
            // 新しい座標 (nx, ny) を使った処理
            // 例: console.log(`New position: (${nx}, ${ny})`);
            nx += dx;
            ny += dy;
        }
        // 新しい座標 (nr, nc) を使った処理
        // 例: console.log(`New position: (${nr}, ${nc})`);
    }
  // 新しい座標 (x + dx, y + dy) を計算
  // 例: console.log(`New position: (${x + dx}, ${y + dy})`);
}

function isValidPosition(nx, ny, x, y) {
  // ここで座標 (nx, ny) が有効かどうかをチェックするロジックを実装
  return nx >= 0 && ny >= 0 && nx < x && ny < y;
}

// ==============================
// 配列作成と object の push
// ==============================
const students = [];
for(let i = 0; i < N; i++){
  const [name, height, month] = lines[i].split(" ");
  students.push({
    name,
    height: Number(height),
    month: Number(month),
  });
}
