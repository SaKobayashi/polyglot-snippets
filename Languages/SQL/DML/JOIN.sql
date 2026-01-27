----------------------------------------
-- テーブル結合（JOIN）
----------------------------------------
-- 内部結合（INNER JOIN）
SELECT
    orders.id,
    customers.name,
    orders.amount
FROM
    orders
    INNER JOIN customers ON orders.customer_id = customers.id;

-- 左外部結合（LEFT JOIN）
SELECT
    orders.id,
    customers.name,
    orders.amount
FROM
    orders
    LEFT JOIN customers ON orders.customer_id = customers.id;

-- 右外部結合（RIGHT JOIN）
SELECT
    orders.id,
    customers.name,
    orders.amount
FROM
    orders
    RIGHT JOIN customers ON orders.customer_id = customers.id;

-- 完全外部結合（FULL JOIN）
SELECT
    orders.id,
    customers.name,
    orders.amount
FROM
    orders FULL
    JOIN customers ON orders.customer_id = customers.id;

-- 自己結合（SELF JOIN）
SELECT
    A.id AS OrderID_A,
    B.id AS OrderID_B,
    A.amount AS Amount_A,
    B.amount AS Amount_B
FROM
    orders A
    JOIN orders B ON A.customer_id = B.customer_id
    AND A.id <> B.id;

-- クロス結合（CROSS JOIN）
SELECT
    customers.name,
    Products.product_name
FROM
    customers
    CROSS JOIN Products;

-- 結合条件に基づくフィルタリング（JOIN with WHERE）
SELECT
    orders.id,
    customers.name,
    orders.amount
FROM
    orders
    JOIN customers ON orders.customer_id = customers.id
WHERE
    orders.amount > 100;

-- 複数テーブルの結合
SELECT
    orders.id,
    customers.name,
    Products.product_name,
    orders.amount
FROM
    orders
    JOIN customers ON orders.customer_id = customers.id
    JOIN Products ON orders.product_id = Products.id;

-- 結合結果の集計
SELECT
    customers.name,
    SUM(orders.amount) AS TotalAmount
FROM
    orders
    JOIN customers ON orders.customer_id = customers.id
GROUP BY
    customers.name;

-- 結合結果のソート
SELECT
    orders.id,
    customers.name,
    orders.amount
FROM
    orders
    JOIN customers ON orders.customer_id = customers.id
ORDER BY
    orders.amount DESC;