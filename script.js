// console.log('Hello!');
// document.write('hello')

let addBtn = document.getElementById("addbtn");
let editBtn = document.getElementById("editbtn");
let deleteBtn = document.getElementById("deletebtn");
let updateBtn = document.getElementById("updatetbtn");

//add new
addBtn.addEventListener(`click`,function(){
    addData();
    clearInput();
})

function addData(){
    if (validateInput()){
    let name = document.getElementById("nameInput");
    let birth = document.getElementById("birthInput");
    let id = document.getElementById("idInput");
    let email = document.getElementById("emailInput");
    let data= localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
    data.push({    
        name : name.value,
        birth : birth.value,
        id : id.value,
        email : email.value
    });
        // console.log(data)
    localStorage.setItem("list", JSON.stringify(data))
    viewData();
}}

//check input
    function validateInput(){
        let name = document.getElementById("nameInput").value;
        let birth = document.getElementById("birthInput").value;
        let id = document.getElementById("idInput").value;
        let email = document.getElementById("emailInput").value;  
        if(name && birth && id && email){
         return true;
        } else { alert('Vui lòng nhập đầy đủ thông tin trước khi thêm!');
        }
    }

// Print data
function viewData(){
    let data= localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
   let listHtml = 
            ` <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Birth</th>
                <th>ID</th>
                <th>Email</th>
                <th>Action</th>
            </tr>`
data.map((value,index)=>{
    listHtml += `<tr>
    <td>${index+1}</td>
    <td>${value.name}</td>
    <td>${value.birth}</td>
    <td>${value.id}</td>
    <td>${value.email}</td>
    <td>
    <button onclick = "editData(${index})">Edit</button>
    <button onclick = "deleteData(${index})">Delete</button>

    </td>
        </tr>`
})
document.querySelector(".table").innerHTML = listHtml
}
//edit data
function editData(index){
    // console.log(index)
    let data= localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
    document.getElementById("nameInput").value = data[index].name;
    document.getElementById("birthInput").value = data[index].birth;
    document.getElementById("idInput").value = data[index].id;
    document.getElementById("emailInput").value = data[index].email;
    document.getElementById("addbtn").style.display ="none";
    document.getElementById("updatetbtn").style.display = "block";
    document.getElementById("index").value = index;
    
}
//update
updateBtn.addEventListener(`click`,function(){
    update();
})
function update(){
    
    let data= localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
    let index = document.getElementById("index").value
    data[index] ={
        name : document.getElementById("nameInput").value,
        birth : document.getElementById("birthInput").value,
        id : document.getElementById("idInput").value,
        email : document.getElementById("emailInput").value
    }
    localStorage.setItem("list",JSON.stringify(data))
    document.getElementById("addbtn").style.display ="block"
    document.getElementById("updatetbtn").style.display = "none"
    viewData();
    clearInput()
}
//delete data
function deleteData(index){
    // console.log(`delete`)
    let data= localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
    if(confirm("Bạn có chắc muốn xóa?")){
        data.splice(index,1)
    }
    localStorage.setItem("list",JSON.stringify(data))
    viewData();  
}
//reset input
function clearInput(){
    nameInput.value = "";
    birthInput.value = "";
    idInput.value = "";
    emailInput.value = "";
    console.log(nameInput.value)
}
