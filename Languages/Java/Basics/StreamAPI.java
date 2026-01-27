List<User> users = ...;

// 基本操作
List<String> names = users.stream() // Streamの生成
    .filter(u -> u.getAge() >= 20) // フィルタリング（20歳以上を抽出）
    .map(User::getName) // name を抽出
    .collect(Collectors.toList()); // リストに収集

int sum = users.stream()
    .map(User::getScore) // score を抽出
    .reduce(0, Integer::sum); // 合計を計算

Map<String, List<User>> byDept = users.stream()
    .collect(Collectors.groupingBy(User::getDepartment));　// departmentをキーにしてグループ化

Map<String, Long> countByDept = users.stream()
    .collect(Collectors.groupingBy(User::getDepartment, Collectors.counting()));　// departmentをキーにしてグループ化して人数をカウント

// mapの活用例いろいろ
List<UserResponse> responses = users.stream()
    .map(u -> new UserResponse(u.getId(), u.getName())) // UserResponseに変換
    .toList(); // Listに変換

List<LocalDate> birthdays = users.stream()
    .map(u -> LocalDate.parse(u.getBirthdayString())) // 文字列をLocalDateに変換
    .toList(); // Listに変換

List<Integer> ageInMonths = users.stream()
    .map(u -> u.getAge() * 12) // 年齢を月齢に変換
    .toList(); // Listに変換

List<String> emails = users.stream()
    .map(u -> Optional.ofNullable(u.getEmail()).orElse("なし")) // nullチェックを行い、nullの場合は"なし"に置換
    .toList(); // Listに変換

List<String> formatted = users.stream()
    .map(User::getName) // 名前を取得
    .map(String::trim) // 前後の空白を削除
    .map(String::toUpperCase) // 大文字に変換
    .toList();

List<String> emails = users.stream()
    .map(User::getEmail) // メールアドレスを取得
    .flatMap(e -> e == null ? Stream.empty() : Stream.of(e)) // nullを除外
    .toList();

List<Path> paths = pathsString.stream()
    .map(s -> {
        try {
            return Paths.get(s); // 例外が発生する可能性がある処理
        } catch (Exception e) {
            return Paths.get("/default");
        }
    })
    .toList();

List<String> numbers = IntStream.of(1, 2, 3)
    .mapToObj(String::valueOf) // int を String に変換
    .toList();

/**
    【中間操作】
    filter(条件に合う要素を抽出)
    map(要素を変換)
    flatMap(要素を平坦化)
    distinct(重複を排除)
    sorted(要素をソート)

    【終端操作】
    forEach(Streamの各要素に対して処理を行う)
    toList(Listに変換)
    toSet(Setに変換)
    toMap(Mapに変換)
    collect(コレクションに変換)
    reduce(ストリームの要素を1つの値にまとめる。例: 合計、最大値、最小値)
    count(要素数をカウント)

    公式ドキュメント
    https://docs.oracle.com/javase/jp/8/docs/api/java/util/stream/Stream.html
*/