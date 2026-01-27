// ------------------------------------
// 文字列中の特定の文字の出現回数を数えるメソッド
// ------------------------------------
public class Example1 {
    public static int countChar(String s, char target) {
        int count = 0;
        for (char c : s.toCharArray()) {
            if (c == target) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(countChar("apple", 'p')); // 出力: 2
    }
}

// ------------------------------------
// 重複を除いて昇順ソート
// ------------------------------------
import java.util.*;

public class Example2 {
    public static int[] uniqueSorted(int[] arr) {
        Set<Integer> set = new HashSet<>();
        for (int n : arr) set.add(n);

        return set.stream()
                .sorted()
                .mapToInt(Integer::intValue)
                .toArray();
    }

    public static void main(String[] args) {
        int[] result = uniqueSorted(new int[]{3, 1, 2, 3, 4, 2});
        System.out.println(Arrays.toString(result)); // [1, 2, 3, 4]
    }
}

// ------------------------------------
// 島の数を数える（DFS）
// ------------------------------------
public class Example3 {
    public static int numIslands(int[][] grid) {
        int h = grid.length;
        int w = grid[0].length;
        int count = 0;

        boolean[][] visited = new boolean[h][w];

        for (int i = 0; i < h; i++) {
            for (int j = 0; j < w; j++) {
                if (grid[i][j] == 1 && !visited[i][j]) {
                    dfs(grid, visited, i, j, h, w);
                    count++;
                }
            }
        }
        return count;
    }

    private static void dfs(int[][] grid, boolean[][] visited, int x, int y, int h, int w) {
        if (x < 0 || y < 0 || x >= h || y >= w) return;
        if (grid[x][y] == 0 || visited[x][y]) return;

        visited[x][y] = true;

        dfs(grid, visited, x + 1, y, h, w);
        dfs(grid, visited, x - 1, y, h, w);
        dfs(grid, visited, x, y + 1, h, w);
        dfs(grid, visited, x, y - 1, h, w);
    }

    public static void main(String[] args) {
        int[][] grid = {
            {1, 1, 0},
            {1, 0, 0},
            {0, 0, 1}
        };

        System.out.println(numIslands(grid)); // 出力: 2
    }
}

// ------------------------------------
// API 実装課題
// ------------------------------------
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private static final List<User> USERS = List.of(
            new User(1, "Alice"),
            new User(2, "Bob"),
            new User(3, "Charlie")
    );

    @GetMapping("/{id}")
    public User getUser(@PathVariable int id) {
        return USERS.stream()
                .filter(u -> u.id() == id)
                .findFirst()
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}

record User(int id, String name) {}
