 $(function () {
        $("#btn_login").click(function () {
            var login=$("#txt_name").val();
            var pwsd=$("#txt_pwsd").val();
            if (login == "admin" && pwsd == "123456") {
            alert("欢迎，"+login+"登录成功");
            }
            else if (login == "" && pwsd == "") {
                alert("账户或密码不能为空！");
            }
            else
            {
                alert("账号或密码输入错误，请重新输入！");
                $("#txt_name").val();
                $("#txt_pwsd").val();
            }
        });
        $("#btn_reset").click(function () {
            $("#txt_name").val("");
            $("#txt_pwsd").val("");
        });
    });