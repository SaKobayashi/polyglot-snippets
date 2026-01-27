import java.util.HashSet;
import java.util.Set;

public class HashSetExample {
    public static void main(String[] args) {

        Set<String> set = new HashSet<>();
        set.add("A");
        set.add("B");
        set.add("A");   // 無視される

        System.out.println(set);  // [A, B]

        // 要素の削除
        set.remove("A");

        // 存在チェック
        System.out.println(set.contains("A"));  // false


        System.out.println(set.size());  // 1

        // 拡張for文での出力
        for (String s : set) {
            System.out.println(s);
        }
    }
}