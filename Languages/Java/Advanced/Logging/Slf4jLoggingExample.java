import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Slf4jLoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(Slf4jLoggingExample.class);

    public static void main(String[] args) {
        logger.info("Application started with SLF4J");
        logger.debug("Debug details here...");
        logger.error("Error occurred!");
    }
}
