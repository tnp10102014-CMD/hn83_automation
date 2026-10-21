# 🌸 Beauty POS — Thu ngân salon làm đẹp & spa

Phần mềm thu ngân cho salon **cắt tóc, làm nail, nối/uốn mi, phun xăm, chăm sóc da mặt, massage body, gội đầu dưỡng sinh**.
Chạy trên **iPhone, iPad, Android, máy tính bảng, PC Windows / Mac / Linux** (PWA: cài như app, dùng được khi mất mạng).

## Tính năng
| Nhóm | Chi tiết |
|---|---|
| **Đăng nhập & bảo mật** | Tài khoản + mật khẩu (PBKDF2-SHA256), khóa 30 giây sau 5 lần sai, tự khóa màn hình, bắt đổi mật khẩu tạm |
| **Phân quyền** | **Quản lý**: toàn quyền. **Nhân viên/Lễ tân**: thu ngân, lịch hẹn, khách hàng, xem hóa đơn & bảng giá |
| **Thu ngân** | **Nhiều phiếu khách cùng lúc** (mỗi khách 1 phiếu, lưu tự động), chọn dịch vụ theo nhóm, tìm không dấu, giảm giá %/đ, F2/F9 |
| **Kỹ thuật viên (KTV)** | Gán KTV cho từng dịch vụ, xem KTV đang rảnh/bận, **hoa hồng %** theo KTV hoặc riêng từng dịch vụ |
| **Lịch hẹn** | Đặt lịch theo ngày/giờ, chọn dịch vụ + KTV, **cảnh báo trùng lịch KTV**, "Khách đến" → tự mở phiếu thu ngân |
| **Thanh toán** | Tiền mặt (tiền thối), **chuyển khoản mã QR VietQR**, thẻ/POS. In hóa đơn 80mm (có tên KTV) |
| **Khách hàng** | Tích điểm, **hạng thành viên** (Thành viên / Bạc / Vàng / Kim cương), 🎂 sinh nhật trong tháng, ghi chú da/tóc/dị ứng, lịch sử |
| **Dịch vụ & sản phẩm** | Bảng giá dịch vụ (giá, thời lượng, chi phí vật tư), sản phẩm bán lẻ (mỹ phẩm) có tồn kho |
| **Hóa đơn** | Tra cứu, in lại, **hủy hóa đơn** (có lý do, tự trừ doanh thu/hoa hồng/điểm, cộng lại kho) |
| **Báo cáo** | Doanh thu, **lợi nhuận sau vật tư & hoa hồng**, **bảng hoa hồng từng KTV**, theo nhóm dịch vụ, dịch vụ dùng nhiều, thanh toán, xuất Excel (CSV) |
| **Dữ liệu** | Sao lưu / khôi phục, dữ liệu mẫu (29 dịch vụ, 4 KTV, lịch hẹn) |

## Dùng thử 15 ngày & mã kích hoạt
- Lần đầu mở app trên một thiết bị: tạo **Mã máy** riêng (dạng `BP-XXXX-XXXX-XXXX`) và bắt đầu **15 ngày dùng thử** (đếm ngược hiện ở góc trên).
- Hết hạn: app khóa, hiện Mã máy + ô nhập **mã kích hoạt**. Dữ liệu vẫn giữ nguyên, vẫn tải được bản sao lưu.
- Mã kích hoạt = **chữ ký số ECDSA P-256** trên (mã máy | ngày hết hạn | gói). App chỉ chứa **khóa công khai** (`LIC_PUB`) nên không ai tự tạo mã được; mã của máy này không dùng được cho máy khác.
- Các gói: gia hạn thử 15 ngày, 1 / 3 / 6 tháng, 1 năm, vĩnh viễn, hoặc chọn ngày. Hết hạn gói thì app khóa lại để gia hạn.
- Chống lùi đồng hồ: app nhớ mốc thời gian lớn nhất đã dùng.
- Mã được tạo bằng file **`TaoMaKichHoat-BeautyPOS.html`** (chứa khóa bí mật) — nhà cung cấp giữ riêng, **không đưa lên GitHub** (đã chặn trong `.gitignore`).
- Thông tin liên hệ hiện trên màn hình hết hạn: sửa hằng số `VENDOR` trong `index.html`.
- Giới hạn: đây là bảo vệ phía trình duyệt. Người rành kỹ thuật có thể sửa mã nguồn (đang công khai trên GitHub Pages) hoặc xóa sạch dữ liệu trình duyệt để dùng thử lại (khi đó mất luôn dữ liệu). Muốn chặn triệt để cần máy chủ cấp phép (online).

## Tự động sao lưu (Chrome / Edge trên máy tính)
- *Cài đặt → Tự động sao lưu → **Chọn thư mục sao lưu*** (ví dụ `E:\Backup_POS`) → bấm **Cho phép** (nên chọn *"Cho phép mỗi lần truy cập"* nếu Chrome hỏi).
- Mỗi ngày tự ghi 1 file `beauty-pos_YYYY-MM-DD.json`; trong ngày có dữ liệu mới thì ghi đè lại tối đa mỗi giờ. Tự xóa bản cũ, giữ 7–365 bản gần nhất (mặc định 30).
- Nhiều app dùng chung một thư mục được (tên file khác nhau). Khôi phục bằng nút *Khôi phục từ file sao lưu*.
- Mở lại trình duyệt, Chrome có thể hỏi lại quyền: app hỏi khi đăng nhập, hoặc hiện nút **"⚠ Bấm để cho phép sao lưu"** ở góc trên.
- Không hỗ trợ trên iPhone / iPad / Safari / Firefox → dùng nút *Sao lưu toàn bộ dữ liệu* thủ công.

## Giao diện
Phong cách spa sang trọng: nền gradient hồng phấn – champagne chuyển động nhẹ, họa tiết hoa sen & lá line-art rose-gold, thẻ kính mờ (glassmorphism), tự đổi giao diện tối theo máy.

## Cài đặt
Địa chỉ (sau khi gộp vào `main`): `https://tnp10102014-cmd.github.io/hn83_automation/beauty-pos/`
- **iPhone / iPad**: Safari → Chia sẻ ⬆ → *Thêm vào MH chính*
- **Android**: Chrome → ⋮ → *Cài đặt ứng dụng*
- **Windows / Mac / Linux**: Chrome / Edge → biểu tượng ⊕ *Cài đặt* cuối thanh địa chỉ

Lần đầu: tạo tài khoản Quản lý → *Cài đặt*: thêm KTV (% hoa hồng), sửa bảng giá ở *Dịch vụ*, nhập tài khoản ngân hàng, thêm tài khoản lễ tân.

## Lưu ý
- Dữ liệu lưu **trên từng thiết bị**, **không tự đồng bộ** giữa các máy → dùng 1 máy thu ngân chính, **sao lưu định kỳ**.
- Đăng nhập bảo vệ ở mức ứng dụng; muốn đồng bộ nhiều máy / bảo mật cao hơn cần máy chủ (backend).
- Hoa hồng tính trên **giá sau giảm giá** của hóa đơn (chia theo tỷ lệ).
- Thư viện QR: `qrcode.js` (qrcode-generator 1.4.4, Kazuhiko Arase, MIT). Font: Be Vietnam Pro, Playfair Display.
- Sửa code thì tăng `CACHE` trong `sw.js` để thiết bị nhận bản mới.
