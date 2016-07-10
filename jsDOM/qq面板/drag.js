/**
 * Created by yini on 2016/7/6.
 */
function stop(e){
    e= event||window.event;
    if(e.stopPropagation){
        e.stopPropagation();
    }
    else{
        e.cancelBubble=true;
    }
}
function getByClass(clsName,parent){
    var oparent=parent?document.getElementById(parent):document,
        eles=[],
        elments=oparent.getElementsByTagName("*");
    for(var i=0;i<elments.length;i++){
        if(elments[i].className==clsName){
            eles.push(elments[i]);
        }
    }
    return eles;
}
window.onload=drag;
function drag(){
    var otitle=getByClass("login_logo_webqq","loginPanel")[0];
    //拖曳
   otitle.onmousedown=fndown;
//关闭
    var oclose=document.getElementById("ui_boxyClose");
    oclose.onclick= function () {
        document.getElementById("loginPanel").style.display="none";
    }
    //切换状态
    var loginstate=document.getElementById("loginState");
    var panel=document.getElementById("loginStatePanel");
    var list=panel.getElementsByTagName("li");
    var status=document.getElementById("login2qq_state_txt");
    var show=document.getElementById("loginStateShow");
    loginstate.onclick=function(e){
        stop(e);
        panel.style.display="block";

    }
    //document.getElementById("loginPanel").onmousedown=function(){
    //    panel.style.display="none";
    //}
   for(var i=0;i<list.length;i++){
       list[i].onmouseover=function(){
           this.style.backgroundColor="#567";
       }
       list[i].onmouseout=function(){
            this.style.backgroundColor="#fff";
       }
       list[i].onclick=function(e){
           panel.style.display="none";
          stop(e);

           var id=this.id;
           //status.innerHTML=this.document.getElementsByClassName("stateSelect_text")[0].innerHTML;
           status.innerHTML=getByClass("stateSelect_text",id)[0].innerHTML;
           show.className="login-state-show "+id;
       }

   }
    document.onclick=function(e){
       stop(e);
        panel.style.display="none";
    }
}
function fndown(event){
    event=event||window.event;
    var odrag=document.getElementById("loginPanel");
    var dicx=event.clientX-odrag.offsetLeft;
    var dicy=event.clientY-odrag.offsetTop;
    var l;
    var t;
    var winw=document.documentElement.clientWidth||document.body.clientWidth;
    var winh=document.documentElement.clientHeight||document.body.clientHeight;
    var maxw=winw-odrag.offsetWidth-10;
    var maxh=winh-odrag.offsetHeight-10;

    document.onmousemove=function(event){
        event=event||window.event;
        l=event.clientX-dicx+"px";
        t=event.clientY-dicy+"px";

        if(parseInt(l)<0){
           l=10;
        }
        else if(parseInt(l)>maxw){
            l=maxw+"px";
        }
        if(parseInt(t)<0){
            t=10;
        }
        else if(parseInt(t)>maxh){
            t=maxh+"px";
        }
            odrag.style.top=t;
            odrag.style.left=l;

    }
    document.onmouseup=function(){
        document.onmousemove=null;
        document.onmouseup=null;
    }
}
