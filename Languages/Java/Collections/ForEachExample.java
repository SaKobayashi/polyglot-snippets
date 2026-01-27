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

        numbers.filter(n -> n % 2 == 0)
               .forEach(n -> System.out.println("Even Lambda: " + n));

        numbers.stream()
               .filter(n -> n % 2 != 0)
               .forEach(n -> System.out.println("Odd Stream Lambda: " + n));

        numbers.stream()
               .map(n -> n * n)
               .forEach(n -> System.out.println("Squared Stream Lambda: " + n));

        numbers.stream()
               .sorted((a, b) -> b - a)
               .forEach(n -> System.out.println("Sorted Descending Lambda: " + n));
    }
}
