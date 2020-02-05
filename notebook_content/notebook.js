/*窗口*/
document.getElementById("shade").style.display="none";
function win_open() {
  document.getElementById("shade").style.display="block";
}
function win_off() {
  document.getElementById("shade").style.display="none";
  location.reload();
}
/*添加笔记*/
function save() {
  var input=new Object;
  input.title=document.getElementById("title_input").value;
  input.time=document.getElementById("time_input").value;
  input.text=document.getElementById("text_input").value;
  str=JSON.stringify(input);
  if(input.title!=""&&input.time!=""){
    localStorage.setItem(input.title+input.time,str);
    document.getElementById("tip_text").innerHTML="添加笔记成功";
    win_open();
  }
  else{
    document.getElementById("tip_text").innerHTML="输入点什么吧";
    win_open();
  }
}
/*删除笔记*/
function remove() {
  var delete_title=document.getElementById("title_input").value;
  var delete_time=document.getElementById("time_input").value;
  if(delete_time!=""&&delete_title!="") {
    for(var i=0;i<localStorage.length;i++) {
      var str=localStorage.getItem(localStorage.key(i));
      var input=JSON.parse(str);
      if(input.title==delete_title||input.time==delete_time) {
        localStorage.removeItem(delete_title+delete_time);
        document.getElementById("tip_text").innerHTML="删除笔记成功";
        win_open();
        break;
      }
      else{
        continue;
      }
    }
    if(i==localStorage.length) {
      document.getElementById("tip_text").innerHTML="并没有该笔记";
      win_open();
    }
  }
  else {
    document.getElementById("tip_text").innerHTML="输入点什么吧";
    win_open();
  }
}
/*导入笔记*/
function import_note() {
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) { 
      var get_text=JSON.parse(this.responseText);
      document.getElementById("tip_text").innerHTML="导入成功<br>笔记作者为:"+get_text[0].name+"<br>"+"其中笔记1的标题为:"+get_text[0].note[0].title+"<br>"+
      "记录时间为："+get_text[0].note[0].time+"<br>"+"笔记内容为："+get_text[0].note[0].content+"<br>"+"其中笔记2的标题为："+get_text[0].note[1].title+
      "<br>"+"记录时间为："+get_text[0].note[1].time+"<br>"+"笔记内容为："+get_text[0].note[1].content;
      var input=new Object;
      for(var i=0;i<=1;i++) {
        input.title=get_text[0].note[i].title;
        input.time=get_text[0].note[i].time;
        input.text=get_text[0].note[i].content;
        str=JSON.stringify(input);
        localStorage.setItem(input.title+input.time,str);
      }
    }
    else {
      document.getElementById("import_result").innerHTML="导入失败<br>"+"请看看发生什么故障了吧"
    }
  }
  xmlhttp.open("GET","http://stringscloud.club/recruit/note",true);
  xmlhttp.send();
  win_open();
}
//检测格式
function check_name() {
  var login_name=document.getElementById("username").value;
  var tip_info1=document.getElementById("tip_info1");
  if(login_name!="") {
    if(/^\w{3,15}$/.test(login_name)){
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
    if(/^\w{6,12}$/.test(login_pass)){
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
//全局搜索
function search_all() {
  var input_search=window.parent.document.getElementById("input_search").value;
  var search_result=window.parent.document.getElementById("search_result");
  if(input_search!="") {
    for(var i=0;i<localStorage.length;i++) {
      var str=localStorage.getItem(localStorage.key(i));
      var input=JSON.parse(str);
      if(input_search==input.title) {
        win_open();
        search_result.innerHTML="该笔记的标题是："+input.title+"<br>日期是："+input.time+
        "<br>内容是："+input.text;
        break;
      }
      else if(input_search==input.time) {
        win_open();
        search_result.innerHTML="该笔记的标题是："+input.title+"<br>日期是："+input.time+
        "<br>内容是："+input.text;
        break;
      }
      else{
        continue;
      }
    }
    if(i==localStorage.length) {
      win_open();
      search_result.innerHTML="查无此笔记！";
    }
  }
  else{
    win_open();
    search_result.innerHTML="输入点什么吧";
  }
}
/*查找笔记*/
function find() {
  var search_title=document.getElementById("title_input").value;
  var search_time=document.getElementById("time_input").value; 
  if(search_time!=""&&search_title!="") {
    for(var i=0;i<localStorage.length;i++) {
      var str=localStorage.getItem(localStorage.key(i));
      var input=JSON.parse(str);
      if(search_time==input.time&&search_title==input.title) {
        document.getElementById("tip_text").innerHTML="查找笔记成功<br>您要查找的笔记标题为："+input.title+"<br>"+"存储时间为："
        +input.time+"<br>"+"内容为："+input.text;
        win_open();
        break;
      }
      else{
        continue;
      }
    }
    if(i==localStorage.length){
      document.getElementById("tip_text").innerHTML="查无该笔记";
      win_open();
    }
  }
  else {
    document.getElementById("tip_text").innerHTML="输入点什么吧";
    win_open();
  }
}
/*查看所有笔记*/
window.onload=function(){
  function show_all() {
    var list=document.getElementById("list");
    if(localStorage.length>0) {
      var show_list="<table border='0' class='showtable' cellpadding='10' cellspacing='10'>";
      show_list+="<tr><th class='btbg font-center'>标题</th><th class='btbg font-center'>记录日期</th><th class='btbg'>笔记内容"+
      "</th><th class='btbg font-center'>操作</th></tr>"
        for(var i=0;i<localStorage.length;i++) {
          var show_all=localStorage.key(i);
          var str=localStorage.getItem(show_all);
          var input=JSON.parse(str);
          show_list+="<tr><td>"+input.title+"</td><td>"+input.time+"</td><td>"+input.text.substr(1,6)+"</td>"
          +"<td><input type=button class='table_btn' value='删除' onclick=del("+"'"+input.title+input.time+"'"+")></td></tr>"
        }
      show_list+="</table>";
      list.innerHTML=show_list;
    }
    else{
      list.innerHTML="没有该笔记的记录";
    }
  }
  show_all();
}

/*查看所有笔记中的删除操作*/
function del(title_time) {
  localStorage.removeItem(title_time);
  show_all();
  win_open();
}