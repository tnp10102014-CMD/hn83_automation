# 🏫 Canteen POS — Bán hàng & quản lý kho Canteen · Tạp hóa trường học

Phần mềm tính tiền cho **căn tin, cửa hàng tạp hóa trong trường học**: nước uống, sữa, bánh kẹo, snack, mì ly, kem, văn phòng phẩm, vở, giấy, đồ dùng cá nhân…
Chạy trên **iPhone, iPad, Android, máy tính bảng, PC Windows / Mac / Linux** (PWA: cài như app, dùng được khi mất mạng).

## Tính năng
| Nhóm | Chi tiết |
|---|---|
| **Đăng nhập & phân quyền** | Tài khoản + mật khẩu (PBKDF2), tự khóa màn hình. 3 vai trò: **Quản lý** (toàn quyền), **Thu ngân** (bán, thu nợ, xem tồn), **Thủ kho** (nhập / xuất / kiểm kho, NCC) |
| **Bán nhanh giờ ra chơi** | **Chạm 1 lần = thêm 1 món** (chạm tiếp để tăng), nút **− / +** ngay trên giỏ, quét **mã vạch** hoặc gõ mã + Enter; nút **SL…** để nhập số lượng / bán theo **lốc, thùng, hộp**; nhiều đơn mở song song; tìm không dấu |
| **Giá ưu đãi GV / NV** | Khách nhóm **Giáo viên / Nhân viên** tự áp giá ưu đãi; **ghi sổ nợ** cho GV/NV, lớp; phiếu thu nợ |
| **Thanh toán** | Tiền mặt (gợi ý mệnh giá 10k / 20k / 50k…, tự tính **tiền thối**), chuyển khoản **QR VietQR**, thẻ; ghi "Lớp / người nhận" |
| **Kho hàng** | **Tồn kho** thời gian thực, định mức tối thiểu; **phiếu nhập kho** có cột **hạn sử dụng (HSD)**, tự tính **giá vốn bình quân**; **phiếu xuất khác** (hết hạn, hư hỏng, xuất dùng nội bộ, trả NCC); **kiểm kho**; **thẻ kho** từng mặt hàng |
| **Nhắc hạn sử dụng** | Nhãn ⏰ *HSD còn N ngày* / ⛔ *Quá hạn* trên thẻ hàng, lọc **"Sắp / quá hạn"** ở Tồn kho, số cảnh báo trên menu Kho hàng, danh sách trong Báo cáo; số ngày cảnh báo chỉnh trong Cài đặt (3–30 ngày) |
| **In** | Khổ **80mm** (máy in nhiệt, mặc định) hoặc **A5**: hóa đơn bán hàng, báo giá, phiếu nhập kho, phiếu thu/chi, báo cáo NXT |
| **Báo cáo** | Doanh thu theo giờ / ngày / tháng, lãi gộp, thực thu, nhập hàng, theo nhóm hàng / mặt hàng bán chạy / khách / nhân viên; **Nhập – Xuất – Tồn** theo kỳ; công nợ phải thu / phải trả; xuất Excel (CSV) |
| **Ảnh sản phẩm** | Kho hàng → bấm mặt hàng → *Sửa thông tin* → bấm khung ảnh (hoặc Copy ảnh + Ctrl+V trên máy tính). Ảnh tự cắt vuông, thu nhỏ còn khoảng 10–20 KB, nằm trong file sao lưu |
| **Dữ liệu** | Sao lưu / khôi phục, **tự động sao lưu** vào thư mục; dữ liệu mẫu 45 mặt hàng canteen, 3 NCC, GV/NV, hóa đơn 3 tuần |

## Dùng thử 7 ngày & mã kích hoạt
- Mỗi thiết bị có **Mã máy** `CT-XXXX-XXXX-XXXX`, dùng thử **7 ngày**, đếm ngược ở góc trên. Hết hạn → khóa app (dữ liệu giữ nguyên, vẫn tải được sao lưu).
- Mã kích hoạt `CT1.…` = chữ ký số **ECDSA P-256** (cặp khóa **riêng** của Canteen POS — mã của Beauty / VLXD POS không dùng được). App chỉ chứa khóa công khai.
- Gói: gia hạn thử 7 ngày, 1 / 3 / 6 tháng, 1 năm, vĩnh viễn, hoặc chọn ngày.
- Tạo mã bằng **`TaoMaKichHoat-Canteen-POS.html`** (chứa khóa bí mật) — nhà cung cấp giữ riêng, **không đưa lên GitHub** (đã chặn trong `.gitignore`).
- Thông tin liên hệ nhà cung cấp: hằng số `VENDOR` trong `index.html`.

## Tự động sao lưu (Chrome / Edge trên máy tính)
- *Cài đặt → Tự động sao lưu → **Chọn thư mục sao lưu*** (ví dụ `E:\Backup_POS`) → **Cho phép**.
- Mỗi ngày 1 file `canteen-pos_YYYY-MM-DD.json`, có dữ liệu mới thì ghi đè tối đa mỗi giờ, giữ N bản gần nhất. Dùng chung thư mục với Beauty POS / VLXD POS được.

## Giao diện
Phong cách học đường: màn hình đăng nhập là **bảng đen khung gỗ** có máng phấn, hình vẽ phấn **ngôi trường – lá cờ – đồng hồ**, sách, bút chì, táo, máy bay giấy, quả địa cầu, thước kẻ; **giấy ghi chú vàng**; thẻ đăng nhập như **trang vở kẻ ô**; nền app là **giấy vở có lề đỏ**; dải màu bút sáp; chữ viết tay Patrick Hand + Baloo 2.

## Cài đặt
Địa chỉ (sau khi gộp vào `main`): `https://tnp10102014-cmd.github.io/hn83_automation/canteen-pos/`
- **iPhone / iPad**: Safari → Chia sẻ ⬆ → *Thêm vào MH chính* · **Android**: Chrome → ⋮ → *Cài đặt ứng dụng* · **PC**: Chrome / Edge → ⊕ *Cài đặt*

## Lưu ý
- Dữ liệu lưu **trên từng thiết bị**, **không tự đồng bộ** giữa các máy → dùng 1 máy chính, **sao lưu định kỳ**.
- HSD hiển thị là của **lô cũ nhất còn trong kho** (nhập lô mới có HSD xa hơn thì vẫn giữ HSD lô cũ để nhắc bán trước). Khi lô cũ đã bán hết, sửa lại HSD trong *Sửa hàng hóa*.
- Thư viện QR: `qrcode.js` (qrcode-generator 1.4.4, MIT). Font: Be Vietnam Pro, Baloo 2, Patrick Hand.
