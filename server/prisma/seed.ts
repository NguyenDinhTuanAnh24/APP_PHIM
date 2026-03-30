import { PrismaClient, MovieStatus, RoomType, SeatType, DiscountType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Clearing old data...');
  await prisma.bookingItem.deleteMany();
  await prisma.foodItem.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.seat.deleteMany();
  await prisma.showtime.deleteMany();
  await prisma.room.deleteMany();
  await prisma.cinema.deleteMany();
  await prisma.foodCombo.deleteMany();

  console.log('Seeding Cinemas and Rooms...');
  const cinemasConfig = [
    {
      name: "CGV Vincom Center Bà Triệu",
      address: "191 Bà Triệu, Hai Bà Trưng",
      city: "Hà Nội",
      lat: 21.0138, lng: 105.8492,
      rooms: [
        { name: "Phòng 1", type: RoomType.STANDARD, rows: 11, cols: 12 },
        { name: "Phòng 2", type: RoomType.STANDARD, rows: 11, cols: 12 },
        { name: "Phòng 3", type: RoomType.IMAX, rows: 12, cols: 14 }
      ]
    },
    {
      name: "Lotte Cinema Landmark 81",
      address: "772A Điện Biên Phủ, Bình Thạnh",
      city: "Hồ Chí Minh",
      lat: 10.7950, lng: 106.7220,
      rooms: [
        { name: "Phòng 1", type: RoomType.STANDARD, rows: 11, cols: 12 },
        { name: "Phòng 2", type: RoomType.STANDARD, rows: 11, cols: 12 },
        { name: "Phòng 3", type: RoomType.FOUR_DX, rows: 8, cols: 10 }
      ]
    },
    {
      name: "CGV Vincom Đà Nẵng",
      address: "910A Ngô Quyền, Sơn Trà",
      city: "Đà Nẵng",
      lat: 16.0544, lng: 108.2022,
      rooms: [
        { name: "Phòng 1", type: RoomType.STANDARD, rows: 11, cols: 12 },
        { name: "Phòng 2", type: RoomType.STANDARD, rows: 11, cols: 12 }
      ]
    },
    {
      name: "BHD Star Phạm Ngọc Thạch",
      address: "11 Phạm Ngọc Thạch, Đống Đa",
      city: "Hà Nội",
      lat: 21.0227, lng: 105.8412,
      rooms: [
        { name: "Phòng 1", type: RoomType.STANDARD, rows: 11, cols: 12 },
        { name: "Phòng 2", type: RoomType.IMAX, rows: 12, cols: 14 }
      ]
    },
    {
      name: "Galaxy Cinema Nguyễn Du",
      address: "116 Nguyễn Du, Quận 1",
      city: "Hồ Chí Minh",
      lat: 10.7769, lng: 106.6980,
      rooms: [
        { name: "Phòng 1", type: RoomType.STANDARD, rows: 11, cols: 12 },
        { name: "Phòng 2", type: RoomType.STANDARD, rows: 11, cols: 12 }
      ]
    }
  ];

  for (const c of cinemasConfig) {
    const cinema = await prisma.cinema.create({
      data: {
        name: c.name,
        address: c.address,
        city: c.city,
        lat: c.lat,
        lng: c.lng
      }
    });

    for (const r of c.rooms) {
      const room = await prisma.room.create({
        data: {
          cinema_id: cinema.id,
          name: r.name,
          type: r.type,
          total_rows: r.rows,
          total_cols: r.cols
        }
      });

      // SEED SECATS
      const seats = [];
      const rowLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      for (let i = 0; i < r.rows; i++) {
        const rowLabel = rowLabels[i];
        for (let j = 1; j <= r.cols; j++) {
          let seatType: SeatType = SeatType.STANDARD;

          if (rowLabel === 'K') {
            seatType = (j % 2 === 0) ? SeatType.COUPLE : SeatType.DISABLED;
          } else if (i >= 3 && i <= 9) {
            seatType = SeatType.VIP;
          } else if (i <= 2) {
            seatType = SeatType.STANDARD;
          } else {
            seatType = SeatType.STANDARD;
          }

          seats.push({
            room_id: room.id,
            row: rowLabel,
            col: j,
            type: seatType
          });
        }
      }
      await prisma.seat.createMany({ data: seats });
    }
  }

  console.log('Seeding Showtimes...');
  const movies = await prisma.movie.findMany({
    where: { status: MovieStatus.NOW_SHOWING }
  });

  if (movies.length > 0) {
    const rooms = await prisma.room.findMany();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const timeSlots = [
      { h: 10, m: 0 },
      { h: 13, m: 30 },
      { h: 16, m: 45 },
      { h: 19, m: 30 },
      { h: 21, m: 0 }
    ];

    const showtimes = [];

    for (const movie of movies) {
      for (const room of rooms) {
        for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
          for (let slotIdx = 0; slotIdx < timeSlots.length; slotIdx++) {
            const slot = timeSlots[slotIdx];
            
            const startTime = new Date(today);
            startTime.setDate(today.getDate() + dayOffset);
            startTime.setHours(slot.h, slot.m, 0, 0);

            const endTime = new Date(startTime);
            endTime.setMinutes(startTime.getMinutes() + movie.duration + 15);

            let price = 90000;
            let vipPrice = 120000;
            let couplePrice = 200000;
            let formatStr = "2D";

            if (room.type === RoomType.IMAX) {
              price = 130000;
              vipPrice = 160000;
              formatStr = "IMAX";
            } else if (room.type === RoomType.FOUR_DX) {
              price = 140000;
              vipPrice = 170000;
              formatStr = "4DX";
            }

            // Alternating languages
            const language = (dayOffset + slotIdx) % 2 === 0 ? "Vietsub" : "Lồng tiếng";

            showtimes.push({
              movie_id: movie.id,
              room_id: room.id,
              start_time: startTime,
              end_time: endTime,
              price: price,
              vip_price: vipPrice,
              couple_price: couplePrice,
              language: language,
              format: formatStr
            });
          }
        }
      }
    }
    await prisma.showtime.createMany({ data: showtimes });
  } else {
    console.log('No NOW_SHOWING movies found, skipping showtime seed.');
  }

  console.log('Seeding Food Combos...');
  const foodCombos = [
    {
      name: 'Bắp rang bơ lớn',
      description: '1 bắp lớn',
      price: 45000,
      image_url: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=400',
    },
    {
      name: 'Combo 1 người',
      description: '1 bắp vừa + 1 nước vừa',
      price: 69000,
      image_url: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400',
    },
    {
      name: 'Combo đôi',
      description: '2 bắp lớn + 2 nước lớn',
      price: 120000,
      image_url: 'https://images.unsplash.com/photo-1567608285969-48e4bbe0d399?w=400',
    },
    {
      name: 'Combo gia đình',
      description: '3 bắp + 3 nước',
      price: 165000,
      image_url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400',
    },
    {
      name: 'Nước ngọt lớn',
      description: '1 nước lớn',
      price: 35000,
      image_url: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400',
    },
  ];

  await prisma.foodCombo.createMany({ data: foodCombos });

  console.log('Seeding Vouchers...');
  const vouchers = [
    {
      code:           'WELCOME50',
      discount_type:  DiscountType.FIXED,
      discount_value: 50000,
      min_amount:     100000,
      max_discount:   null,
      usage_limit:    1000,
      description:    'Giảm 50.000đ cho đơn từ 100.000đ',
      expires_at:     new Date('2026-12-31'),
    },
    {
      code:           'SUMMER20',
      discount_type:  DiscountType.PERCENT,
      discount_value: 20,
      min_amount:     150000,
      max_discount:   100000,
      usage_limit:    500,
      description:    'Giảm 20% tối đa 100.000đ',
      expires_at:     new Date('2026-12-31'),
    },
    {
      code:           'VIP30',
      discount_type:  DiscountType.PERCENT,
      discount_value: 30,
      min_amount:     200000,
      max_discount:   150000,
      usage_limit:    200,
      description:    'Giảm 30% dành cho hạng Vàng trở lên',
      expires_at:     new Date('2026-12-31'),
    },
    {
      code:           'FREESHIP',
      discount_type:  DiscountType.FIXED,
      discount_value: 30000,
      min_amount:     0,
      max_discount:   null,
      usage_limit:    2000,
      description:    'Giảm 30.000đ không điều kiện',
      expires_at:     new Date('2026-06-30'),
    },
    {
      code:           'BIRTHDAY',
      discount_type:  DiscountType.PERCENT,
      discount_value: 15,
      min_amount:     0,
      max_discount:   200000,
      usage_limit:    10000,
      description:    'Quà sinh nhật giảm 15%',
      expires_at:     new Date('2026-12-31'),
    },
  ];

  for (const v of vouchers) {
    await prisma.voucher.upsert({
      where:  { code: v.code },
      update: v,
      create: v,
    });
    console.log('Seeded voucher:', v.code);
  }

  console.log('Seed completed!');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
