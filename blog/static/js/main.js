let button_head = document.querySelectorAll("div.navbar.navbar-dark.bg-dark.shadow-sm div.container.d-flex.justify-content-between button.navbar-toggler");
let head_block=document.querySelectorAll("#navbarHeader");

//bg-dark collapse show
//bg-dark collapsing show
console.log(head_block[0])
button_head[0].onclick=function(){
    if(head_block[0].className == "bg-dark collapse"){
    head_block[0].className="bg-dark collapse show";
    }else{
    head_block[0].className="bg-dark collapse"
    }
    
}  