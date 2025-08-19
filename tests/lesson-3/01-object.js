// Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. Sau đó in ra năm sản xuất của xe.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(`Car's year: ${car.year}`);

// Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.
const person = {
    name: "Lan Anh",
    address: {
        street: "Cau Giay",
        city: "Ha Noi",
        country: "Viet Nam"
    }
};
console.log(`Person's street: ${person.address.street}`);

// Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một object với 2 thuộc tính kiểu number: math và english
const student = {
    name: "Lan Anh",
    grades: {
        math: 10,
        english: 9
    }
};
console.log(`Student's math point: ${student['grades']['math']}`);

// Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới.
const settings = {
    volume: 70,
    brightness: 23
};
settings.volume = 90;
console.log(`Settings's volume: ${settings['volume']}`);

// Tạo một object bike và sau đó thêm thuộc tính color vào object đó
const bike = {};
bike['color'] = "yellow";

// Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này
const employee = {
    name: "Lan Anh",
    age: 26
};
delete employee.age;

// Một trường học có các lớp học và học sinh như sau:
// ○ classA: An, Bình, Châu
// ○ classB: Đào, Hương, Giang
// Hãy viết code để đáp ứng yêu cầu sau:
// - Khai báo tên biến: school
// - Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
// tên các học sinh
// Vd:
// const school = { classA: ["Giang"]...}
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};