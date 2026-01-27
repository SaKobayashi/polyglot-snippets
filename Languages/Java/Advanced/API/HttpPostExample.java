import java.net.http.*;
import java.net.URI;
import java.io.IOException;

public class HttpPostExample {
    public static void main(String[] args) throws IOException, InterruptedException {
        String json = """
        {
            "name": "John Doe",
            "email": "john@example.com"
        }
        """;

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://httpbin.org/post"))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println("Response Code: " + response.statusCode());
        System.out.println(response.body());
    }
}
