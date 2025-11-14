import java.util.HashMap;
import java.util.Map;

public class HashMapExample {
    public static void main(String[] args) {
        // HashMapの宣言と初期化
        Map<String, Integer> scores = new HashMap<>();

        // 要素の追加
        scores.put("Alice", 90);
        scores.put("Bob", 80);
        scores.put("Charlie", 70);

        // 値の取得
        System.out.println("Alice's score: " + scores.get("Alice"));

        // すべてのキーと値を表示
        for (String name : scores.keySet()) {
            System.out.println(name + " : " + scores.get(name));
        }
    }
}
