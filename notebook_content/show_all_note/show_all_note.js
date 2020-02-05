/*窗口*/
document.getElementById("shade").style.display="none";
function win_open() {
  document.getElementById("shade").style.display="block";
}
function win_off() {
  document.getElementById("shade").style.display="none";
  location.reload();
}
/*查看所有笔记*/
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
window.onload=show_all();
/*查看所有笔记中的删除操作*/
function del(title_time) {
  localStorage.removeItem(title_time);
  show_all();
}