----------------------------------------
-- レコード作成（INSERT）
----------------------------------------
INSERT INTO
    users (name, email)
VALUES
    ('Alice', '');

----------------------------------------
-- レコード読み取り（READ）
----------------------------------------
SELECT
    *
FROM
    users
WHERE
    name = 'Alice';

SELECT
    name,
    email
FROM
    users;

SELECT
    *
FROM
    users
WHERE
    email IS NULL;

----------------------------------------
-- レコード更新（UPDATE）
----------------------------------------
UPDATE
    users
SET
    email = 'aaa@xxx'
WHERE
    name = 'Alice';

----------------------------------------
-- レコード削除（DELETE）
----------------------------------------
DELETE FROM
    users
WHERE
    name = 'Alice';

DELETE FROM
    users
WHERE
    email IS NULL;