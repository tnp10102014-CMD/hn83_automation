# 🏗️ VLXD POS — Bán hàng & quản lý kho Sắt thép · Vật liệu xây dựng

Phần mềm cho **cửa hàng / công ty sắt thép, đinh vít, bu lông, xi măng, cát đá, gạch, tôn, ống nước…**
Chạy trên **iPhone, iPad, Android, máy tính bảng, PC Windows / Mac / Linux** (PWA: cài như app, dùng được khi mất mạng).

## Tính năng
| Nhóm | Chi tiết |
|---|---|
| **Đăng nhập & phân quyền** | Tài khoản + mật khẩu (PBKDF2), tự khóa màn hình. 3 vai trò: **Quản lý** (toàn quyền), **Bán hàng** (bán, thu nợ, xem tồn), **Thủ kho** (nhập / xuất / kiểm kho, NCC) |
| **Bán hàng** | Nhiều đơn mở song song, tìm không dấu theo tên / mã / quy cách, **số lượng lẻ** (7,5 kg), **đơn vị quy đổi** (tấn ↔ bao, thùng ↔ kg, bó ↔ cây), **giá lẻ / giá sỉ** theo nhóm khách, sửa giá từng dòng, chiết khấu %/đ, **phí vận chuyển**, địa chỉ giao hàng, **in báo giá** |
| **Thanh toán & công nợ** | Tiền mặt / chuyển khoản (**QR VietQR**) / thẻ; khách **trả một phần → ghi nợ**; hiện nợ cũ & tổng nợ; **phiếu thu nợ**; công nợ phải trả nhà cung cấp, **phiếu chi** |
| **Kho hàng** | **Tồn kho** theo thời gian thực, định mức tối thiểu & cảnh báo; **phiếu nhập kho** (tự tính **giá vốn bình quân**); **phiếu xuất khác** (hao hụt, hư hỏng, xuất nội bộ, trả NCC); **kiểm kho** điều chỉnh theo số đếm thực tế; **thẻ kho** từng mặt hàng |
| **In chứng từ** | Khổ **A5** (máy in văn phòng) hoặc **80mm** (máy in nhiệt): phiếu xuất kho kiêm hóa đơn (số tiền **bằng chữ**, chữ ký), báo giá, phiếu nhập kho, phiếu thu/chi, báo cáo NXT |
| **Báo cáo** | Doanh thu, lãi gộp, thực thu, nhập hàng, theo nhóm hàng / mặt hàng / khách / nhân viên; **báo cáo Nhập – Xuất – Tồn** theo kỳ (tồn đầu, nhập, xuất, điều chỉnh, tồn cuối, giá trị tồn); **công nợ** phải thu (tuổi nợ) / phải trả; xuất Excel (CSV) |
| **Hóa đơn** | Tra cứu, lọc còn nợ / đã hủy, in lại, **hủy hóa đơn** (bắt buộc lý do, tự nhập lại kho, trừ công nợ) |
| **Dữ liệu** | Sao lưu / khôi phục, dữ liệu mẫu (28 mặt hàng thực tế, khách, NCC, hóa đơn 3 tuần) |

## Dùng thử 7 ngày & mã kích hoạt
- Mỗi thiết bị có **Mã máy** `VL-XXXX-XXXX-XXXX`, dùng thử **7 ngày**, đếm ngược ở góc trên. Hết hạn → khóa app (dữ liệu giữ nguyên, vẫn tải được sao lưu).
- Mã kích hoạt `VL1.…` = chữ ký số **ECDSA P-256** (cặp khóa **riêng** của VLXD POS — mã Beauty POS không dùng được và ngược lại). App chỉ chứa khóa công khai.
- Gói: gia hạn thử 7 ngày, 1 / 3 / 6 tháng, 1 năm, vĩnh viễn, hoặc chọn ngày.
- Tạo mã bằng **`TaoMaKichHoat-VLXD-POS.html`** (chứa khóa bí mật) — nhà cung cấp giữ riêng, **không đưa lên GitHub** (đã chặn trong `.gitignore`).
- Sửa thông tin liên hệ hiện trên màn hình hết hạn: hằng số `VENDOR` trong `index.html`.
- Giới hạn: bảo vệ phía trình duyệt; người rành kỹ thuật có thể sửa mã nguồn công khai. Chặn triệt để cần máy chủ cấp phép.

## Giao diện
Phong cách công trường: nền **bản vẽ kỹ thuật (blueprint)** với lưới tọa độ, **cần cẩu tháp** & khung nhà đang xây vẽ line-art, **dải sọc vàng – đen cảnh báo**, khung tên bản vẽ; chữ tiêu đề Barlow Condensed kiểu bảng hiệu công trình; tự đổi giao diện tối.

## Cài đặt
Địa chỉ (sau khi gộp vào `main`): `https://tnp10102014-cmd.github.io/hn83_automation/vlxd-pos/`
- **iPhone / iPad**: Safari → Chia sẻ ⬆ → *Thêm vào MH chính* · **Android**: Chrome → ⋮ → *Cài đặt ứng dụng* · **PC**: Chrome / Edge → ⊕ *Cài đặt*

## Lưu ý
- Dữ liệu lưu **trên từng thiết bị**, **không tự đồng bộ** giữa các máy → dùng 1 máy chính, **sao lưu định kỳ**.
- Số lượng tồn kho tính theo **đơn vị tính chính**; đơn vị quy đổi chỉ dùng khi bán.
- Giá vốn bình quân gia quyền cập nhật mỗi lần nhập; lãi gộp = doanh thu (trừ phí vận chuyển) − giá vốn hàng bán.
- Thư viện QR: `qrcode.js` (qrcode-generator 1.4.4, MIT). Font: Be Vietnam Pro, Barlow Condensed.
