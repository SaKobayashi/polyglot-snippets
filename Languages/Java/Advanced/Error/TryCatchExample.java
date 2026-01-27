public class TryCatchExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.err.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Cleanup done.");
        }
    }
}
