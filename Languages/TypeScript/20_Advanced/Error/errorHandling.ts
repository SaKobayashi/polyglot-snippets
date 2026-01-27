// エラーハンドリングの基本
try {
  await riskyOperation();
} catch (err) {
  if (err instanceof Error) {
    console.error(err.message);
  }
}

// カスタムエラー
class AppError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

throw new AppError(404, "User not found");

// Express.js のエラーハンドリングミドルウェア例
import express from "express";
const app = express();
app.use((err: Error, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});
