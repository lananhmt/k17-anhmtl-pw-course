// 1. Tính tổng từ 1 đến 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Tong 1 den 100: " + sum);

// 2. In bảng cửu chương từ 2 đến 9.
for (let i = 2; i <= 9; i++) {
    console.log(`Bang cuu chuong ${i}: `);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
let oddArray = [];
for (let i = 1; i <= 99; i = i + 2) {
    oddArray.push(i);
}

// 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
// user1@example.com, user2@example.com, ..., user10@example.com).
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
}

// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
// in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}
let yearlyIncome = [
    { month: 1, total: 100 },
    { month: 2, total: 100 },
    { month: 3, total: 100 },
    { month: 4, total: 100 },
    { month: 5, total: 100 },
    { month: 6, total: 100 },
    { month: 7, total: 100 },
    { month: 8, total: 100 },
    { month: 9, total: 100 },
    { month: 10, total: 100 },
    { month: 11, total: 100 },
    { month: 12, total: 100 }
];
let totalIncome = 0;
for (let i = 0; i < 12; i++) {
    totalIncome += yearlyIncome[i].total;
}