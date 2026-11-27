# Website Taptales Studio (taptales.net)

Website tĩnh, lưu trên **GitHub**, chạy miễn phí bằng **GitHub Pages**, sửa nội dung qua **Pages CMS** (trang quản trị). Không cần biết code.

## Cấu trúc thư mục

| Đường dẫn | Nội dung |
|---|---|
| `index.html`, `assets/` | Giao diện và hiệu ứng (thường không cần sửa) |
| `content/products.json` | Danh sách sản phẩm tiêu biểu |
| `content/site.json` | Email liên hệ, link mạng xã hội |
| `content/legal/*.json` | Terms, Privacy Policy, Product & Service Policy |
| `media/` | Ảnh tải lên từ trang quản trị |
| `.pages.yml` | Cấu hình trang quản trị (file ẩn, **bắt buộc phải có**) |
| `CNAME` | Tên miền `taptales.net` |

---

## Bước 1: Đưa code lên GitHub

1. Tạo tài khoản miễn phí tại **github.com**.
2. Bấm **+ → New repository**:
   - Repository name: `taptales-site`
   - Chọn **Public** (GitHub Pages miễn phí yêu cầu repo public; nội dung web vốn công khai nên không sao)
   - Bấm **Create repository**.
3. Trong trang repo vừa tạo, bấm **uploading an existing file**, kéo **toàn bộ nội dung bên trong** thư mục `taptales-site` (không phải bản thân thư mục) vào, rồi bấm **Commit changes**.
4. Kiểm tra trong danh sách file có `.pages.yml`. Nếu không thấy (máy Mac đôi khi ẩn file bắt đầu bằng dấu chấm):
   **Add file → Create new file**, đặt tên `.pages.yml`, mở file `.pages.yml` trên máy bằng Notepad/TextEdit, copy toàn bộ dán vào, bấm **Commit changes**.

## Bước 2: Bật GitHub Pages

1. Trong repo: **Settings → Pages**.
2. **Source**: *Deploy from a branch* → Branch: **main**, thư mục **/ (root)** → **Save**.
3. Ô **Custom domain**: nhập `taptales.net` → **Save**.
4. Sau khi DNS (Bước 3) nhận, tích **Enforce HTTPS**.

## Bước 3: Trỏ tên miền ở Mắt Bão

Đăng nhập **id.matbao.net → Tên Miền → taptales.net → Quản lý DNS**.

1. **Xoá** các bản ghi cũ có Host `@` hoặc `www` loại **A / AAAA / CNAME** (bản ghi “đậu” tên miền của Mắt Bão).
2. **Thêm mới** các bản ghi sau:

| Host record | Loại | Giá trị |
|---|---|---|
| `@` | A | `185.199.108.153` |
| `@` | A | `185.199.109.153` |
| `@` | A | `185.199.110.153` |
| `@` | A | `185.199.111.153` |
| `www` | CNAME | `TEN-TAI-KHOAN-GITHUB.github.io` |

> ⚠️ **Không xoá / sửa** bản ghi **MX**, **TXT** (SPF, DKIM…) hay các bản ghi email khác — nếu không, `support@taptales.net` sẽ ngừng nhận thư.

DNS cần vài phút đến 24 giờ. Khi xong, `https://taptales.net` sẽ hiện website.

## Bước 4: Trang quản trị nội dung (Pages CMS)

1. Vào **app.pagescms.org** (hoặc `taptales.net/admin`) → **Sign in with GitHub**.
2. Cho phép (Install) Pages CMS truy cập repo `taptales-site`.
3. Mở repo → bên trái có 3 mục:
   - **Products**: thêm / sửa / xoá / kéo thả sắp xếp sản phẩm.
   - **Site settings**: email, link mạng xã hội.
   - **Legal pages**: 3 trang chính sách.
4. Bấm **Save** → khoảng 1 phút sau website tự cập nhật.

Có thể mời thêm người cùng quản trị: trong Pages CMS → **Settings → Collaborators** (người đó đăng nhập bằng email, không cần tài khoản GitHub).

### Gợi ý khi nhập sản phẩm

- **Icon**: ảnh vuông 512×512 px (PNG/JPG/WebP).
- **Screenshots**: 3–5 ảnh, ảnh dọc tỉ lệ 9:19 cho app/game; ảnh ngang 16:9 cho video (chọn *Screenshot shape = Landscape*).
- **Cover** (không bắt buộc): ảnh ngang đẹp nhất, sẽ phủ kín khung lớn. Không có cover thì khung lớn hiển thị icon.
- Nén ảnh trước khi tải (ví dụ tinypng.com), mỗi ảnh nên < 500 KB để web nhanh.
- Bỏ tích **Show "Sample" badge** khi là sản phẩm thật.

### Trang chính sách

Mỗi mục lớn dùng **Heading 2** — website tự đánh số 01, 02… và tạo mục lục. Chữ nằm trong ngoặc vuông như `[Applicable Jurisdiction]` sẽ được tô vàng để nhắc cần điền.

## Link dùng trong app / khai báo trên store

- Terms & Conditions: `https://taptales.net/#terms`
- Privacy Policy: `https://taptales.net/#privacy`
- Product & Service Policy: `https://taptales.net/#policy`

---

## Đường dẫn pháp lý cố định (dùng chung cho mọi game)

Mọi game và app của Taptales Studio dùng **chung** các đường dẫn sau. Ghi đúng các đường dẫn này vào App Store Connect và Google Play Console, và **không bao giờ đổi**:

| Mục | Đường dẫn |
|---|---|
| Privacy Policy | `https://taptales.net/privacy/` |
| Terms & Conditions | `https://taptales.net/terms/` |
| Product & Service Policy | `https://taptales.net/policy/` |
| Support | `https://taptales.net/support/` |

Mỗi đường dẫn là một thư mục chứa `index.html` và tự chuyển tới trang tương ứng trên website. Muốn đổi giao diện website thì cứ đổi, miễn là giữ nguyên các thư mục này.

**Khi phát hành thêm một game:**
1. Nếu game dùng thêm dịch vụ bên thứ ba (quảng cáo, analytics, báo lỗi…): thêm dịch vụ đó vào mục **Third-Party Services** trong Privacy Policy (`privacy.json`), kèm mục đích và link chính sách của họ, **trước** khi nộp game.
2. Khai báo App Privacy / Data safety trên store cho đúng với những gì game đó thật sự thu thập.
3. Trong game: dẫn link tới `https://taptales.net/privacy/` và `support@taptales.net`.
4. Đổi ngày **updated** nếu nội dung chính sách thay đổi.
