def add(a, b):
    return a + b

result = add(3, 5)

# デフォルト引数
def greet(name="Guest"):
    print(f"Hello, {name}")

# 可変長引数
def sum_all(*numbers):
    return sum(numbers)

# キーワード可変長引数
def show_info(**info):
    print(info)
