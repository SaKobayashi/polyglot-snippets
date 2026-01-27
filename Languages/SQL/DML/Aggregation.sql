----------------------------------------
-- カウント（COUNT）
----------------------------------------
SELECT
    COUNT(*) AS total_users
FROM
    users;

SELECT
    COUNT(DISTINCT email) AS unique_emails
FROM
    users;

----------------------------------------
-- 集計（SUM）
----------------------------------------
SELECT
    SUM(amount) AS total_amount
FROM
    orders;

SELECT
    customer_id,
    SUM(amount) AS total_amount
FROM
    orders
GROUP BY
    customer_id;

----------------------------------------
-- 平均値（AVG）
----------------------------------------
SELECT
    AVG(amount) AS average_amount
FROM
    orders;

SELECT
    customer_id,
    AVG(amount) AS average_amount
FROM
    orders
GROUP BY
    customer_id;

----------------------------------------
-- 最大値（MAX）
----------------------------------------
SELECT
    MAX(amount) AS max_amount
FROM
    orders;

----------------------------------------
-- ソート（ORDER BY）
----------------------------------------
SELECT
    customer_id,
    SUM(amount) AS total_amount
FROM
    orders
GROUP BY
    customer_id
ORDER BY
    total_amount DESC;

----------------------------------------
-- グループ化（GROUP BY）
----------------------------------------
SELECT
    customer_id,
    COUNT(*) AS order_count,
    SUM(amount) AS total_amount
FROM
    orders
GROUP BY
    customer_id;

----------------------------------------
-- グループ化後の条件指定（HAVING）
----------------------------------------
SELECT
    customer_id,
    COUNT(*) AS order_count,
    SUM(amount) AS total_amount
FROM
    orders
GROUP BY
    customer_id
HAVING
    total_amount > 1000;

----------------------------------------
-- 複数集計関数の使用
----------------------------------------
SELECT
    customer_id,
    COUNT(*) AS order_count,
    SUM(amount) AS total_amount,
    AVG(amount) AS average_amount,
    MAX(amount) AS max_amount
FROM
    orders
GROUP BY
    customer_id;

----------------------------------------
-- グループ化とソートの組み合わせ
----------------------------------------
SELECT
    customer_id,
    SUM(amount) AS total_amount
FROM
    orders
GROUP BY
    customer_id
ORDER BY
    total_amount DESC;

----------------------------------------
-- NULL値の扱い
----------------------------------------
SELECT
    customer_id,
    COUNT(*) AS order_count,
    SUM(amount) AS total_amount
FROM
    orders
WHERE
    amount IS NOT NULL
GROUP BY
    customer_id;

----------------------------------------
-- 別名の使用（ALIAS）
----------------------------------------
SELECT
    customer_id AS cust_id,
    SUM(amount) AS total_amount
FROM
    orders
GROUP BY
    customer_id;

----------------------------------------
-- 複数テーブルの集計
----------------------------------------
SELECT
    customers.name AS customer_name,
    SUM(orders.amount) AS total_amount
FROM
    customers
    JOIN orders ON customers.id = orders.customer_id
GROUP BY
    customers.name;

----------------------------------------
-- ネストされた集計
----------------------------------------
SELECT
    customer_id,
    SUM(amount) AS total_amount
FROM
    orders
WHERE
    customer_id IN (
        SELECT
            customer_id
        FROM
            orders
        GROUP BY
            customer_id
        HAVING
            SUM(amount) > 500
    )
GROUP BY
    customer_id;

----------------------------------------
-- ウィンドウ関数（WINDOW FUNCTION）
----------------------------------------
SELECT
    customer_id,
    amount,
    SUM(amount) OVER (PARTITION BY customer_id) AS total_amount_per_customer
FROM
    orders;

----------------------------------------
-- ランキング（RANK）
----------------------------------------
SELECT
    customer_id,
    amount,
    RANK() OVER (
        PARTITION BY customer_id
        ORDER BY
            amount DESC
    ) AS amount_rank
FROM
    orders;

----------------------------------------
-- 移動平均（MOVING AVERAGE）
----------------------------------------
SELECT
    order_date,
    amount,
    AVG(amount) OVER (
        ORDER BY
            order_date ROWS BETWEEN 2 PRECEDING
            AND CURRENT ROW
    ) AS moving_average
FROM
    orders;

----------------------------------------
-- 累積合計（CUMULATIVE SUM）
----------------------------------------
SELECT
    order_date,
    amount,
    SUM(amount) OVER (
        ORDER BY
            order_date ROWS BETWEEN UNBOUNDED PRECEDING
            AND CURRENT ROW
    ) AS cumulative_sum
FROM
    orders;

----------------------------------------
-- ピボット集計（PIVOT）
----------------------------------------
SELECT
    *
FROM
    orders PIVOT (
        SUM(amount) FOR status IN (
            'completed' AS completed_amount,
            'pending' AS pending_amount
        )
    );

----------------------------------------
-- グループ化とウィンドウ関数の組み合わせ
----------------------------------------
SELECT
    customer_id,
    amount,
    SUM(amount) OVER (PARTITION BY customer_id) AS total_amount_per_customer,
    RANK() OVER (
        PARTITION BY customer_id
        ORDER BY
            amount DESC
    ) AS amount_rank
FROM
    orders;

----------------------------------------
-- 条件付き集計関数
----------------------------------------
SELECT
    customer_id,
    SUM(
        CASE
            WHEN status = 'completed' THEN amount
            ELSE 0
        END
    ) AS completed_amount,
    SUM(
        CASE
            WHEN status = 'pending' THEN amount
            ELSE 0
        END
    ) AS pending_amount
FROM
    orders
GROUP BY
    customer_id;

----------------------------------------
-- グループ化とHAVING句の複雑な条件
----------------------------------------
SELECT
    customer_id,
    COUNT(*) AS order_count,
    SUM(amount) AS total_amount
FROM
    orders
GROUP BY
    customer_id
HAVING
    total_amount > 1000
    AND COUNT(*) > 5;

----------------------------------------
-- 日付関数との組み合わせ
----------------------------------------
SELECT
    DATE(order_date) AS order_day,
    SUM(amount) AS total_amount
FROM
    orders
GROUP BY
    DATE(order_date);

----------------------------------------
-- サブクエリと集計関数の組み合わせ
----------------------------------------
SELECT
    customer_id,
    SUM(amount) AS total_amount
FROM
    orders
WHERE
    customer_id IN (
        SELECT
            customer_id
        FROM
            customers
        WHERE
            signup_date >= '2024-01-01'
    )
GROUP BY
    customer_id;

----------------------------------------
-- 複数レベルのグループ化
----------------------------------------
SELECT
    customer_id,
    DATE(order_date) AS order_day,
    SUM(amount) AS total_amount
FROM
    orders
GROUP BY
    customer_id,
    DATE(order_date);

----------------------------------------
-- 集計結果の結合
----------------------------------------
SELECT
    c.name AS customer_name,
    o.total_amount
FROM
    customers c
    JOIN (
        SELECT
            customer_id,
            SUM(amount) AS total_amount
        FROM
            orders
        GROUP BY
            customer_id
    ) o ON c.id = o.customer_id;

----------------------------------------
-- 集計関数とDISTINCTの組み合わせ
----------------------------------------
SELECT
    COUNT(DISTINCT email) AS unique_email_count
FROM
    users;