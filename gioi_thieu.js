// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservation-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn hành động gửi form mặc định

        // Lấy dữ liệu từ form
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const guests = document.getElementById('guests').value;
        const date = document.getElementById('date').value;

        // Hiển thị thông báo xác nhận
        confirmationMessage.style.display = 'block';
        confirmationMessage.innerHTML = `Cảm ơn ${name}! Bạn đã đặt bàn cho ${guests} khách vào ngày ${date}. Số điện thoại của bạn là ${phone}.`;
        
        // Reset form
        form.reset();
    });
});