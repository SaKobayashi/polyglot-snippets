import java.io.*;
import java.util.*;

public class CSVReadWriteExample {
    public static void main(String[] args) {
        String filePath = "data.csv";

        // CSV書き込み
        try (PrintWriter writer = new PrintWriter(new FileWriter(filePath))) {
            writer.println("name,age");
            writer.println("Alice,25");
            writer.println("Bob,30");
            System.out.println("✅ CSV file written successfully!");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // CSV読み込み
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            List<String[]> data = new ArrayList<>();

            while ((line = reader.readLine()) != null) {
                data.add(line.split(","));
            }

            System.out.println("📊 CSV contents:");
            for (String[] row : data) {
                System.out.println(Arrays.toString(row));
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
