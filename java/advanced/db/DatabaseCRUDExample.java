import java.sql.*;

public class DatabaseCRUDExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/testdb";
        String user = "root";
        String password = "password";

        try (Connection conn = DriverManager.getConnection(url, user, password)) {

            // CREATE
            String insertSql = "INSERT INTO users (name, age) VALUES (?, ?)";
            try (PreparedStatement stmt = conn.prepareStatement(insertSql)) {
                stmt.setString(1, "Alice");
                stmt.setInt(2, 25);
                stmt.executeUpdate();
            }

            // READ
            String selectSql = "SELECT * FROM users";
            try (Statement stmt = conn.createStatement();
                 ResultSet rs = stmt.executeQuery(selectSql)) {
                while (rs.next()) {
                    System.out.println(rs.getInt("id") + ": " +
                            rs.getString("name") + " (" + rs.getInt("age") + ")");
                }
            }

            // UPDATE
            String updateSql = "UPDATE users SET age=? WHERE name=?";
            try (PreparedStatement stmt = conn.prepareStatement(updateSql)) {
                stmt.setInt(1, 26);
                stmt.setString(2, "Alice");
                stmt.executeUpdate();
            }

            // DELETE
            String deleteSql = "DELETE FROM users WHERE name=?";
            try (PreparedStatement stmt = conn.prepareStatement(deleteSql)) {
                stmt.setString(1, "Alice");
                stmt.executeUpdate();
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
