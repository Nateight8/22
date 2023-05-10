import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.findFirst({ where: {} });
}
