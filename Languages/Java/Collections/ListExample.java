import java.util.ArrayList;
import java.util.LinkedList;

public class ArrayListExample {
    public static void main(String[] args) {
        // ArrayListの宣言と初期化
        ArrayList<String> fruits = new ArrayList<>();

        // 末尾に追加
        fruits.add("Apple");
        fruits.add("Banana");
        // 指定位置に追加
        fruits.add(2, "Cherry");

        // 要素の更新
        fruits.set(1, "Blueberry");

        // 要素の削除
        fruits.remove("Apple");
        fruits.remove(0); // インデックス0の要素を削除

        // 要素の削除（条件指定）
        fruits.removeIf(fruit -> fruit.startsWith("C"));

        // 要素の取得
        fruits.get(0);

        // 要素数の取得
        fruits.size();

        // ソート
        Collections.sort(fruits); // 昇順
        Collections.sort(fruits, Collections.reverseOrder()); // 降順
        fruits.sort((a, b) -> b.compareTo(a)); // 降順
        fruits.sort(Comparator.comparing(String::length)); // 文字列長でソート

        // 重複の削除(List → Set)
        ArrayList<String> uniqueFruits = new ArrayList<>(new HashSet<>(fruits));

        // 配列 → ArrayList
        String[] fruitArray = {"Mango", "Pineapple", "Grapes"};
        ArrayList<String> fruitList = new ArrayList<>(Arrays.asList(fruitArray));

        // ArrayList → 配列
        String[] fruitsArray = fruits.toArray(new String[0]);

        // List の一部を切り出す（subList）
        List<String> subList = fruits.subList(0, Math.min(2, fruits.size()));

        // List → カンマ区切りの文字列
        String joined = String.join(", ", fruits);

        // カンマ区切りの文字列 → List
        String csv = "Orange, Peach, Kiwi";
        List<String> fruitFromCsv = Arrays.asList(csv.split(",\\s*"));

        // クリア
        fruits.clear();

        // すべての要素の削除
        fruits.removeAll(fruitList);

        // 存在チェック
        boolean banana = fruits.contains("Banana");

        // 拡張for文での出力
        for (String fruit : fruits) {
            System.out.println("Fruit: " + fruit);
        }

        // for文での出力
        for (int i = 0; i < fruits.size(); i++) {
            System.out.println("Fruit " + i + ": " + fruits.get(i));
        }

        // ラムダ式を使ったforEach
        fruits.forEach(fruit -> System.out.println("Lambda Fruit: " + fruit));

        // ストリームAPIでの操作
        fruits.stream()
            .filter(fruit -> fruit.length() > 5)
            .forEach(fruit -> System.out.println("Long Fruit: " + fruit));

        // 変換
        List <String> upperFruits = fruits.stream()
            .map(String::toUpperCase)
            .collect(Collectors.toList());

        // マップ操作
        fruits.stream()
            .map(String::toUpperCase)
            .forEach(fruit -> System.out.println("Uppercase Fruit: " + fruit));

        // ソート操作
        fruits.stream()
            .sorted()
            .forEach(fruit -> System.out.println("Sorted Fruit: " + fruit));
    }
}

// 頻繁に挿入や削除が行われる場合はLinkedListを使用する
public class LinkedListExample {
    public static void main(String[] args) {
        // LinkedListの宣言と初期化
        java.util.LinkedList<String> colors = new LinkedList<>();

        // 要素の追加
        colors.add("Red");
        colors.add("Green");
        colors.add("Blue");

        // 要素の取得
        System.out.println("First color: " + colors.get(0));

        // 要素の数
        System.out.println("Total colors: " + colors.size());

        // 拡張for文での出力
        for (String color : colors) {
            System.out.println("Color: " + color);
        }
    }
}