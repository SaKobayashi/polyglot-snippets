public class MethodExample {
    // メソッドの定義
    static int add(int a, int b) {
        return a + b;
    }

    static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static void main(String[] args) {
        // メソッドの呼び出し
        int result = add(5, 3);
        System.out.println("Result: " + result);

        greet("Alice");
    }
}
