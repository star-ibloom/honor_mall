<?php
    header("Access-Control-Allow-Origin:*");

    $pnum = $_POST["phoneNum"]; 
    $pwd = $_POST["password"];
    // $pnum = "asdf";
    // $pwd = "1234";
    $type = $_POST["type"];
    if($type !== "sub_btn" && $type !== "login_btn"){
        $res = array("error"=>"I Don't Know What Are U Want To Do");
        die(json_encode($res));
    }

    require("./_connect.php"); 
    $pwd = md5($pwd);
    $sql_login = "SELECT phoneNum,pwd FROM usermgm";
    $sql_register = "INSERT usermgm(
        phoneNum,pwd
    )
        VALUES
    ('{$pnum}','{$pwd}')
    ";
    $result_login = $conn->query($sql_login);

    $hasphone = FALSE;
    $select_res = FALSE;
    $haspwd = FALSE;

    while($row = $result_login->fetch_assoc()){
        if($row["phoneNum"] == $pnum ){
            $hasphone = TRUE;
            if($type == "sub_btn"){
                break;
            }
            if($row["pwd"]==$pwd){
                $select_res = json_encode($row);
                $haspwd = TRUE;
                break;
            }
        }
    }
    if($type == "login_btn" &&  $haspwd == TRUE){
        //用户名密码都对，登录成功
        // die($select_res);
        die("登陆成功");
    }else if($type == "login_btn"){
        //登录失败
        die("登录失败");
    }

    if($type == "sub_btn" && $hasphone == TRUE){
        //用户名重名; => 2;
        // echo "用户名重名";
        die("用户名重名");
    }else if($hasphone == FALSE){ 
        //注册成功成功;
        if($type == "sub_btn"){
            $result_register = $conn->query($sql_register);
        }
        die("注册成功");
        // echo "注册成功";
    }

    echo $hasphone;

?>

