import java.util.ArrayList;
import java.util.List;

public class ForEachExample {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            numbers.add(i);
        }

        // 拡張for文（for-each）
        for (int num : numbers) {
            System.out.println("Number: " + num);
        }

        // ラムダ式を使ったforEach（Java 8以降）
        numbers.forEach(n -> System.out.println("Lambda: " + n));
    }
}
