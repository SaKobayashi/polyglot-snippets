# リポジトリ取得関連
## clone
### リモートリポジトリ clone してローカルリポジトリを作成する
```
git clone https://github.com/ユーザ名/リポジトリ名.git
```

# 状態確認関連
## status
### 作業ツリーとステージングの状態を表示する
```
git status
```

# ブランチ関連
## branch
### ローカルブランチ一覧を表示する
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

### ブランチを作成して切り替える
```
git switch -c <ブランチ名>
```

---
# ステージング関連
## add
### すべての変更をステージングエリアに追加する
```
git add -A
```

### 変更を確認しながら一部だけステージングする
```
git add -p
```

## restore
### add（ステージング）を取り消す
```
git restore --staged .
```

---
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
### 直前のコミットを取り消し、変更は残す（push前）
```
git reset HEAD~1
```

## revert
### コミットを取り消す（push後）
```
git revert <コミットID>
```

---
# リモート関連
## push
### ローカルリポジトリの内容をリモートリポジトリに反映する
```
git push <リモート名> <ブランチ名>
```

## pull
### 取得（fetch）して統合（merge）する
```
git pull <リモート名> <ブランチ名>
```

## fetch
### リモートの更新を取得する（マージはしない）
```
git fetch <リモート名>
```

---
# 公式リファレンス
[git-scm.com](https://git-scm.com/docs)
