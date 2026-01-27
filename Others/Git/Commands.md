### リモートリポジトリ clone してローカルリポジトリを作成する
```
git clone https://github.com/ユーザ名/リポジトリ名.git
```

### リモートリポジトリの変更内容を取り込む
```
git pull
```
pull = fetch + merge

## branch
### ブランチ一覧表示、現在のブランチ確認
```
git branch
```

### ブランチを作成する
```
git branch <ブランチ名>
```

## switch
### ブランチを切り替える
```
git switch <ブランチ名>
```

# ステージング関連
## add
### 変更をステージングエリアに追加する
```
git add -A
```

## restore
### add（ステージング）を取り消す
```
git restore --staged .
```

# コミット関連
## commit
### コミットする
```
git commit
```

### コメントつきコミット
```
git commit -m "コメント"
```

## reset
### コミットを取り消す（push前）
```
git reset HEAD~1
```

## revert
### コミットを取り消す（push後）
```
git revert <コミットID>
```

## status
### 前回のコミットからの変更点を表示する
```
git status
```

## push
### ローカルリポジトリの内容をリモートリポジトリに反映する
```
git push <リモート名> <ブランチ名>
```

## pull
### fetch して merge する
```
git pull <リモート名> <ブランチ名>
```

## fetch
### 他のユーザーが行った新しい作業を取得する(マージはしない)
```
git fetch <リモート名>
```



## merge
### 

### merge や pull の取り消し
```
git merge --abort
```

## checkout
### 


1. 🧩リモートリポジトリの URL をコピーする

GitHub→「Code」→ HTTPS → URLコピー

2. 🖥️リモートリポジトリを clone し、ローカルリポジトリ作成する

cloneしたいフォルダに移動して以下のコマンドを実行する
```bash
git clone https://github.com/company/project-x.git
```

🖥️ 2. ローカルリポジトリ作成（＝ clone）

# 公式リファレンス
[git-scm.com](https://git-scm.com/docs)
