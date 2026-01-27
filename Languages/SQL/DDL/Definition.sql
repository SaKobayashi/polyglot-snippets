----------------------------------------
-- テーブル作成（CREATE）
----------------------------------------
CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

----------------------------------------
-- テーブル変更（ALTER）
----------------------------------------
-- カラム追加
ALTER TABLE
    users
ADD
    COLUMN age INT;

-- カラム変更
ALTER TABLE
    users
MODIFY
    COLUMN name VARCHAR(150);

-- カラム削除
ALTER TABLE
    users DROP COLUMN age;

----------------------------------------
-- テーブル削除（DROP）
----------------------------------------
DROP TABLE users;

----------------------------------------
-- レコード全削除（TRUNCATE）
----------------------------------------
TRUNCATE TABLE users;