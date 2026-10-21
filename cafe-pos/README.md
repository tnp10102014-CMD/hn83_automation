# ☕ Cà Phê POS — App tính tiền quán cà phê & ăn sáng

App chạy trên **iPhone (iOS) và Android** dạng PWA: cài lên màn hình chính như app thật, chạy toàn màn hình, **dùng được khi mất mạng**, dữ liệu lưu ngay trên điện thoại.

## Tính năng
- **Sơ đồ 20 bàn** đánh số 01–20 (đổi được số bàn) + ô **Mang về**. Bàn có khách hiện màu cam, tạm tính, số món, thời gian ngồi.
- **Gọi món**: chọn theo nhóm, tìm món không dấu ("banh mi"), tăng/giảm số lượng, **ghi chú** (ít đường, không đá…).
- **Chuyển bàn / gộp bàn**, hủy đơn, **in phiếu tạm tính**.
- **Thanh toán**: giảm giá % hoặc số tiền, tiền mặt (gợi ý tiền khách đưa, tự tính tiền thối) hoặc **chuyển khoản có mã QR VietQR** kèm sẵn số tiền.
- **In hóa đơn** khổ 80mm (qua AirPrint / máy in hỗ trợ in từ trình duyệt, hoặc lưu PDF).
- **Thực đơn**: thêm/sửa/xóa món, giá, nhóm, emoji; gạt công tắc báo **hết món**.
- **Báo cáo**: hôm nay / hôm qua / 7 ngày / tháng / tùy chọn — doanh thu, số hóa đơn, tiền mặt vs chuyển khoản, biểu đồ theo giờ/ngày, món bán chạy, danh sách hóa đơn (in lại, hủy), **xuất Excel (CSV)**.
- **Sao lưu / khôi phục** dữ liệu ra file .json.

## Cách đưa lên điện thoại
1. Bật **GitHub Pages** cho repo: *Settings → Pages → Source: Deploy from a branch → `main` / root*.
2. Mở trên điện thoại: `https://<tên-github>.github.io/hn83_automation/cafe-pos/`
3. Cài app:
   - **iPhone**: mở bằng **Safari** → nút Chia sẻ ⬆ → **Thêm vào MH chính**.
   - **Android**: mở bằng **Chrome** → ⋮ → **Cài đặt ứng dụng / Thêm vào màn hình chính**.

## Lưu ý
- Dữ liệu lưu riêng trên từng máy (localStorage). Nhiều máy dùng chung **không tự đồng bộ** với nhau.
- Không xóa dữ liệu duyệt web của Safari/Chrome — sẽ mất dữ liệu. Hãy **Sao lưu** định kỳ ở tab Cài đặt.
- Máy in nhiệt Bluetooth giá rẻ thường không in trực tiếp từ trình duyệt; cần máy in hỗ trợ AirPrint/Mopria hoặc app cầu nối của hãng máy in.
- Khi sửa code, tăng số phiên bản `CACHE` trong `sw.js` để điện thoại nhận bản mới.
