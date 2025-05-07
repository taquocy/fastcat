// document: Đối tượng đại diện cho trang web
// getElementById(): Phương thức tìm phần tử HTML theo id
// 'loginForm': Id của form đăng nhập
// addEventListener(): Phương thức đăng ký sự kiện
// 'submit': Loại sự kiện khi form được gửi đi
// function(): Hàm xử lý sự kiện
// event: Tham số chứa thông tin về sự kiện
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // event.preventDefault(): Ngăn chặn hành vi mặc định của form
    // preventDefault(): Phương thức ngăn form tải lại trang
    event.preventDefault();
    
    // const: Khai báo biến không thể gán lại giá trị
    // value: Thuộc tính lấy giá trị của input
    // checked: Thuộc tính kiểm tra trạng thái checkbox (true/false)
    const phone = document.getElementById('phone').value;      // Lưu số điện thoại người dùng nhập
    const password = document.getElementById('password').value; // Lưu mật khẩu người dùng nhập  
    const rememberMe = document.getElementById('rememberMe').checked; // Lưu trạng thái checkbox
    
    // alert(): Hàm hiển thị hộp thoại
    // Template literal (`): Cho phép nhúng biến vào chuỗi
    // ${}: Cú pháp nhúng biến/biểu thức vào template literal
    // \n: Ký tự xuống dòng
    // ? :: Toán tử điều kiện 3 ngôi (if-else rút gọn)
    alert(
        `Số điện thoại: ${phone}\nMật khẩu: ${password}\nRemember me: ${rememberMe ? 'Có' : 'Không'}`
    );
}); 