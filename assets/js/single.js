let isShow = true;
let content = document.querySelector('#summary-content');
let toggleContent = document.querySelector('btn-tbl-content button');
function hideShow(){
   
    if(isShow){
        content.style.display = 'none';
        isShow = false;
        toggleContent.innerHTML = 'show'

    } else{
        content.style.display = 'block';
         isShow = true;
         toggleContent.innerHTML = 'hide'
    }
    console.log(isShow)
}