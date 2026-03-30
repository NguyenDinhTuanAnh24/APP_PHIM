import { PrismaClient, DiscountType } from '../src/generated/client';


const prisma = new PrismaClient();

async function seed() {
    console.log('🌱 Đang nạp dữ liệu Voucher...');

    const vouchers = [
        {
            code: 'WELCOME50',
            discount_type: DiscountType.FIXED,
            discount_value: 50000,
            min_amount: 100000,
            max_discount: null,
            usage_limit: 1000,
            description: 'Giảm 50k cho đơn từ 100k (Dành cho thành viên mới)',
            expires_at: new Date('2026-12-31'),
        },
        {
            code: 'PHIMMOI20',
            discount_type: DiscountType.PERCENT,
            discount_value: 20,
            min_amount: 150000,
            max_discount: 100000,
            usage_limit: 500,
            description: 'Giảm 20% (tối đa 100k) cho đơn từ 150k',
            expires_at: new Date('2026-06-30'),
        },
        {
            code: 'ALLFREE30',
            discount_type: DiscountType.FIXED,
            discount_value: 30000,
            min_amount: 0,
            max_discount: null,
            usage_limit: 2000,
            description: 'Giảm 30k không điều kiện (Tri ân khách hàng)',
            expires_at: new Date('2026-12-31'),
        },
        {
            code: 'SUMMER_SALE',
            discount_type: DiscountType.PERCENT,
            discount_value: 15,
            min_amount: 200000,
            max_discount: 50000,
            usage_limit: 1000,
            description: 'Ưu đãi hè: Giảm 15% tối đa 50k cho đơn từ 200k',
            expires_at: new Date('2026-08-31'),
        },
        {
            code: 'VIP_ONLY',
            discount_type: DiscountType.PERCENT,
            discount_value: 30,
            min_amount: 300000,
            max_discount: 200000,
            usage_limit: 100,
            description: 'Đặc quyền VIP: Giảm tới 200k cho đơn trên 300k',
            expires_at: new Date('2026-12-31'),
        },
    ];

    for (const v of vouchers) {
        await prisma.voucher.upsert({
            where: { code: v.code },
            update: v,
            create: v,
        });
        console.log(`✅ Đã thêm/cập nhật voucher: ${v.code}`);
    }

    console.log('✨ Hoàn tất nạp voucher!');
    await prisma.$disconnect();
}

seed().catch((e) => {
    console.error(e);
    process.exit(1);
});
