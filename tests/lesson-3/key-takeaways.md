# Git
### Thay đổi commit message: 
>git commit —amend
- gõ i -> vào chế độ insert
- gõ esc -> thoát chế độ insert
- gõ :wq -> write and quite (đã sửa + lưu + thoát)
- gõ :q: quit (trong trường hợp không sửa, chỉ thoát)

>git commit —amend -m”message”

### Đưa từ vùng staging về working directory:
>git restore —staged `<file>`: đưa file cụ thể

>git restore —staged .: đưa toàn bộ các file

### Đưa từ vùng repository về working directory (uncommit):
>git reset HEAD~1: undo 1 commit (mới nhất)

*Note:*

*- bắt buộc giữ 1 commit đầu tiên. Ví dụ: hiện tại có 2 commit -> cho phép reset 1 commit mới nhất; nếu hiện tại chỉ có 1 commit -> không cho phép reset*

*- chỉ reset ở local.*

### Branching model:
- Dùng để tạo ra một vùng làm việc mới, không ảnh hưởng tới vùng làm việc đã ổn định
>git checkout -b branchName: Tạo nhánh (đem theo lịch sử commit từ nhánh hiện tại)

>git branch: Kiểm tra các nhánh hiện có (nhánh đang đứng có dấu *)

>git checkout branchName: Chuyển nhánh

### .gitignore file:
- Dùng để bỏ qua các file không cần git quản lý


# Javascript basic
### Conventions:
- snake_case: chưa dùng
- kebab-case: tên file
- camelCase: tên biến
- PascalCase: tên class

### console.log(\`${variable_name}`)

### Object = đối tượng:
- dùng để lưu trữ tập hợp các giá trị vào cùng 1 biến hoặc hằng số
let/const 
>`<objectName> = {<attribute>: <value>`, …}

*`<attribute>`: giống quy tắc đặt tên biến*

*`<value>`: có kiểu giống biến hoặc là 1 object khác*
- xoá thuộc tính: dùng delete (Eg: delete object.attributeName) 

*Note: Khi khai báo 1 object là const -> không thể gán lại (object = 1) nhưng vẫn có thể thay đổi/ sửa/ xoá thuộc tính của object*

### Logical operator:
- &&: cả 2 vế của mệnh đề đều đúng
- ||: 1 trong 2 vế đúng
- !: đảo ngược lại giá trị mệnh đề

### Array = mảng:
- độ dài mảng: length
- lấy phần tử theo index

*Note: Mảng có thể lưu được nhiều kiểu dữ liệu khác nhau*

### Function = hàm:
- 1 đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ/ tính toán cụ thể
>function functionName(param) {//code}
- Hàm có thể trả về hoặc không trả về
