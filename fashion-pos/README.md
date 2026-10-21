# 👗 Thời Trang POS — Phần mềm bán hàng thời trang

Phần mềm bán hàng cho shop **quần áo, giày dép, phụ kiện** dành cho **sơ sinh, trẻ em, thanh thiếu niên, người lớn**.
Chạy trên **iPhone, iPad, Android, máy tính bảng, PC Windows / Mac / Linux** (dạng PWA: cài như app, dùng được khi mất mạng).

## Tính năng
| Nhóm | Chi tiết |
|---|---|
| **Đăng nhập & bảo mật** | Tài khoản + mật khẩu (mã hóa PBKDF2-SHA256, không lưu mật khẩu gốc), khóa 30 giây sau 5 lần sai, tự khóa màn hình khi không dùng, bắt nhân viên đổi mật khẩu tạm |
| **Phân quyền** | **Quản lý**: toàn quyền. **Nhân viên**: bán hàng, xem đơn, khách hàng, xem tồn kho |
| **Bán hàng** | Lọc theo nhóm tuổi / danh mục, tìm không dấu, **quét mã vạch** (máy quét USB/Bluetooth), chọn size + màu theo tồn kho, giảm giá %/đ, F2 tìm, F9 thanh toán |
| **Thanh toán** | Tiền mặt (gợi ý tiền khách đưa, tiền thối), **chuyển khoản mã QR VietQR** (tạo ngay trên máy), thẻ/POS. In hóa đơn 80mm |
| **Sản phẩm** | Ảnh (chụp/chọn từ máy), mã SP tự sinh, giá bán/giá vốn, **size mẫu** (sơ sinh theo tháng, trẻ em theo tuổi, chữ S–XXL, quần số, giày 16–44), màu sắc, **tồn kho theo từng size × màu** |
| **Đơn hàng** | Tra cứu, in lại, **trả hàng** (cộng lại tồn kho, hoàn tiền theo tỷ lệ giảm giá) |
| **Khách hàng** | Tích điểm, tổng chi tiêu, lịch sử mua |
| **Báo cáo** | Doanh thu thuần, **lợi nhuận gộp**, theo **nhóm tuổi**, danh mục, sản phẩm bán chạy, nhân viên, hình thức thanh toán, tồn kho & cảnh báo sắp hết, xuất Excel (CSV) |
| **Dữ liệu** | Sao lưu / khôi phục toàn bộ (kể cả ảnh), dữ liệu mẫu để dùng thử |

## Cài đặt
Địa chỉ (sau khi gộp vào `main`): `https://tnp10102014-cmd.github.io/hn83_automation/fashion-pos/`
- **iPhone / iPad**: Safari → Chia sẻ ⬆ → *Thêm vào MH chính*
- **Android**: Chrome → ⋮ → *Cài đặt ứng dụng*
- **Windows / Mac / Linux**: Chrome hoặc Edge → biểu tượng ⊕ *Cài đặt* cuối thanh địa chỉ

Lần đầu mở: tạo tài khoản **Quản lý** (có thể tạo sẵn dữ liệu mẫu để thử) → *Cài đặt* → thêm nhân viên.

## Lưu ý quan trọng
- Dữ liệu lưu **trên từng thiết bị** (IndexedDB), **không tự đồng bộ** giữa các máy. Nên dùng 1 máy thu ngân chính và **sao lưu định kỳ**.
- Đăng nhập bảo vệ ở mức ứng dụng (chống người khác mở app bán hàng). Người có quyền truy cập trực tiếp thiết bị và công cụ lập trình vẫn có thể đọc dữ liệu thô — muốn bảo mật cao hơn / đồng bộ nhiều máy cần máy chủ (backend).
- Không xóa dữ liệu duyệt web của trình duyệt — sẽ mất dữ liệu.
- Thư viện QR: `qrcode.js` (qrcode-generator 1.4.4, Kazuhiko Arase, giấy phép MIT). Font: Be Vietnam Pro, Playfair Display (Google Fonts).
- Khi sửa code, tăng `CACHE` trong `sw.js` để thiết bị nhận bản mới.
