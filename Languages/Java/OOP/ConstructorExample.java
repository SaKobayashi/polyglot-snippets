class Person {
    String name;
    int age;

    // コンストラクタ
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void introduce() {
        System.out.println("Hi, I'm " + name + " (" + age + " years old)");
    }
}

public class ConstructorExample {
    public static void main(String[] args) {
        // コンストラクタを使って初期化
        Person p1 = new Person("Alice", 25);
        p1.introduce();

        Person p2 = new Person("Bob", 30);
        p2.introduce();
    }
}
