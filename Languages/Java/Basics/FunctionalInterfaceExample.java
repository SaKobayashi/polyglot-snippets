package java.basics;

import java.util.*;
import java.util.function.*;
import java.util.stream.*;

public class FunctionalInterfaceExample {
    public static void main(String[] args) {
        
        // ---------- Supplier: 値を供給する ----------
        Supplier<String> uuidSupplier = () -> UUID.randomUUID().toString();
        Supplier<Integer> randomIntSupplier = () -> new Random().nextInt(100);

        // 利用例: Stream.generate で繰り返し値を作る
        List<String> uuids = Stream.generate(uuidSupplier).limit(3).collect(Collectors.toList());
        System.out.println("Generated UUIDs: " + uuids);

        // ---------- Consumer: 値を受け取って副作用を行う ----------
        Consumer<String> printer = s -> System.out.println("PRINT: " + s);
        Consumer<String> lengthPrinter = s -> System.out.println(" length=" + (s == null ? 0 : s.length()));
        // チェイン
        Consumer<String> chained = printer.andThen(lengthPrinter);
        chained.accept("example");

        // メソッド参照の例
        Consumer<Object> sysOut = System.out::println;
        sysOut.accept("Hello via method reference");

        // ForEach と組み合わせた利用
        List<Integer> numbers = IntStream.rangeClosed(1, 5).boxed().collect(Collectors.toList());
        Consumer<Integer> showSquare = n -> System.out.println(n + " -> " + (n * n));
        numbers.forEach(showSquare);

        // ---------- Function: 入力を変換して返す ----------
        Function<String, Integer> toLength = s -> s == null ? 0 : s.length();
        Function<Integer, String> toHex = i -> Integer.toHexString(i);

        // compose / andThen の例
        Function<String, String> lengthToHex = toLength.andThen(toHex);
        System.out.println("len->hex of 'hello' = " + lengthToHex.apply("hello"));

        // Map 操作に使う例
        List<String> words = Arrays.asList("foo", "foobar", "bar", "");
        List<Integer> lengths = words.stream().map(toLength).collect(Collectors.toList());
        System.out.println("lengths: " + lengths);

        // ---------- Predicate: 真偽判定を表す ----------
        Predicate<String> notNull = Objects::nonNull;
        Predicate<String> notEmpty = s -> !s.isEmpty();
        Predicate<String> containsFoo = s -> s.contains("foo");

        // 組み合わせ（and / or / negate）
        Predicate<String> validFoo = notNull.and(notEmpty).and(containsFoo);

        // フィルタでの利用
        List<String> filtered = words.stream().filter(validFoo).collect(Collectors.toList());
        System.out.println("filtered (validFoo): " + filtered);

        // 逆（negate）の例
        Predicate<String> blankOrNull = notNull.negate().or(notEmpty.negate());
        List<String> blanks = words.stream().filter(blankOrNull).collect(Collectors.toList());
        System.out.println("blank or null: " + blanks);

        // 実用的な組み合わせ例: Supplier -> Function -> Consumer のパイプ
        Supplier<String> sampleSupplier = () -> "sample_text_123";
        Function<String, String> sanitizer = s -> s.replaceAll("[^a-z0-9_]", "");
        Consumer<String> finalConsumer = s -> System.out.println("final => " + s.toUpperCase());

        // パイプを実行
        finalConsumer.accept(sanitizer.apply(sampleSupplier.get()));

        Consumer<String> printer = s -> System.out.println("Hello " + s);
        printer.accept("Alice");
    }
}