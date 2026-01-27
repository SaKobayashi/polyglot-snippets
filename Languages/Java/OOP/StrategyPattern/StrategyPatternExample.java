interface DiscountStrategy {
    int apply(int price);
}

class NoDiscount implements DiscountStrategy {
    public int apply(int price) { return price; }
}

class TenPercentDiscount implements DiscountStrategy {
    public int apply(int price) { return (int)(price * 0.9); }
}

class OrderService {
    DiscountStrategy strategy;
    public OrderService(DiscountStrategy strategy) {
        this.strategy = strategy;
    }
    int calc(int price) {
        return strategy.apply(price);
    }
}
