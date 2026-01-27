fruits = ["apple", "banana", "orange"]

fruits.append("grape")
fruits.insert(1, "lemon")
fruits.remove("banana")
fruits.pop()       # 最後を削除

print(fruits[0])   # インデックス参照
print(fruits[-1])  # マイナス指定で末尾

# list内包表記
lengths = [len(f) for f in fruits]
