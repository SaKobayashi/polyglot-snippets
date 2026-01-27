# 作業の流れ
## 0. 作業元ブランチに切り替えて最新化
```
git switch main
git pull
```

## 1. 作業ブランチを作成する
```
git branch <ブランチ名>
```

## 2. 作業ブランチに切り替える
```
git switch <ブランチ名>
```

## 3. 作業する

## 4. 作業内容をステージングに上げる
```
git add -A
```

## 5. コミットする
```
git commit -m "コメント"
```

## 6. リモートリポジトリにpushする
```
git push <リモート名> <ブランチ名>
```

## 7. GitHub などで Pull Request を作成する

# 日を跨いだりして、他の作業者の作業内容をマージしたいとき
## Pull(fetch + merge)する
```
git pull <リモート名> <ブランチ名>
```

## fetchのみする
```
git fetch <リモート名>
```

