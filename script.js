const icon= document.querySelector('#icon');
var media = window.matchMedia("(max-width: 800px)");
const nav=document.querySelector('.navbar');
if(media.matches){
    nav.style.display="none";
    icon.addEventListener('click',()=>{
        nav.style.display="flex";
    })
    nav.addEventListener('click',()=>{
        nav.style.display="none";
    })
}else{
    nav.style.display="flex";
}


