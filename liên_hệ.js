// script.js
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const confirmationMessage = document.getElementById('confirmation-message');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Ngăn chặn hành động gửi form mặc định

      // Lấy dữ liệu từ form
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      // Hiển thị thông báo xác nhận
      confirmationMessage.style.display = 'block';
      confirmationMessage.innerHTML = `Cảm ơn ${name}! Chúng tôi đã nhận được yêu cầu của bạn với tiêu đề "${subject}". Chúng tôi sẽ liên hệ với bạn qua email: ${email}.`;
      
      // Reset form
      form.reset();
  });
});