//检测格式
function check_name() {
  var login_name=document.getElementById("username").value;
  var tip_info1=document.getElementById("tip_info1");
  if(login_name!="") {
    if(/[A-Za-z0-9_\-\u4e00-\u9fa5]+/.test(login_name)){
      tip_info1.style.color="green";
      tip_info1.innerHTML="用户名格式正确";
    }
    else{
      tip_info1.style.color="red";
      tip_info1.innerHTML="用户名格式错误";
    }
  }
  else {
    tip_info1.style.color="red";
    tip_info1.innerHTML="请输入用户名";
  }
}
function check_password() {
  var login_pass=document.getElementById("password").value;
  var tip_info2=document.getElementById("tip_info2");
  if(login_pass!="") {
    if(/^[a-zA-Z]\w{5,17}$/.test(login_pass)){
      tip_info2.style.color="green";
      tip_info2.innerHTML="密码格式正确";
    }
    else {
      tip_info2.style.color="red";
      tip_info2.innerHTML="密码格式错误";
    }
  }
  else {
    tip_info2.style.color="red";
    tip_info2.innerHTML="请输入密码";
  }
}