/*窗口*/
document.getElementById("shade").style.display="none";
function win_open() {
  document.getElementById("shade").style.display="block";
}
function win_off() {
  document.getElementById("shade").style.display="none";
  location.reload();
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