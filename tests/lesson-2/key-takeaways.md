# Version control system
**Phân loại:**
* Local: lưu ở máy cá nhân
* Centralize: lưu ở một máy chủ tập trung
* Distributed: lưu ở nhiều máy khác nhau


# Git
### Git & GitHub
**So sánh:**
1. Git: 
- Là 1 phần mềm
- Cài trên máy cá nhân
- Là 1 commandline tool
- Là công cụ quản lý phiên bản, đưa file vào Git repo
- Có các tính năng của Version Control System.
2. GitHub:
- Là 1 dịch vụ web
- Host trên website
- Là công cụ có giao diện
- Là nơi để upload Git repo lên
- Có các tính năng của Version Control System và 1 số tính năng khác.

### 3 states:
- **Working Directory**: Nơi quản lý các file mới, hoặc file có thay đổi
- **Staging Area**: Nơi chứa các file được đưa vào vùng chuẩn bị commit -> tạo ra các phiên bản
- **Repository**: Các commit (phiên bản)

### Các lệnh git:
- **git init**: Khởi tạo thư mục được quản lý bởi Git
- **git add .**: Add tất cả file mới/ có thay đổi vào staging
- **git add file_name**: Add file cụ thể vào staging
- **git commit -m ”commit_message”**: Commit (Tạo 1 phiên bản)
- **git status**: Kiểm tra trạng thái các file: màu đỏ trong Working directory, màu xanh trong Staging area
- **git log**: Xem lịch sử các phiên bản (Phiên bản commit sau sẽ lên đầu)
- **git config —global user.name “”**: Cấu hình userName trên toàn máy
- **git config —global user.email “”**: Cấu hình userEmail trên toàn máy
- **git config user.name “”**: Cấu hình userName cho 1 repo (đứng tại repo đó)
- **git config user.email “”**: Cấu hình userEmail cho 1 repo (đứng tại repo đó)
- **git config —global init.defaultBranch main**

### Commit convention:
**`<type>`: <short_description>**
 
`<type>`: loại commit:
- chore: sửa nhỏ lẻ, chính tả, xoá file không dùng tới
- feat: thêm tính năng mới, test case mới
- fix: sửa lỗi 1 test trước đó

<short_description>: mô tả ngắn gọn (50 kí tự), tiếng anh hoặc tiếng Việt

Ví dụ: 
- “chore: remove unused file”
- “feat: add code for exercises 2”
- “fix: fix automation for case 1”


# Javascript basic
### Variable = biến: Dùng để lưu trữ giá trị, có thể thay đổi giá trị được

    var <ten_bien> = <gia_tri>;
    let <ten_bien> = <gia_tri>;

<ten_bien>: 
- bắt đầu bằng chữ hoặc gạch dưới hoặc $
- không chứa dấu cách
- không là các từ khoá: var, for, if, …

### Constant = hằng: Dùng để khai báo các giá trị không thể thay đổi

    const <ten_bien> = <gia_tri>;

### Data type = kiểu dữ liệu
- 8 loại kiểu dữ liệu: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object

### Comparison operator: toán tử so sánh: Dùng để so sánh giá trị giữa 2 biến với nhau
    > < >= <= == === != !==

### Unary operator: toán tử 1 ngôi: Dùng để tăng hoặc giảm giá trị
    i++ bằng với i=i+1
    i-- bằng với i=i-1

### Arithmetic operator: toán tử số học: Dùng để tính toán giá trị biểu thức
    + - * /

### Conditional = điều kiện: Dùng để kiểm tra có nên thực hiện một đoạn logic không
    if (<dieu_kien>) {//code}

### Loops = vòng lặp: Dùng để thực hiện một đoạn logic một số lần nhất định
    for (<dieu_kien_khoi_tao>; <dieu_kien_chay>; <dieu_kien_thay_doi>) {//code}

<dieu_kien_khoi_tao>: chạy 1 lần duy nhất

### Format code: 
    Mac: Option + Shift + F
    Window: Alt + Shift + F