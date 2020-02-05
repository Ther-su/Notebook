document.getElementById("shade").style.display="none";
function win_open() {
  document.getElementById("shade").style.display="block";
}
function win_off() {
  document.getElementById("shade").style.display="none";
  location.reload();
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