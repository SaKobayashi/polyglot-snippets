public class ArrayExample {
    public static void main(String[] args) {
        // 配列の宣言と初期化
        int[] numbers = {10, 20, 30, 40, 50};

        // 配列の要素にアクセスして出力
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Element at index " + i + ": " + numbers[i]);
        }

        // 配列の操作例：ソートとコピー
        Arrays.sort(numbers);

        // 配列のコピー
        int[] copiedArray = Arrays.copyOf(numbers, 3);

        //2次元配列の例
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }

        



    }
}