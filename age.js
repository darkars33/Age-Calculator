var a=document.querySelectorAll("input");

function redColorBox() {
    var war= document.querySelectorAll("input");
         war[0].classList.add("warring");
         war[1].classList.add("warring");
         war[2].classList.add("warring");

    var rem= document.querySelectorAll("label");
        rem[0].classList.add("lab"); 
        rem[1].classList.add("lab"); 
        rem[2].classList.add("lab"); 
    
        
}

function removeRedColorBox() {
    var war= document.querySelectorAll("input");
         war[0].classList.remove("warring");
         war[1].classList.remove("warring");
         war[2].classList.remove("warring");

    var rem= document.querySelectorAll("label");
         rem[0].classList.remove("lab"); 
         rem[1].classList.remove("lab"); 
         rem[2].classList.remove("lab"); 
}

function ageCalculat() {
    var b=document.querySelectorAll("input");
    var d1= b[0].value - '0';
    var m1= b[1].value - '0';
    var y1= b[2].value - '0';

    var c= new Date();
    var d2= c.getDate();
    var m2= 1 + c.getMonth();
    var y2= c.getFullYear();
    var month= [31,28,31,30,31,30,31,31,30,31,30,31];
    
    if(d1>d2){
        d2= d2 + month[m2-1];
        m2= m2 - 1;
    }
    if(m1>m2){
        m2= m2 + 12;
        y2= y2 - 1;
    }

    var d= d2 - d1;
    var m= m2 - m1;
    var y= y2 - y1;

    if(d<10){
        d= '0'+d;
    }
    if(m<10){
        m= '0'+m;
    }
    if(y<10){
        y= '0'+y;
    }

    document.querySelector(".years").innerHTML= y;
    document.querySelector(".months").innerHTML= m;
    document.querySelector(".days").innerHTML= d;

}

document.querySelector("button").addEventListener("click", function(){
    if(a[0].value==0 || a[1].value==0 || a[2].value==0){
         redColorBox();
         setInterval(function() {
            removeRedColorBox();
         }, 2000);
    }else{
        ageCalculat();
    }
})