import express, { Request, Response } from "express";

// シンプルなExpressサーバーのセットアップ
const app = express();
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.post("/users", (req: Request, res: Response) => {
  const { name } = req.body;
  res.status(201).json({ id: 1, name });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

export default app;
