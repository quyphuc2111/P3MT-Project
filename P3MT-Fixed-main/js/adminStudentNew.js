function addOneStudent() {
    const addStudent = document.querySelector(".add-student.add-one-student");
    const showStudentAdd = document.querySelector(".student-add");
    const closeBtn = document.querySelector("#close-btn");
    addStudent.addEventListener('click', () => {
         showStudentAdd.style.display = "block "
    
    })
    closeBtn.onclick = () => {

        showStudentAdd.style.display = "none"
       
     }
 
 }
 addOneStudent()
