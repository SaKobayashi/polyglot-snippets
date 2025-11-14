// 抽象クラスの定義
abstract class Vehicle {
    protected String brand;

    Vehicle(String brand) {
        this.brand = brand;
    }

    // 抽象メソッド（サブクラスで実装を強制）
    abstract void startEngine();

    // 具体メソッド（共通処理）
    void stopEngine() {
        System.out.println(brand + " engine stopped.");
    }
}

// サブクラス1
class Car extends Vehicle {
    Car(String brand) {
        super(brand);
    }

    void startEngine() {
        System.out.println(brand + " car engine started.");
    }
}

// サブクラス2
class Motorcycle extends Vehicle {
    Motorcycle(String brand) {
        super(brand);
    }

    void startEngine() {
        System.out.println(brand + " motorcycle engine started.");
    }
}

public class AbstractClassExample {
    public static void main(String[] args) {
        Vehicle car = new Car("Toyota");
        Vehicle bike = new Motorcycle("Yamaha");

        car.startEngine();
        bike.startEngine();

        car.stopEngine();
        bike.stopEngine();
    }
}
