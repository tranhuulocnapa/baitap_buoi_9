/**
 * tính tổng 2 ký số
 * 
 * đầu vào:
 * 
 * - tại biến n gán giá trị
 * - tạo total gán giá  trị 0
 * 
 * xử lý
 * - tạo biến hàng chục = n/10
 * -làm tròn hàng chục Math.float(hangchuc) => cập nhật giá trị cho chính nó
 * -tạo biến hangdonvi = n % 10
 * - total = hangchuc cộng hangdonvi
 * - tạo result gán thông báo
 * 
 * đầu ra
 * in result
 * 
 */


const n = 72;
let total5 = 0;

let hangchuc = n / 10;
hangchuc = Math.floor(hangchuc);

// const hangchuc = Math.floor(n / 10)

let hangdonvi = n % 10;

total5 = hangchuc + hangdonvi;

const result5 = "tong 2 ky so là:" + total5;
console.log(result5);