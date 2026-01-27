type User = {
  id: number;
  name: string;
};

const res = await fetch("https://api.example.com/users/1");

if (!res.ok) {
  throw new Error(`HTTP error: ${res.status}`);
}

const user: User = await res.json();
console.log(user.name);

// APIからデータを取得する関数の例
async function fetchUser(userId: number): Promise<User> {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data: User = await response.json();
  return data;
}

const userData = await fetchUser(1);
console.log(userData);
export { fetchUser };
