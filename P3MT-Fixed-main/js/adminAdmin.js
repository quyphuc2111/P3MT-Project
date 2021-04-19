var changeImgProfile = 0;
document.querySelector(".admin-img-profile img").addEventListener("click",()=>{
    if(changeImgProfile == 0){
        document.querySelector(".container-admin .change-img-profile").style.display = "flex";
        changeImgProfile++;
    }else{
        document.querySelector(".container-admin .change-img-profile").style.display = "none";
        changeImgProfile--;
    }
  
})