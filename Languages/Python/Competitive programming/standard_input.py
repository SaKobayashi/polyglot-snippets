import sys

# ==============================
# 標準入力の受け取り
# ==============================
lines = sys.stdin.read().strip().split("\n")

# n行の入力
n = int(input())
items = [input().split() for _ in range(n)]
nums = [int(input()) for _ in range(n)]

# n行を1行ずつ読みながら処理
n = int(input())
for _ in range(n):
    line = input().strip()
    # ここで集計や判定をする

# サイズ5のグリッドを2次元配列で持つ
H, W = map(int, input().split())
grid = [list(input().strip()) for _ in range(H)]

# 


# ==============================
# 入力データの処理例
# ==============================

# 処理例1（全行を表示）
for index, line in enumerate(lines):
    print(f"Line {index + 1}: {line}")

# 処理例2（1行目を数値配列として処理）
first_line_numbers = list(map(int, lines[0].split()))
print(f"First line numbers: {first_line_numbers}")

# 処理例3（複数行の構造データ処理）
index = 0
N, W, H = map(int, lines[index].split())
index += 1

for i in range(N):
    values = list(map(int, lines[index].split()))
    index += 1
    print(f"Values for line {i + 1}: {values}")
