import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {

        Scanner sc = new Scanner(System.in);

        // 標準入力をすべて読み込む
        List<String> lines = new ArrayList<>();
        while (sc.hasNextLine()) {
            lines.add(sc.nextLine());
        }
        sc.close();

        // ------ 処理例1: 全行を出力 --------
        for (int i = 0; i < lines.size(); i++) {
            System.out.println(lines.get(i));
        }

        // ------ 処理例2: 1行目の数値を取得 --------
        String[] firstSplit = lines.get(0).split(" ");
        int[] firstLine = Arrays.stream(firstSplit)
                                .mapToInt(Integer::parseInt)
                                .toArray();
        System.out.println(Arrays.toString(firstLine));

        // ------ 処理例3: N, W, H の読み取り（index を進める例） --------
        int index = 0;

        String[] nwh = lines.get(index++).split(" ");
        int N = Integer.parseInt(nwh[0]);
        int W = Integer.parseInt(nwh[1]);
        int H = Integer.parseInt(nwh[2]);

        for (int i = 0; i < N; i++) {
            String[] vals = lines.get(index++).split(" ");
            int[] values = Arrays.stream(vals)
                                 .mapToInt(Integer::parseInt)
                                 .toArray();
            System.out.println("Values for line " + (i + 1) + ": " + Arrays.toString(values));
        }

        // 2次元配列の読み取り例
        int H = lines.size();
        int W = lines.get(0).length();

        char[][] grid = new char[H][W];

        // 各行を char 配列に変換
        for (int i = 0; i < H; i++) {
            grid[i] = lines.get(i).toCharArray();
        }

        // 数値の2次元配列の読み取り例
        int H = lines.size();
        int W = lines.get(0).length();

        int[][] grid = new int[H][W];

        for (int i = 0; i < H; i++) {
            String line = lines.get(i);
            for (int j = 0; j < W; j++) {
                grid[i][j] = line.charAt(j) - '0';  // 数字に変換
            }
        }
        

        int[][] grid = new int[H][W];
        for (int i = 0; i < H; i++) {
            String[] row = lines.get(index++).split(" ");
            for (int j = 0; j < W; j++) {
                grid[i][j] = Integer.parseInt(row[j]);
            }
        }

        // 2次元配列の出力例
        for (int i = 0; i < H; i++) {
            for (int j = 0; j < W; j++) {
                System.out.print(grid[i][j] + " ");
            }
            System.out.println();
        }
    }
}
