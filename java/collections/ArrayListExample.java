import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        // ArrayListの宣言と初期化
        ArrayList<String> fruits = new ArrayList<>();

        // 要素の追加
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");

        // 要素の取得
        System.out.println("First fruit: " + fruits.get(0));

        // 要素の数
        System.out.println("Total fruits: " + fruits.size());

        // for文での出力
        for (int i = 0; i < fruits.size(); i++) {
            System.out.println("Fruit " + i + ": " + fruits.get(i));
        }
    }
}
