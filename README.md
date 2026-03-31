# App Phim (Movie Ticket)

Hệ thống đặt vé xem phim gồm 2 phần:

- `mobile/`: ứng dụng React Native (Expo Router)
- `server/`: API Node.js + Express + Prisma + MySQL + Redis

## Tính năng chính

- Đăng ký/đăng nhập Email + OTP xác thực
- Quên mật khẩu bằng OTP qua email
- Đăng nhập Google, liên kết Google trong hồ sơ
- Tìm kiếm phim, gợi ý phim/thể loại
- Đặt vé: chọn suất chiếu, ghế, combo, thanh toán VNPay
- Vé điện tử có QR, lịch sử vé
- Loyalty points, đổi điểm lấy voucher
- Trang Admin: dashboard, phim, suất chiếu, booking, user, hỗ trợ

## Công nghệ

- Mobile: Expo 54, React Native, TypeScript, Expo Router, TanStack Query, Zustand
- Server: Express, TypeScript, Prisma, MySQL, Redis, Nodemailer, Firebase Admin

## Cấu trúc thư mục

```text
.
├── mobile/
├── server/
├── backend/          # Tài nguyên/phần cũ (nếu có)
├── mobile-architecture.md
└── README.md
```

## 1) Chạy Server

### Yêu cầu

- Node.js 18+
- MySQL
- Redis

### Cài đặt

```bash
cd server
npm install
```

### Biến môi trường (`server/.env`)

Tạo file `server/.env` và cấu hình tối thiểu:

```env
PORT=3000

DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=app_phim_db
DATABASE_URL="mysql://root:@127.0.0.1:3306/app_phim_db"

REDIS_URL=redis://127.0.0.1:6379

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM="App Phim <your_email@gmail.com>"
APP_URL=https://movieticket.app

JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_ACCESS_EXPIRES=7d
JWT_REFRESH_EXPIRES=30d
BCRYPT_ROUNDS=12
OTP_EXPIRES_MINUTES=5
BIRTHDAY_BONUS_POINTS=100

TMDB_API_KEY=your_tmdb_key

VNPAY_TMN_CODE=your_tmn_code
VNPAY_HASH_SECRET=your_hash_secret
VNPAY_URL=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
VNPAY_RETURN_URL=http://<your-ip>:3000/api/payments/vnpay/return
VNPAY_IPN_URL=http://<your-ip>:3000/api/payments/vnpay/ipn

FIREBASE_SERVICE_ACCOUNT_PATH=./firebase-service-account.json
# hoặc FIREBASE_SERVICE_ACCOUNT_JSON=...
```

### Prisma

```bash
npx prisma db push
```

### Chạy dev

```bash
npm run dev
```

Server mặc định: `http://localhost:3000`

## 2) Chạy Mobile

### Cài đặt

```bash
cd mobile
npm install
```

### Biến môi trường (`mobile/.env`)

```env
EXPO_PUBLIC_API_URL=http://<your-ip>:3000/api
EXPO_PUBLIC_SOCKET_URL=http://<your-ip>:3000
```

Lưu ý: điện thoại/emulator phải truy cập được IP máy chạy server.

### Chạy app

```bash
npm run start
```

Hoặc:

```bash
npm run android
npm run ios
```

## Luồng quên mật khẩu

1. Ở màn `Đăng nhập`, bấm **Quên mật khẩu**
2. Nhập email để nhận OTP
3. Nhập OTP + mật khẩu mới + nhập lại mật khẩu
4. Xác nhận và quay về đăng nhập

Ghi chú: cooldown gửi lại OTP hiện tại là **10 giây**.

## Scripts

### Server

- `npm run dev`: chạy server với nodemon
- `npm run start`: chạy bằng ts-node
- `npm run db:seed`: seed dữ liệu mẫu

### Mobile

- `npm run start`
- `npm run android`
- `npm run ios`
- `npm run web`

## API chính

- Auth: `/api/auth/*`
- Movies: `/api/movies/*`
- Bookings: `/api/bookings/*`
- Payments: `/api/payments/*`
- Users/Profile: `/api/users/*`
- Points/Vouchers: `/api/points/*`, `/api/vouchers/*`
- Admin: `/api/admin/*`

## Lưu ý quan trọng

- Không commit file `.env` thật hoặc key bí mật.
- Google Sign-In yêu cầu cấu hình Firebase/OAuth đúng SHA.
- Thanh toán VNPay cần đúng URL callback/IP public hoặc LAN.
- Nếu thay đổi plugin native Expo, cần rebuild native app.
