public class ForLoopExample {
    public static void main(String[] args) {
        // for文の基本構文
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }

        // 拡張for文（配列の要素を順に処理）
        String[] fruits = {"Apple", "Banana", "Cherry"};
        for (String fruit : fruits) {
            System.out.println("Fruit: " + fruit);
        }
    }
}
