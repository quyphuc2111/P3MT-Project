const product = [];
let productItems = document.querySelectorAll(".container-student table tbody tr");
productItems.forEach((item)=>{
    // let element = {
    //     id: index+1,
    //     item: item
    // }
    product.push(item);
})
$(function(){
    $('#pagination-container').pagination({
        dataSource: product,
        pageSize: 10,
        showPrevious: true,
        showNext: true,
        callback: function (data, pagination) {
            var html = simpleTemplating(data);
            $('.container-student table tbody').html(html);
            
            // Xử lý xem password
            var idInputPassword = document.querySelectorAll(".container-student table tbody tr td .input-group input");
            idInputPassword.forEach((item,index)=>{
                item.setAttribute("id",`inpPassword_${index}`)
            })
            idInputPassword.forEach((item)=>{
                document.querySelector(`.container-student table tbody tr td .input-group #${item.id}+.input-group-append button`).classList.add(item.id)
            })
            var itemPassword = document.querySelectorAll(".container-student table tbody tr td .input-group .input-group-append button");
            itemPassword.forEach((item)=>{
                item.addEventListener("click",showPassword)
            })
            // Kết thúc xử lý xem password

            //Xử lý ngày sinh
            var dateStudent = document.querySelectorAll(".table table tr .date");
            const date = (element,dataDate)=>{
                for(var i = 0;i<dataDate.length;i++){
                    if(dataDate[i] == " "){
                        element.innerHTML = dataDate.slice(0,i);
                        break;
                    } 
                }
            }
            dateStudent.forEach((item)=>{
                date(item,item.innerHTML)
            })
            // Kết thúc xử lý ngày sinh

            // modal
            var modal = document.getElementById("myModal");
            document.querySelectorAll(".container-student .table tbody tr td .icon-delete").forEach((item)=>{
                item.addEventListener("click",function(){
                    modal.style.display = "block";
                })
            })
            var modalCancel = document.querySelector(".container-student .modal-body .modal-btn-no");
            modalCancel.onclick = function() {
            modal.style.display = "none";
            }
            // kết thúc modal
           
        }
    })
function simpleTemplating(data) {
    
    var html = '';
    $.each(data, function (index, item) {
        html += '<tr>' + item.innerHTML + '</tr>';
    });
    html += '';
    return html;
}
// document.querySelector(".container-student table tbody").innerHTML = "";
// console.log(product);
// const perPage = 10;
// let currentPage = 1;
// let start = 0;
// let end = perPage;
// const totalPages = Math.ceil(product.length/perPage);
// console.log(totalPages)
// const getCurrentPage = (currentPage) => {
//     start = (currentPage-1)*perPage;
//     end = currentPage*perPage;
// }
// const renderProduct = ()=>{
//     let content = product.map((item,index)=>{
//         if(index >= start && index<end){
//             console.log(index)
//             let htmlRender = document.createElement("tr");
//             htmlRender.innerHTML = item.item.innerHTML;
//             console.log(htmlRender);
//             document.querySelector(".container-student table tbody").appendChild(htmlRender);
//         }  
//     })   
// }
// renderProduct();
// const btnNext = document.querySelector(".btn-next");
// btnNext.addEventListener("click",()=>{
//     currentPage++;
//     if(currentPage > totalPages){
//         currentPage = totalPages;
//     }
//     getCurrentPage(currentPage)
//     document.querySelector(".container-student table tbody").innerHTML = "";
//     renderProduct();
// })
// const btnPrev = document.querySelector(".btn-prev");
// btnPrev.addEventListener("click",()=>{
//     currentPage--;
//     if(currentPage <=1){
//         currentPage = 1;
//     }
//     getCurrentPage(currentPage)
//     document.querySelector(".container-student table tbody").innerHTML = "";
//     renderProduct();
// })
// const renderListPage = () => {
//     let html = "";
//     html += `<li class="page-item"><a class="page-link" >${1}</a></li>`;
//     for(let i = 2;i<=totalPages;i++){
//         html += `<li class="page-item"><a class="page-link">${i}</a></li>`
//     }
//     document.querySelector(".pagination-list").innerHTML = html;
// }
// renderListPage();
// const changePage = ()=>{
//     const currentPages = document.querySelectorAll(".pagination-list li");
//     console.log(currentPages)
//     for(let i = 0;i<currentPages.length;i++){
//         currentPages[i].addEventListener('click',()=>{
//             const value = i+1;
//             currentPage = value;
//             getCurrentPage(currentPage);
//             document.querySelector(".container-student table tbody").innerHTML = "";
//             renderProduct();
//         })
//     }
// }
// changePage();
/////////////////////////////////////////
function showPassword() {
    console.log(this.classList[0])
    var inpShowPass = document.getElementById(this.classList[0])
    if(inpShowPass.type === "password") {
        inpShowPass.setAttribute('type', 'text');  
    }else{
        inpShowPass.setAttribute('type', 'password');
    }
}
var e = document.getElementById("ddlViewBy");
function show(){
  var as = document.forms[0].ddlViewBy.value;
  var strUser = e.options[e.selectedIndex].value;
  console.log(as, strUser);
}
e.onchange=show;
show();
})


