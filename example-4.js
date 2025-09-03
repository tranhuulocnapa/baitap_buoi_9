/**
 * bài 4: tính diện tích, chu vi
 * 
 * đầu vào:
 * -khai báo biến chiều dài
 * - khai báo biến chiều rộng
 * 
 * xử lý:
 * - tính diện tích = dài x rộng
 * - tính chu vi = (dài + rộng) x 2
 * - tạo result thông báo
 * 
 * đầu ra:
 * - ra kết quả chu vi diện tích
 */


let chieudai = 2;
let chieurong = 6;

let dientich = 0;
let chuvi = 0;

dientich = chieudai * chieurong;
chuvi = (chieudai + chieurong) * 2;

let result4_1 = "diện tích là: " + dientich;
let result4_2 = "chu vi là: " + chuvi;

console.log(result4_1);
console.log(result4_2)