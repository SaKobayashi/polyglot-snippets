import java.io.IOException;
import java.util.logging.*;

public class FileLogging {
    private static final Logger logger = Logger.getLogger(FileLogging.class.getName());

    public static void main(String[] args) {
        try {
            FileHandler handler = new FileHandler("app.log", true);
            handler.setFormatter(new SimpleFormatter());
            logger.addHandler(handler);

            logger.info("Log written to file successfully");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
