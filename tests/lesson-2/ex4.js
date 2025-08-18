const chieuCao = 152;

let canNangLyTuong = (chieuCao - 100) * 9 / 10;

let canNangToiDa = chieuCao - 100;

let canNangToiThieu = (chieuCao - 100) * 8 / 10;

console.log("Cân nặng lý tưởng, Cân nặng tối đa, Cân nặng tối thiểu lần lượt là: ");

console.log(canNangLyTuong + ', ' + canNangToiDa + ', ' + canNangToiThieu);