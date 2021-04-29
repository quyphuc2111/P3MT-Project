const modalProfileLecturers = document.getElementById("myModal-profile-lecturers");
const modalEditLecturers = document.getElementById("myModal-edit-lecturers");
const modalDeleteLecturers = document.getElementById("myModal-delete-lecturers");
const modalCreateLecturers = document.getElementById("myModal-create-lecturers");
const closeModal = document.querySelector(".modal-footer-profile-lecturers i");
const createNew = document.querySelector(".container-lecturers .icon-new");

//create lecturers
createNew.addEventListener("click", () => {
    modalCreateLecturers.style.display = "block";
})
//show modalProfile
document.querySelectorAll(".lecturers-content .icon-profile").forEach(item => {
    item.addEventListener("click", () => {
        modalProfileLecturers.style.display = "block";
    })
})
//show modal edit
document.querySelectorAll(".lecturers-content .icon-edit").forEach(item => {
    item.addEventListener("click", () => {
        modalEditLecturers.style.display = "block";
    })
})
//show modal delete
document.querySelectorAll(".lecturers-content .icon-delete").forEach(item => {
    item.addEventListener("click", () => {
        modalDeleteLecturers.style.display = "block";
    })
})

//close modal profile
closeModal.addEventListener("click", () => {
    modalProfileLecturers.style.display = "none";
})

document.querySelectorAll(".container-lecturers .modal").forEach((item)=>{
    // console.log(item)
    item.addEventListener("click",(e)=>{
        console.log(e.target)
        if(e.target ==  modalProfileLecturers || e.target == modalEditLecturers || e.target == modalDeleteLecturers ||
            e.target == modalCreateLecturers)  {
            modalProfileLecturers.style.display = "none";
            modalEditLecturers.style.display = "none";
            modalDeleteLecturers.style.display = "none";
            modalCreateLecturers.style.display = "none";
        }
    })
})
// ========================//
//=====show/hide pass=====//
// ======================//
const iconShow = document.querySelector(".container-lecturers .input-group .show-password-icon");
const iconHide = document.querySelector(".container-lecturers .input-group .hidden-password-icon");
const inputPass = document.querySelector(".container-lecturers .input-group .form-control");
iconHide.style.display = "none"
iconShow.addEventListener("click", () => {
    inputPass.type = "text"
    iconHide.style.display = "block"
    iconShow.style.display = "none"
})
iconHide.addEventListener("click", () => {
    inputPass.type = "password"
    iconHide.style.display = "none"
    iconShow.style.display = "block"
})