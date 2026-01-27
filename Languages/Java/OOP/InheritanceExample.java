// 親クラス
class Animal {
    void makeSound() {
        System.out.println("Some sound...");
    }
}

// 子クラス
class Dog extends Animal {
    void makeSound() {
        System.out.println("Woof!");
    }
}

public class InheritanceExample {
    public static void main(String[] args) {
        Animal a = new Animal();
        Dog d = new Dog();

        a.makeSound();  // 親クラスのメソッド
        d.makeSound();  // オーバーライドされたメソッド
    }
}
