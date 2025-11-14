import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class IteratorExample {
    public static void main(String[] args) {
        List<String> animals = new ArrayList<>();
        animals.add("Dog");
        animals.add("Cat");
        animals.add("Bird");

        // Iteratorを使って順に処理
        Iterator<String> iterator = animals.iterator();

        while (iterator.hasNext()) {
            String animal = iterator.next();
            System.out.println(animal);

            // 条件付き削除
            if (animal.equals("Cat")) {
                iterator.remove();
            }
        }

        System.out.println("After removal: " + animals);
    }
}
