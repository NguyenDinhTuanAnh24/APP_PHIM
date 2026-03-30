# Movie Ticket

Ứng dụng đặt vé xem phim gồm:

- `mobile/`: App React Native (Expo Router)
- `server/`: API Node.js + Express + Prisma + MySQL

## Tính năng chính

- Đăng ký/đăng nhập bằng Email và Google
- Liên kết tài khoản Google theo đúng email
- Đặt vé: chọn suất chiếu, ghế, combo, checkout
- Voucher + đổi điểm lấy voucher cá nhân
- Lịch sử vé, lịch sử tích điểm, hồ sơ người dùng
- Email thông báo: OTP, quên mật khẩu, hỗ trợ, sinh nhật, chào mừng Google signup

## Công nghệ

- Mobile: Expo, React Native, TypeScript, TanStack Query, Zustand
- Backend: Express, TypeScript, Prisma, MySQL, Firebase Admin, Nodemailer

## Yêu cầu môi trường

- Node.js 18+
- npm 9+
- MySQL
- (Android dev) Android SDK + emulator/device

## 1) Cài đặt backend

```bash
cd server
npm install
```

Tạo file `.env` trong `server/` (ví dụ tối thiểu):

```env
PORT=3000

JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_ACCESS_EXPIRES=1d
JWT_REFRESH_EXPIRES=7d
BCRYPT_ROUNDS=10
OTP_EXPIRES_MINUTES=5

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM="Movie Ticket <your_email@gmail.com>"
APP_URL=https://movieticket.app

TMDB_API_KEY=your_tmdb_api_key

VNPAY_TMN_CODE=your_vnpay_tmn_code
VNPAY_HASH_SECRET=your_vnpay_hash_secret
VNPAY_URL=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
VNPAY_RETURN_URL=http://localhost:3000/api/payments/vnpay-return

FIREBASE_SERVICE_ACCOUNT_PATH=./firebase-service-account.json
```

> Cần cấu hình thêm `DATABASE_URL` trong Prisma theo môi trường MySQL của bạn.

Chạy migration/push schema (tùy cách bạn dùng):

```bash
npx prisma db push
```

Chạy backend:

```bash
npm run dev
```

Backend mặc định chạy ở `http://0.0.0.0:3000`.

## 2) Cài đặt mobile

```bash
cd mobile
npm install
```

Cập nhật API base URL trong:

- `mobile/constants/index.ts`

Đảm bảo trỏ về IP máy chạy backend (ví dụ cùng Wi-Fi):

```ts
export const API_URL = 'http://192.168.x.x:3000/api';
```

Chạy app:

```bash
npx expo start --clear
```

Hoặc:

```bash
npm run android
```

## Google Sign-In (Android)

- Package: `com.movieticket.mobile`
- Đặt `google-services.json` tại:
  - `mobile/google-services.json` (Expo plugin dùng)
  - và native nếu cần rebuild
- Trong Firebase Console:
  - thêm SHA-1 debug/release
  - tạo đúng OAuth client
- Backend verify bằng Firebase ID token (không dùng trực tiếp Google OAuth token).

## API chính

- Auth: `/api/auth/*`
- Users: `/api/users/*`
- Movies/Cinemas/Showtimes: `/api/movies`, `/api/cinemas`, `/api/showtimes`
- Bookings/Payments: `/api/bookings`, `/api/payments`
- Vouchers: `/api/vouchers`
- Point redemption: `/api/points`
  - `GET /packages`
  - `POST /redeem`
  - `GET /my-vouchers`
  - `GET /history`

## Hướng dẫn sử dụng app

### Luồng User (khách hàng)

#### 1) Đăng ký / đăng nhập

- Mở app và chọn **Đăng ký** hoặc **Đăng nhập**.
- Có thể dùng:
  - Email + mật khẩu
  - Google Sign-In
- Nếu đăng ký bằng email, hệ thống có thể yêu cầu OTP email để xác thực.

#### 2) Tìm phim và chọn suất chiếu

- Tại tab **Trang chủ** hoặc **Tìm kiếm**, chọn phim muốn xem.
- Xem thông tin phim, sau đó bấm **Đặt vé**.
- Chọn ngày, rạp, phòng và suất chiếu phù hợp.

#### 3) Chọn ghế, combo và thanh toán

- Chọn ghế trong màn hình sơ đồ ghế.
- Thêm combo đồ ăn (nếu cần).
- Tại checkout:
  - Áp dụng voucher khả dụng
  - Chọn phương thức thanh toán
  - Xác nhận thanh toán

#### 4) Xem vé sau khi đặt

- Sau thanh toán thành công, app hiển thị mã QR vé.
- Có thể vào tab **Vé của tôi** để xem lại vé đã mua.

#### 5) Đổi điểm lấy voucher

- Vào **Profile** → **Đổi điểm lấy Voucher**.
- Chọn gói điểm đủ điều kiện, xác nhận đổi.
- Voucher đổi điểm sẽ xuất hiện ở mục **Voucher của tôi** và dùng được khi checkout.

#### 6) Liên kết Google trong Profile

- Tài khoản tạo bằng Google: ẩn mục liên kết Google.
- Tài khoản email thường: có thể liên kết Google trong Profile.
- Chỉ liên kết thành công khi email Google trùng email tài khoản.

#### 7) Hỗ trợ khách hàng

- Vào **Profile** → **Hỗ trợ & Liên hệ** để gửi yêu cầu.
- Hệ thống gửi email xác nhận đã tiếp nhận yêu cầu.
- Khi có phản hồi từ admin, bạn sẽ nhận email thông báo.

### Luồng Admin (quản trị)

Admin thao tác qua các API dưới `/api/admin` (yêu cầu tài khoản có quyền admin):

#### 1) Dashboard

- Xem thống kê tổng quan:
  - doanh thu
  - số vé
  - số người dùng
  - booking gần đây

#### 2) Quản lý phim

- Tạo phim mới
- Cập nhật thông tin phim
- Xóa phim

#### 3) Quản lý suất chiếu

- Tạo suất chiếu
- Cập nhật suất chiếu
- Xóa suất chiếu

#### 4) Quản lý booking

- Xem danh sách booking
- Xem chi tiết booking
- Cập nhật trạng thái booking

#### 5) Quản lý người dùng

- Xem danh sách user
- Xem chi tiết user
- Khóa/mở (ban) user

#### 6) Quản lý hỗ trợ

- Xem danh sách ticket hỗ trợ
- Trả lời ticket của khách hàng
- Hệ thống tự gửi email phản hồi đến user

## Scripts

### Server

- `npm run dev`: chạy dev với nodemon
- `npm run start`: chạy bằng ts-node
- `npm run db:seed`: seed dữ liệu

### Mobile

- `npm run start`
- `npm run android`
- `npm run ios`
- `npm run web`

## Lưu ý

- Dự án có gửi email tự động, cần SMTP hợp lệ.
- Một số tính năng (Google Sign-In/Firebase, VNPay) yêu cầu cấu hình credentials thật.
- Khi thay đổi plugin native trong Expo (`app.json`), cần rebuild app native.
