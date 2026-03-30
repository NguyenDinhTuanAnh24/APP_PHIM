import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@gmail.com';
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email },
    update: {
      role: 'ADMIN',
    },
    create: {
      email,
      password_hash: hashedPassword,
      name: 'Admin User',
      role: 'ADMIN',
      loyalty_points: 0,
      loyalty_tier: 'Bạc',
      is_verified: true,
    },
  });

  console.log('✅ Admin user created/updated successfully:');
  console.log('Email:', admin.email);
  console.log('Password: admin123');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding admin user:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
