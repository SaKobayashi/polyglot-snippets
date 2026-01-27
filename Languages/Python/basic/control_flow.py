# ==============================
# 分岐処理(if, switch)
# ==============================
# 条件分岐(if-else)
score = 85
if score >= 90:
    print("Excellent!")
elif score >= 70:
    print("Good!")
else:
    print("Try harder!")

# if文の短縮形（bool 代入）
passed = score >= 60

# 短縮形のif文
if passed:
    print("You passed!")

# 条件分岐(switch) → Python 3.10+ の match-case
command = "start"
match command:
    case "start":
        print("Starting...")
    case "stop":
        print("Stopping...")
    case _:
        print("Unknown command")

# 三項演算子
# 真の場合の値 if 条件式 else 偽の場合の値
is_even = "Even" if score % 2 == 0 else "Odd"


# ==============================
# 反復処理(for)
# ==============================

# for
for i in range(5):
    print(f"i = {i}")  # i = 0, 1, 2, 3, 4

# for-of（配列ループ）
items = ["apple", "banana", "orange"]
for item in items:
    print(item)  # apple, banana, orange

# ==============================
# よく使用される条件式
# ==============================

# 配列のサイズ分ループ 1
for i in range(len(items)):
    print(items[i])  # apple, banana, orange

# 配列のサイズ分ループ 2（同じ結果になる別表現）
for i in range(len(items)):
    if i + 1 <= len(items):
        print(items[i])

# 逆順ループ
for i in range(len(items) - 1, -1, -1):
    print(items[i])  # orange, banana, apple

# n個おきにループ
step = 2
for i in range(0, len(items), step):
    print(items[i])  # apple, orange

# 早期終了（limit件まで）
limit = 2
for i, item in enumerate(items):
    if i >= limit:
        break
    print(item)  # apple, banana


# ==============================
# 反復処理を使ったアルゴリズム
# ==============================

numbers = [10, 20, 30, 40, 50]

# 配列の合計値を求める
sum_value = 0
for num in numbers:
    sum_value += num
print(f"Sum: {sum_value}")  # Sum: 150

# 配列の最大値を求める
max_value = numbers[0]
for num in numbers:
    if num > max_value:
        max_value = num
print(f"Max: {max_value}")  # Max: 50

# 配列の最小値を求める
min_value = numbers[0]
for num in numbers:
    if num < min_value:
        min_value = num
print(f"Min: {min_value}")  # Min: 10

# 約数を求める
number = 36
for i in range(1, int(number ** 0.5) + 1):
    if number % i == 0:
        print(i)  # 1, 2, 3, 4, 6


# 素数判定
def check_prime(n: int) -> bool:
    if n <= 1:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

print(f"Is 29 prime? {check_prime(29)}")  # True
print(f"Is 30 prime? {check_prime(30)}")  # False


# フィボナッチ数列
def fibonacci(n: int) -> list[int]:
    if n <= 0:
        return []
    if n == 1:
        return [0]

    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i - 1] + fib[i - 2])
    return fib

print(f"Fibonacci sequence (10 terms): {fibonacci(10)}")


# 回文判定
def is_palindrome(s: str) -> bool:
    length = len(s)
    for i in range(length // 2):
        if s[i] != s[length - 1 - i]:
            return False
    return True

print(f'Is "racecar" a palindrome? {is_palindrome("racecar")}')  # True
print(f'Is "hello" a palindrome? {is_palindrome("hello")}')      # False


# 素因数分解
def prime_factorization(n: int) -> list[int]:
    factors = []
    i = 2
    while i * i <= n:
        while n % i == 0:
            factors.append(i)
            n //= i
        i += 1
    if n > 1:
        factors.append(n)
    return factors

print(f"Prime factorization of 60: {prime_factorization(60)}")
print(f"Prime factorization of 97: {prime_factorization(97)}")
