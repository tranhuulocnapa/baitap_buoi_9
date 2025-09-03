/**
 * bài tập tính lương nhân viên
 * 
 * đầu vào:
 * - tạo biến chứa lương ngày là 100000
 * - tạo biến chưa số ngày làm việc (tự gán số ngày)
 * - tạo biến total gán giá trị là 0
 * 
 * 
 * xử lý:
 * -lương ngày *cho  số ngày làm việc
 * - gán kết quả cho biết total (cập nhật lại giá trị cho total)
 * 
 * 
 * đầu ra:
 * - in total ra ngoài màn hình
 */


let luong = 100000;
let ngayLamviec = 30;
let total = 0;

total = luong * ngayLamviec;
let result = "tổng lương là: " + total;


console.log(result);
