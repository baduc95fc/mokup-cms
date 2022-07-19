let isShow = true;
let content = document.querySelector('#summary-content');
let toggleContent = document.querySelector('btn-tbl-content button');
function hideShow(){
   
    if(isShow){
        content.style.display = 'none';
        isShow = false;
       

    } else{
        content.style.display = 'block';
         isShow = true;
      
    }
    console.log(isShow)
}