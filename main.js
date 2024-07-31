console.log('Hello World!');
document.getElementById('refreshButton').addEventListener('click', function() {
 location.reload();
});
//聯絡我 > 表單
document.addEventListener('DOMContentLoaded', function() {
 var form = document.querySelector('form');
 form.addEventListener('submit', function(event) {
  // 防止預設表單提交
  event.preventDefault();
  // 從表單資料建立電子郵件正文
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var subject = name + '寄來的訊息';
  var body = '姓名：' + name + '\n';
  body += '信箱： ' + email + '\n\n';
  body += '訊息：\n' + message;
  // 建立 mailto URL
  var mailtoUrl = 'mailto:kx108028@gmail.com' +
   '?subject=' + encodeURIComponent(subject) +
   '&body=' + encodeURIComponent(body);
  // 開啟郵件客戶端