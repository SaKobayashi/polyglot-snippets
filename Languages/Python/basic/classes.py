class Person:
    def __init__(self, name, age):  # コンストラクタ
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hi, I'm {self.name}")

# インスタンス生成
p = Person("Alice", 30)
p.greet()
