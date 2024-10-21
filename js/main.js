
document.querySelectorAll("button").forEach( function (item){
    item.onclick = function(){
        document.querySelector("#demo").style.color = item.dataset.color;   
    }
})

//=========================================================//

function getdata(){
    var works =document.querySelector("#works").value;
    var result =document.querySelector("#result");

    if(works==""){
        return false
    }else{
        var myLi =document.createElement("li");
        myLi.innerHTML = works;
        result.appendChild(myLi);
        document.querySelector("#works").value="";
        return false;
    }
}


















