/*窗口*/
document.getElementById("shade").style.display="none";
function win_open() {
  document.getElementById("shade").style.display="block";
}
function win_off() {
  document.getElementById("shade").style.display="none";
  location.reload();
}
function import_note() {
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) { 
      var get_text=JSON.parse(this.responseText);
      document.getElementById("tip_text").innerHTML="<h2>导入成功</h2><br>笔记作者为:"+get_text[0].name+"<br>"+"其中笔记1的标题为:"+get_text[0].note[0].title+"<br>"+
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
      document.getElementById("tip_text").innerHTML="导入失败<br>"+"请看看发生什么故障了吧"
    }
  }
  xmlhttp.open("GET","http://stringscloud.club/recruit/note",true);
  xmlhttp.send();
  win_open();
}