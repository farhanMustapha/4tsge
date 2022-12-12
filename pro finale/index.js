
var date_op=document.getElementById("date-op")
var cpt_op=document.getElementById("cpt-inp")
var desc_op=document.getElementsById("desc-input")
var d_op=document.getElementsById("d-input")
var c_op=document.getElementsById("c-input")







function valider(){
    
    if((cpt_op.value=="4411")){
        cpt_op.style.backgroundColor="green"
        desc_op.style.backgroundColor="green"
        d_op.style.backgroundColor="green"
        c_op.style.backgroundColor="green"

    }else{
        cpt_op.style.backgroundColor="red"
        desc_op.style.backgroundColor="red"
        d_op.style.backgroundColor="red"
        c_op.style.backgroundColor="red"
    }
    
   
}

function nextQuestion(){
    
       for(var i=0;i<q.length;i++){
        document.getElementById('qest').innerHTML+='<p>'+q[i]+'</p>';
       }
       } 



