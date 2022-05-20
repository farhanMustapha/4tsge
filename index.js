

var count=0
var btn=document.getElementById("btn-next")
btn.addEventListener("click",function(){
    if(count==0){
        document.getElementById("txt").innerHTML="hello"
        count++
        console.log(count)
    }
    if(count==1){
        document.getElementById("txt").innerHTML="hello0000"
        count++
        console.log(count)
    }

    if(count==2){
        document.getElementById("txt").innerHTML="hi "
        count++
        console.log(count)
    }

    if(count==3){
        document.getElementById("txt").innerHTML="salam"
        count++
        console.log(count)
    }
})