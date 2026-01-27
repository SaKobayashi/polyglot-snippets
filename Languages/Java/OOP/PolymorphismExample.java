// 親クラス
class Animal {
    void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

// 子クラス1
class Dog extends Animal {
    void makeSound() {
        System.out.println("Woof!");
    }
}

// 子クラス2
class Cat extends Animal {
    void makeSound() {
        System.out.println("Meow!");
    }
}

public class PolymorphismExample {
    public static void main(String[] args) {
        // 親クラス型で子クラスのインスタンスを扱う
        Animal a1 = new Dog();
        Animal a2 = new Cat();

        // 同じメソッド名でも、実行時の型に応じて動作が変わる（多態性）
        a1.makeSound();  // Woof!
        a2.makeSound();  // Meow!
    }
}
