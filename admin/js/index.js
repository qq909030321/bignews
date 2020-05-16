$(function(){
    $.ajax({
        type: "get",
        url:BigNew.user_info,
        //请求头,参数是一个对象
        headers: { "Authorization": localStorage.getItem("token") },
        dataType: "json",
        success: function (response) {
          if(response.code == 200){
              console.log(response);    
              //登陆用户名      
              $('.user_info>span').html('欢迎&nbsp;&nbsp;'+response.data.nickname)
              //用户头像
              $(".user_info img").attr("src",response.data.userPic)
              //个人中心的用户头像
              $(".user_center_link img").attr("src",response.data.userPic)
          }  
        },
      });
      //退出登录
    $('.user_center_link .icon-tuichu').on('click',function(){
        //退出返回登录界面
        window.location.href='./login.html'
        //删除token
        localStorage.removeItem('token')
    })
})