$(function () {
  $(".input_sub").on("click", function (e) {
    e.preventDefault();
    var username = $(".input_txt").val();
    var password = $(".input_pass").val();
    if ($.trim(username) == "" || $.trim(password) == "") {
      alert("输入的账号密码不能为空");
    }
    $.ajax({
      type: "post",
      url: "http://localhost:8080/api/v1/admin/user/login",
      data: {
        username,
        password,
      },
      dataType: "json",
      success: function (response) {
        if (response.code == 200) {
          window.location.href = "./index.html";
        } else {
          alert(response.msg);
        }
      },
    });
  });
});
