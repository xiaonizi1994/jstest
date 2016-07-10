/**
 * Created by yini on 2016/7/8.
 */
var list=["惠普","苹果","香蕉","菠萝"];
window.onload=throwing;
function throwing(){
    var otitle=document.getElementById("title");
    var play=document.getElementById("play");
    var stop=document.getElementById("stop");
    var flag=0;
    play.onclick=begin;
    stop.onclick=ostop;
    document.onkeyup=function(e){
        console.log(e.keyCode);
        e=window.event||event;
        //console.log(e.keyCode);
        if(13== e.keyCode){
            if(flag==0) {
                begin();

            }
            else{

                ostop();
            }
        }
    }

    var t;
    function begin(){
        if(t){
            clearInterval(t);
        }
        flag=1;
        t=setInterval(run,100);
        play.style.background="#999";
    }
    function ostop(){
        flag=0;
        clearInterval(t);
        play.style.background="#036"
    }

    function run(){
        var i=Math.floor(Math.random()*list.length);
        var text=list[i];
        otitle.innerHTML=list[i];
    }
}

