/*窗口*/
document.getElementById("shade").style.display="none";
function win_open() {
  document.getElementById("shade").style.display="block";
}
function win_off() {
  document.getElementById("shade").style.display="none";
  
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