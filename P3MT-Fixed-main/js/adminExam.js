
function showCreateExam() {
    const createNewExam = document.querySelector(".create-new-exam");
    const closeBtn = document.querySelector("#close-btn");

    const showCreateExam = document.querySelector(".exam-add");
    showCreateExam.style.display = "none"
    createNewExam.addEventListener("click", ()=> {
        showCreateExam.style.display = "block"
    })
    closeBtn.onclick = () => {
    
       
       showCreateExam.style.display = "none"
    }
}

showCreateExam()