import java.io.*;

public class FileReadWriteExample {
    public static void main(String[] args) {
        String filePath = "example.txt";

        // ファイルに書き込み
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filePath))) {
            writer.write("Hello, world!");
            writer.newLine();
            writer.write("This is a test file.");
            System.out.println("✅ File written successfully!");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // ファイルを読み込み
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            System.out.println("📖 File contents:");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
