
const modalEditSubjects = document.getElementById("myModal-edit-subjects");
const modalDeleteSubjects = document.getElementById("myModal-delete-subjects");
const modalCreateSubjects = document.getElementById("myModal-create-subjects");
const closeModal = document.querySelector(".modal-footer-profile-subjects i");
const createNew = document.querySelector(".container-subjects .icon-new");

//create subjects
createNew.addEventListener("click", () => {
   
    modalCreateSubjects.style.display = "block";
})

//show modal edit
document.querySelectorAll(".container-subjects .icon-edit").forEach(item => {
    item.addEventListener("click", () => {
        modalEditSubjects.style.display = "block";
    })
})
//show modal delete
document.querySelectorAll(".container-subjects .icon-delete").forEach(item => {
    item.addEventListener("click", () => {
        modalDeleteSubjects.style.display = "block";
    })
})


document.querySelectorAll(".container-subjects .modal").forEach((item)=>{
    // console.log(item)
    item.addEventListener("click",(e)=>{
        console.log(e.target)
        if(e.target == modalEditSubjects || e.target == modalDeleteSubjects ||
            e.target == modalCreateSubjects)  {
            modalEditSubjects.style.display = "none";
            modalDeleteSubjects.style.display = "none";
            modalCreateSubjects.style.display = "none";
        }
    })
})