import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = await prisma.user.findMany();

const user = await prisma.user.create({
  data: { name: "Alice", email: "a@example.com" },
});
