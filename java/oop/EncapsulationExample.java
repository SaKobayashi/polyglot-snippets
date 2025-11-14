class Account {
    // フィールドはprivateで隠す
    private String owner;
    private int balance;

    // コンストラクタ
    public Account(String owner, int balance) {
        this.owner = owner;
        this.balance = balance;
    }

    // GetterとSetterを定義
    public String getOwner() {
        return owner;
    }

    public int getBalance() {
        return balance;
    }

    public void deposit(int amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(int amount) {
        if (amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Insufficient funds!");
        }
    }
}

public class EncapsulationExample {
    public static void main(String[] args) {
        Account account = new Account("Alice", 1000);

        account.deposit(500);
        account.withdraw(200);
        account.withdraw(2000); // 残高不足

        System.out.println(account.getOwner() + "'s balance: " + account.getBalance());
    }
}
