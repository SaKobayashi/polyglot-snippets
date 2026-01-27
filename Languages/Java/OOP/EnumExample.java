// 列挙型の定義
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

public class EnumExample {
    public static void main(String[] args) {
        Day today = Day.WEDNESDAY;

        switch (today) {
            case MONDAY:
                System.out.println("Start of the work week!");
                break;
            case FRIDAY:
                System.out.println("Almost the weekend!");
                break;
            case SATURDAY:
            case SUNDAY:
                System.out.println("Weekend vibes!");
                break;
            default:
                System.out.println("Midweek grind!");
        }

        // 全ての列挙値を出力
        System.out.println("\nAll days:");
        for (Day day : Day.values()) {
            System.out.println(day);
        }
    }
}
