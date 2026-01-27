// ==============================
// 4方向移動
// ==============================
int[] dr = {1, -1, 0, 0};
int[] dc = {0, 0, 1, -1};

boolean inBounds(int r, int c, int H, int W) {
    return 0 <= r && r < H && 0 <= c && c < W;
}

for (int d = 0; d < 4; d++) {
    int nr = r + dr[d];
    int nc = c + dc[d];
    if (!inBounds(nr, nc, H, W)) continue;
    // 処理
}

// ==============================
// 8方向移動
// ==============================
int[] dy = {1,1,1,0,0,-1,-1,-1};
int[] dx = {1,0,-1,1,-1,1,0,-1};

for (int d = 0; d < 8; d++) {
    int ny = y + dy8[d];
    int nx = x + dx8[d];
    if (!inBounds(ny, nx, H, W)) continue;
    // 処理
}


// ==============================
// BFS（迷路の最短距離）
// ==============================
import java.util.*;

int bfs(char[][] grid, int H, int W, int sr, int sc) {
    int[][] dist = new int[H][W];
    for (int[] row : dist) Arrays.fill(row, -1);

    Queue<int[]> q = new LinkedList<>();
    q.add(new int[]{sr, sc});
    dist[sr][sc] = 0;

    int[] dr = {1, -1, 0, 0};
    int[] dc = {0, 0, 1, -1};

    while (!q.isEmpty()) {
        int[] cur = q.poll();
        int r = cur[0], c = cur[1];

        for (int d = 0; d < 4; d++) {
            int nr = r + dr[d];
            int nc = c + dc[d];
            if (nr < 0 || nr >= H || nc < 0 || nc >= W) continue;
            if (grid[nr][nc] == '#') continue; // 壁
            if (dist[nr][nc] != -1) continue;   // 訪問済み

            dist[nr][nc] = dist[r][c] + 1;
            q.add(new int[]{nr, nc});
        }
    }
    return dist; // 必要に応じて返す
}

// ==============================
// DFS（連結成分探索など）
// ==============================
boolean[][] visited;

void dfs(char[][] grid, int r, int c) {
    visited[r][c] = true;

    int[] dr = {1, -1, 0, 0};
    int[] dc = {0, 0, 1, -1};

    for (int d = 0; d < 4; d++) {
        int nr = r + dr[d];
        int nc = c + dc[d];
        if (nr < 0 || nr >= H || nc < 0 || nc >= W) continue;
        if (visited[nr][nc]) continue;
        if (grid[nr][nc] == '#') continue;
        dfs(grid, nr, nc);
    }
}

// ==============================
// ソートして前後を比較（隣接要素チェック）
// ==============================
// Arrays.sort() と隣接比較
int[] a = {5, 1, 4, 1, 2};
Arrays.sort(a);

for (int i = 1; i < a.length; i++) {
    if (a[i] == a[i - 1]) {
        // 重複発見
    }
}

// オブジェクトのソート
import java.util.*;

class Pair {
    int x, y;
    Pair(int x, int y) { this.x = x; this.y = y; }
}

List<Pair> list = new ArrayList<>();
Collections.sort(list, (p1, p2) -> p1.x - p2.x);


// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
