/*窗口*/
document.getElementById("shade").style.display="none";
function win_open() {
  document.getElementById("shade").style.display="block";
}
function win_off() {
  document.getElementById("shade").style.display="none";
  location.reload();
}
//全局搜索
function search_all() {
  var input_search=document.getElementById("input_search").value;
  var search_result=document.getElementById("search_result");
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