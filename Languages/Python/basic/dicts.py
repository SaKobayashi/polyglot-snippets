user = {"name": "Alice", "age": 25}

print(user["name"])
user["age"] = 30
user["email"] = "a@example.com"

# 辞書ループ
for key, value in user.items():
    print(key, value)
