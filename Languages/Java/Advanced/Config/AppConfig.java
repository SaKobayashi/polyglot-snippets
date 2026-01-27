import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class AppConfig {
    public static void main(String[] args) {
        Properties props = new Properties();
        try (FileInputStream fis = new FileInputStream("app.properties")) {
            props.load(fis);
            System.out.println("App Name: " + props.getProperty("app.name"));
            System.out.println("Version: " + props.getProperty("app.version"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
