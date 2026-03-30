export interface RedirectPageParams {
  success: boolean;
  message: string;
  subMessage?: string;
  deepLink: string;
  countdown?: number;  // mặc định 5 giây
}

export function buildRedirectPage(params: RedirectPageParams): string {
  const {
    success,
    message,
    subMessage = 'Ứng dụng sẽ tự động mở sau',
    deepLink,
    countdown = 5,
  } = params;

  const icon    = success ? '✅' : '❌';
  const color   = success ? '#10B981' : '#EF4444';
  const bgColor = success ? '#064E3B' : '#7F1D1D';

  return `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${message}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: -apple-system, BlinkMacSystemFont,
        'Segoe UI', sans-serif;
      background: #0A0A0A;
      color: #FFFFFF;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container {
      text-align: center;
      padding: 40px 24px;
      max-width: 360px;
      width: 100%;
    }

    .icon {
      font-size: 72px;
      margin-bottom: 24px;
      display: block;
    }

    .title {
      font-size: 24px;
      font-weight: 700;
      color: ${color};
      margin-bottom: 8px;
    }

    .subtitle {
      font-size: 14px;
      color: #9CA3AF;
      margin-bottom: 40px;
    }

    .countdown-box {
      background: #1A1A1A;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
    }

    .countdown-label {
      font-size: 13px;
      color: #6B7280;
      margin-bottom: 12px;
    }

    .countdown-number {
      font-size: 56px;
      font-weight: 700;
      color: ${color};
      line-height: 1;
      margin-bottom: 12px;
    }

    .progress-bar {
      height: 4px;
      background: #2A2A2A;
      border-radius: 2px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: ${color};
      border-radius: 2px;
      width: 100%;
      transition: width 1s linear;
    }

    .open-btn {
      display: block;
      background: ${color};
      color: #FFFFFF;
      text-decoration: none;
      padding: 16px 32px;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 12px;
      cursor: pointer;
      border: none;
      width: 100%;
    }

    .open-btn:active {
      opacity: 0.8;
    }

    .hint {
      font-size: 12px;
      color: #4B5563;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="container">
    <span class="icon">${icon}</span>
    <div class="title">${message}</div>
    <div class="subtitle">${subMessage}</div>

    <div class="countdown-box">
      <div class="countdown-label">Tự động mở App Phim sau</div>
      <div class="countdown-number" id="count">${countdown}</div>
      <div class="progress-bar">
        <div class="progress-fill" id="progress"></div>
      </div>
    </div>

    <button onclick="openApp()" class="open-btn">
      Mở App Phim ngay
    </button>

    <div class="hint">
      Nếu app không tự mở, hãy bấm nút bên trên<br>
      hoặc quay lại app và kiểm tra vé của bạn
    </div>
  </div>

  <script>
    const deepLink   = '${deepLink}';
    const total      = ${countdown};
    let   remaining  = total;

    const countEl    = document.getElementById('count');
    const progressEl = document.getElementById('progress');

    // Tạo Android Intent URL
    function getIntentUrl(url) {
      const withoutScheme = url.replace('movieticket://', '');
      return 'intent://' + withoutScheme +
        '#Intent;scheme=movieticket;' +
        'package=com.movieticket.mobile;' +
        'S.browser_fallback_url=about:blank;end';
    }

    function openApp() {
      const isAndroid = /Android/i.test(navigator.userAgent);

      if (isAndroid) {
        // Android: dùng Intent URL
        window.location.href = getIntentUrl(deepLink);
      } else {
        // iOS: dùng scheme thường
        window.location.href = deepLink;
      }
    }

    // Cập nhật progress bar
    function updateProgress() {
      const pct = (remaining / total) * 100;
      progressEl.style.width = pct + '%';
    }

    // Thử mở deep link ngay lập tức
    setTimeout(openApp, 500);
    updateProgress();

    // Đếm ngược mỗi giây
    const timer = setInterval(() => {
      remaining--;
      countEl.textContent = remaining;
      updateProgress();

      if (remaining <= 0) {
        clearInterval(timer);
        // Thử mở lại lần cuối
        openApp();
      }
    }, 1000);

    // Nếu app đã mở (page bị blur) → dừng đếm
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearInterval(timer);
      }
    });
  </script>
</body>
</html>
  `;
}
