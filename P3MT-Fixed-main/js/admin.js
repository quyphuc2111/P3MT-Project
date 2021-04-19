document.querySelector('#sidebar_btn').addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebar-hidden")
    document.querySelector(".sidebar .profile_image").classList.toggle("d-none")
    document.querySelectorAll(".sidebar a span").forEach((item)=>{
        item.classList.toggle("d-none")
    })
    document.querySelectorAll(".sidebar a").forEach((item)=>{
        item.classList.toggle("icon-show")
    })
    document.querySelector(".content").classList.toggle("extend")
   
})


