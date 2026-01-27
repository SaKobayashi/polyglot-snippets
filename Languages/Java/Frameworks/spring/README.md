# ディレクトリ構成
src/
 └ main/
     ├ java/
     │   └ com.example.project/
     │         ├ controller/
     │         ├ service/
     │         ├ repository/
     │         ├ model/ (or entity/)
     │         ├ dto/
     │         ├ exception/
     │         ├ config/
     │         ├ util/
     │         └ ProjectApplication.java
     └ resources/
         ├ application.yml (or application.properties)
         ├ static/
         ├ templates/
         ├ db/
         └ logback-spring.xml

# 各フォルダの役割
## /controller
### 役割
- HTTPリクエストの入口
- ルーティング（どのURLでどの処理を呼ぶか）を決める
- 入出力（リクエスト/レスポンス）を受け持つ

### 書くこと
- @RestController
- @RequestMapping
- @GetMapping / @PostMapping 等
- Request → DTO 変換
- Response を返す

### 注意点
- ビジネスロジックは書かない

---
## /service
### 役割
- ビジネスロジックの中心
- 複数の Repository や API を組み合わせるロジック
- トランザクション管理

### 書くこと
- ユースケースごとのロジック
- Repository呼び出し
- バリデーション
- トランザクション

### 注意点
- 1サービス1責務を心がける

---
## /repository
### 役割
- DBアクセス専用の層
- Spring Data JPA の CRUD メソッド
- SQL（または JPQL、QueryDSL）

### 書くこと
- @Repository
- interface XxxRepository extends JpaRepository<...>
- クエリメソッド、@Query

### 注意点
- ロジックは書かない

---
## /model or /entity
### 役割
- DBのテーブルと1:1で対応するクラス
- JPAのエンティティを置くところ

### 書くこと
- @Entity
- @Table
- @Id
- @Column
- Lombok アノテーション（@Data など）

### 注意点
- DTOと混ぜない(EntityはDB専用、DTOは通信専用)

---
## /dto
### 役割
- Controller ↔ Service のデータの受け渡し
- リクエストボディ、レスポンスBodyなど

### 書くこと
- UserRequest
- UserResponse
- 内部ロジックと切り離すためのクラス

---
## /config
### 役割
- Spring 全体の設定クラス置き場

### 書くこと
- WebMvcConfigurer
- CORS設定
- セキュリティ設定（SecurityConfig）
- Jackson設定（JSONのフォーマット）
- バッチ設定

---
## /exception
### 役割
- 例外管理を一元化する層

### 書くこと
- 共通エラーハンドラー（@ControllerAdvice）
- カスタム例外クラス

---
## /util
### 役割
- 例外管理を一元化する層

### 書くこと
- 共通関数・ヘルパーを置く
    - 日付変換
    - 共通のString操作
    - JWTユーティリティなど

### 注意点
- なんでもutil化しない

---
## /resources
### 役割
- 例外管理を一元化する層

### 書くこと
- 共通関数・ヘルパーを置く
    - 日付変換
    - 共通のString操作
    - JWTユーティリティなど

### 注意点
- なんでもutil化しない

