// クラスの定義例
class Person {
    String name;
    int age;

    // メソッド
    void introduce() {
        System.out.println("Hi, my name is " + name + " and I'm " + age + " years old.");
    }
}

public class ClassExample {
    public static void main(String[] args) {
        // インスタンス生成
        Person person = new Person();
        person.name = "Bob";
        person.age = 30;

        // メソッド呼び出し
        person.introduce();
    }
}
