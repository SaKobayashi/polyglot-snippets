----------------------------------------
-- AND条件
----------------------------------------
SELECT
    *
FROM
    orders
WHERE
    amount > 100
    AND status = 'completed';

----------------------------------------
-- OR条件
----------------------------------------
SELECT
    *
FROM
    orders
WHERE
    amount > 100
    OR status = 'pending';

----------------------------------------
-- NOT条件
----------------------------------------
SELECT
    *
FROM
    orders
WHERE
    NOT status = 'canceled';

----------------------------------------
-- 複合条件
----------------------------------------
SELECT
    *
FROM
    orders
WHERE
    (
        amount > 100
        AND status = 'completed'
    )
    OR (
        amount <= 100
        AND status = 'pending'
    );

----------------------------------------
-- IN条件
----------------------------------------
SELECT
    *
FROM
    orders
WHERE
    status IN ('completed', 'pending');

----------------------------------------
-- BETWEEN条件
----------------------------------------
SELECT
    *
FROM
    orders
WHERE
    amount BETWEEN 50
    AND 150;

----------------------------------------
-- LIKE条件
----------------------------------------
SELECT
    *
FROM
    customers
WHERE
    name LIKE 'A%';

----------------------------------------
-- IS NULL条件
----------------------------------------
SELECT
    *
FROM
    customers
WHERE
    email IS NULL;

----------------------------------------
-- IS NOT NULL条件
----------------------------------------
SELECT
    *
FROM
    customers
WHERE
    email IS NOT NULL;

----------------------------------------
-- 複数条件の組み合わせ
----------------------------------------
SELECT
    *
FROM
    orders
WHERE
    (
        amount > 100
        OR status = 'pending'
    )
    AND customer_id = 1;

----------------------------------------
-- 優先順位の明示的な指定
----------------------------------------
SELECT
    *
FROM
    orders
WHERE
    amount > 100
    AND (
        status = 'completed'
        OR status = 'pending'
    );

----------------------------------------
-- 条件付き集計
----------------------------------------
SELECT
    customer_id,
    SUM(amount) AS total_amount
FROM
    orders
WHERE
    status = 'completed'
GROUP BY
    customer_id;