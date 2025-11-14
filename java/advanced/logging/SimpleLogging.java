import java.util.logging.Logger;

public class SimpleLogging {
    private static final Logger logger = Logger.getLogger(SimpleLogging.class.getName());

    public static void main(String[] args) {
        logger.info("Application started");
        logger.warning("This is a warning message");
        logger.severe("This is an error message");
    }
}
