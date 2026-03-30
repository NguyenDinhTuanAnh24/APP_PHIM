const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function syncLoyalty() {
  const users = await prisma.user.findMany();

  for (const user of users) {
    // Tính điểm thật từ LoyaltyLog
    const logs = await prisma.loyaltyLog.aggregate({
      where: { user_id: user.id },
      _sum: { points: true }
    });

    const realPoints = Math.max(0, logs._sum.points ?? 0);

    // Tính tier theo điểm thật
    let tier = 'Đồng';
    if (realPoints >= 10000)     tier = 'Kim cương';
    else if (realPoints >= 5000) tier = 'Vàng';
    else if (realPoints >= 1000) tier = 'Bạc';

    // Cập nhật DB
    await prisma.user.update({
      where: { id: user.id },
      data: {
        loyalty_points: realPoints,
        loyalty_tier:   tier,
      }
    });

    console.log(
      'Updated:', user.email,
      '| Points:', realPoints,
      '| Tier:', tier
    );
  }

  console.log('Done syncing!');
  await prisma.$disconnect();
}

syncLoyalty().catch(console.error);
