const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const email = 'admin@gmail.com';
  const password = await bcrypt.hash('admin123', 10);
  
  const user = await prisma.user.upsert({
    where: { email },
    update: { role: 'ADMIN' },
    create: {
      email,
      password,
      name: 'Admin User',
      role: 'ADMIN',
      loyalty_points: 0,
      loyalty_tier: 'Bạc'
    }
  });

  console.log('Admin user created/updated:', user.email);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
