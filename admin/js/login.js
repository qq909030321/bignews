$(function () {
  $(".input_sub").on("click", function (e) {
    e.preventDefault();
    var username = $(".input_txt").val();
    var password = $(".input_pass").val();
    if ($.trim(username) == "" || $.trim(password) == "") {
      $("#myModal").modal("show");
      $(".modal-body").text("请确认账号密码是否为空...");
    }
    $.ajax({
      type: "post",
      url: BigNew.user_login,
      data: {
        username,
        password,
      },
      dataType: "json",
      success: function (response) {
        if (response.code == 200) {
          $("#myModal").modal("show");
          $(".modal-body").text("密码正确!");
          $("#myModal").on("hidden.bs.modal", function (e) {
            window.location.href = "./index.html";
          });
        } else {
          $("#myModal").modal("show");
          $(".modal-body").text("请确输入的认账号密码是否正确.....");
        }
      },
    });
  });
});
