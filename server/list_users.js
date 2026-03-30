const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    take: 10,
    select: { email: true, role: true }
  });
  console.log('Registered Users:');
  users.forEach(u => console.log(`- ${u.email} (${u.role})`));
}

main().finally(() => prisma.$disconnect());
