# Panda City - GTA5 FiveM Server Website

Chào mừng đến với website chính thức của **Panda City** - Server GTA5 FiveM Roleplay hàng đầu Việt Nam!

## 🎮 Về Panda City

Panda City là một server GTA5 FiveM chuyên về Roleplay (RP) với:
- **Cộng đồng thân thiện**: Hơn 1500 thành viên tích cực
- **Luật chơi rõ ràng**: Hệ thống luật công bằng và minh bạch
- **Roleplay chất lượng**: Trải nghiệm RP chân thực và đa dạng
- **Hỗ trợ 24/7**: Đội ngũ admin luôn sẵn sàng hỗ trợ

## 🌟 Tính năng Website

### 🎨 Thiết kế
- **Giao diện hiện đại**: Phong cách gaming với tông màu đen, đỏ, trắng
- **Responsive**: Tối ưu cho mọi thiết bị (PC, tablet, mobile)
- **Tốc độ nhanh**: Optimized cho performance tốt nhất
- **SEO friendly**: Tối ưu cho công cụ tìm kiếm

### 📱 Các trang chính
- **Trang chủ**: Banner hero với logo và call-to-action
- **Giới thiệu**: Thông tin chi tiết về server
- **Hướng dẫn**: Cách tham gia server từ A-Z
- **Tải Launcher**: Download launcher chính thức
- **Tin tức**: Hệ thống quản lý tin tức và sự kiện
- **Liên hệ**: Thông tin Discord, Fanpage và hỗ trợ

### ⚡ Tính năng kỹ thuật
- **Smooth scrolling**: Di chuyển mượt mà giữa các section
- **Lazy loading**: Tối ưu tải hình ảnh
- **Progressive Web App**: Hỗ trợ PWA
- **Mobile menu**: Menu responsive cho mobile
- **Animation**: Hiệu ứng động hấp dẫn
- **Counter animation**: Số liệu thống kê động

## 🚀 Cài đặt và Sử dụng

### Yêu cầu hệ thống
- Web server (Apache/Nginx)
- PHP 7.4+ (nếu sử dụng backend)
- Modern browser support
- HTTPS SSL certificate

### Cài đặt
1. **Clone repository**:
   ```bash
   git clone https://github.com/pandacity/website.git
   cd website
   ```

2. **Upload files**:
   - Upload tất cả files lên web server
   - Đảm bảo folder có quyền read/write

3. **Cấu hình**:
   - Cập nhật thông tin server trong `js/main.js`
   - Chỉnh sửa links Discord, Facebook trong `index.html`
   - Thay đổi domain trong meta tags

### Quản lý tin tức
1. **Truy cập admin panel**:
   ```
   https://yourdomainn.com/news/admin.html
   ```

2. **Thêm tin tức mới**:
   - Điền form thông tin tin tức
   - Chọn danh mục và tác giả
   - Thêm tags để dễ tìm kiếm
   - Đánh dấu "Nổi bật" nếu cần

3. **Quản lý tin tức**:
   - Sửa/xóa tin tức hiện có
   - Sắp xếp theo danh mục
   - Export/import dữ liệu

## 📁 Cấu trúc Project

```
Webpandacity/
├── index.html              # Trang chủ chính
├── css/
│   └── style.css           # CSS chính với responsive design
├── js/
│   └── main.js             # JavaScript cho tương tác
├── images/                 # Thư mục hình ảnh
│   ├── logo/              # Logo và favicon
│   ├── screenshots/       # Ảnh chụp màn hình game
│   └── events/            # Ảnh sự kiện
├── news/
│   ├── admin.html         # Trang quản lý tin tức
│   └── news-data.json     # Dữ liệu tin tức
└── README.md              # File hướng dẫn này
```

## 🎯 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa CSS variables trong `css/style.css`:
```css
:root {
    --primary-red: #e31e24;
    --red-hover: #c41e3a;
    --primary-black: #0a0a0a;
    --secondary-black: #1a1a1a;
    /* ... */
}
```

### Cập nhật thông tin server
Trong `js/main.js`, tìm và sửa:
```javascript
const serverInfo = {
    ip: "connect.pandacity.vn",
    maxPlayers: 300,
    discordLink: "https://discord.gg/pandacity",
    facebookLink: "https://facebook.com/pandacity"
};
```

### Thêm section mới
1. Thêm HTML section trong `index.html`
2. Thêm CSS styling trong `css/style.css`
3. Thêm navigation link trong navbar
4. Cập nhật smooth scrolling trong `js/main.js`

## 🔧 Tối ưu Performance

### Hình ảnh
- Sử dụng WebP format khi có thể
- Optimize kích thước và quality
- Implement lazy loading
- Sử dụng responsive images

### CSS/JS
- Minify CSS và JavaScript
- Sử dụng CDN cho libraries
- Enable GZIP compression
- Optimize loading order

### Caching
- Set cache headers cho static files
- Use browser caching
- Implement service worker
- CDN integration

## 📱 Mobile Optimization

Website được thiết kế mobile-first với:
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

- **Touch-friendly**:
  - Button size tối thiểu 44px
  - Easy navigation
  - Swipe gestures support

## 🔒 Bảo mật

### HTTPS
- **Bắt buộc SSL**: Redirect HTTP sang HTTPS
- **Security headers**: CSP, HSTS, X-Frame-Options
- **Safe forms**: CSRF protection cho admin panel

### Content Security
- **Input validation**: Sanitize user input
- **XSS protection**: Escape output
- **File upload**: Restrict file types

## 🌐 SEO & Analytics

### SEO
- **Meta tags**: Title, description, keywords
- **Open Graph**: Social media optimization
- **Structured data**: Schema.org markup
- **Sitemap**: XML sitemap generation

### Analytics
- **Google Analytics**: User tracking
- **Event tracking**: Button clicks, downloads
- **Performance monitoring**: Core Web Vitals

## 🚀 Deployment

### Shared Hosting
1. Upload files via FTP/File Manager
2. Set proper file permissions
3. Configure .htaccess if needed

### VPS/Dedicated Server
1. Set up web server (Apache/Nginx)
2. Configure SSL certificate
3. Set up backup system
4. Monitor performance

### CDN Setup
1. Configure CloudFlare/AWS CloudFront
2. Set up cache rules
3. Optimize image delivery
4. Enable compression

## 🆘 Hỗ trợ

### Thường gặp
- **Website không load**: Kiểm tra SSL certificate
- **Menu mobile không hoạt động**: Clear browser cache
- **Tin tức không hiển thị**: Kiểm tra JSON format
- **Performance chậm**: Optimize images và enable caching

### Liên hệ hỗ trợ
- **Email**: admin@pandacity.vn
- **Discord**: [Panda City Support](https://discord.gg/pandacity)
- **Facebook**: [Panda City Fanpage](https://facebook.com/pandacity)

## 📄 Bản quyền

© 2025 Panda City – GTA5 FiveM Server. All rights reserved.

**Lưu ý**: Website này không liên kết với Rockstar Games hoặc Take-Two Interactive.

---

**Phát triển bởi**: Panda City Development Team  
**Phiên bản**: 1.0.0  
**Cập nhật cuối**: January 2025
