document.addEventListener("DOMContentLoaded", function () {
  var userLogin = document.getElementById("login");
  var loginContent = userLogin.querySelector(".login");
  var body = document.body;

  userLogin.addEventListener("click", function (event) {
    if (loginContent.style.display === "none") {
      loginContent.style.display = "block";
      event.stopPropagation(); // Ngăn sự kiện click lan sang các phần tử cha khác
      body.classList.add("dimmed"); // Thêm lớp 'dimmed' vào body khi mở trang con
    } else {
      loginContent.style.display = "none";
      body.classList.remove("dimmed"); // Loại bỏ lớp 'dimmed' khỏi body khi đóng trang con
    }
  });

  // ẨisLogin khi click bất kỳ đâu trên trang ngoại trisLogin content
  document.addEventListener("click", function (event) {
    if (!loginContent.contains(event.target)) {
      loginContent.style.display = "none";
    }
  });
});
