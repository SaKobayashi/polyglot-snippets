// ==============================
// 二分探索
// ==============================
// 
function binarySearch(array, target) {
  let left = 0, right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) return mid;
    if (array[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// ==============================
// BFS（幅優先探索）
// ==============================
const H = grid.length;
const W = grid[0].length;
const dist = Array.from({ length: H }, () => Array(W).fill(-1));

const queue = [];
queue.push([0, 0]);
dist[0][0] = 0;

const dr = [1, -1, 0, 0];
const dc = [0, 0, 1, -1];

while (queue.length) {
  const [r, c] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];

    if (nr < 0 || nr >= H || nc < 0 || nc >= W) continue;
    if (grid[nr][nc] === '#') continue;
    if (dist[nr][nc] !== -1) continue;

    dist[nr][nc] = dist[r][c] + 1;
    queue.push([nr, nc]);
  }
}

// ==============================
// DFS（深さ優先探索）
// ==============================
const visited = Array.from({ length: H }, () => Array(W).fill(false));

function dfs(r, c) {
  if (visited[r][c]) return;
  visited[r][c] = true;

  const dr = [1, -1, 0, 0];
  const dc = [0, 0, 1, -1];

  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];
    if (nr < 0 || nr >= H || nc < 0 || nc >= W) continue;
    if (grid[nr][nc] === '#') continue;

    dfs(nr, nc);
  }
}

// ==============================
// ソートして前後を比較（隣接比較）
// ==============================
const arr = [3, 1, 4, 4, 2];
arr.sort((a, b) => a - b);

for (let i = 1; i < arr.length; i++) {
  if (arr[i] === arr[i - 1]) {
    console.log("重複:", arr[i]);
  }
}

// ==============================
// スライドウィンドウ（尺取り法）
// ==============================
function maxWindowSum(arr, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];

  let maxSum = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

// ==============================
// DP（動的計画法） の基本形
// ==============================
// フィボナッチ DP
const dp = Array(N + 1).fill(0);
dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

// 部分和 DP（基本形）
const dp = Array(S + 1).fill(false);
dp[0] = true;

for (const x of nums) {
  for (let s = S; s >= x; s--) {
    dp[s] = dp[s] || dp[s - x];
  }
}

// ==============================
// 累積和（Prefix Sum）
// ==============================
const A = [3, 1, 4, 5];
const S = Array(A.length + 1).fill(0);

for (let i = 0; i < A.length; i++) {
  S[i + 1] = S[i] + A[i];
}

// 区間 [l, r) の和
const sum = S[r] - S[l];

// ==============================
// ユークリッドの互除法（最大公約数）
// ==============================
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// ==============================
// ユークリッドの互除法（最小公倍数）
// ==============================
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// ==============================
// フィボナッチ数列（メモ化再帰）
// ==============================
const memo = {};
function fibonacci(n) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
}

// ==============================
// 素数判定（エラトステネスの篩）
// ==============================
function sieveOfEratosthenes(n) {
    const isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return isPrime;
}
// 使用例:
const primesUpTo100 = sieveOfEratosthenes(100);
console.log(primesUpTo100); // 素数かどうかの真偽値配列
// ==============================
// 最大公約数と最小公倍数の使用例
const a = 12;
const b = 18;
console.log(`GCD of ${a} and ${b} is ${gcd(a, b)}`); // 6
console.log(`LCM of ${a} and ${b} is ${lcm(a, b)}`); // 36
// ==============================
// フィボナッチ数列の使用例
const n = 10;
console.log(`Fibonacci of ${n} is ${fibonacci(n)}`); // 55
// ==============================
// 素数判定の使用例
const limit = 50;
const primeFlags = sieveOfEratosthenes(limit);
console.log(`Primes up to ${limit}:`);
for (let i = 0; i <= limit; i++) {
    if (primeFlags[i]) {
        console.log(i);
    }
}
