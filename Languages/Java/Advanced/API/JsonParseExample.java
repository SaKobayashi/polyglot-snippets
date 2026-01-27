import org.json.JSONObject;

public class JsonParseExample {
    public static void main(String[] args) {
        String jsonStr = "{\"name\":\"Alice\",\"age\":30}";
        JSONObject obj = new JSONObject(jsonStr);
        System.out.println("Name: " + obj.getString("name"));
        System.out.println("Age: " + obj.getInt("age"));
    }
}
