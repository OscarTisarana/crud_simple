****JavaScript****

    let nameInput = document.getElementById('name');
let ageInput = document.getElementById('age');
let gpaInput = document.getElementById('gpa');

//  localStorage.clear()
// localStorage.getItem()
let data = JSON.parse(localStorage.getItem("data")) || [];

const save = () => {
    console.log(nameInput,ageInput,gpaInput)
    Name = nameInput.value;
    Age = ageInput.value;
   Gpa = gpaInput.value;

  


   let details = {
    name:Name,
    age:Age,
    gpa:Gpa
   }
   console.log(details)

//    console.log(name,age,gpa)
   data.push(details);
   localStorage.setItem("data",JSON.stringify(data));
   console.log(data);
   output();


}

const output = () => {
    const outputDiv = document.getElementById('output');

    let studentData = "";
    for (let i = 0; i < data.length; i++) {
        
       studentData +=` <div class="output_data">
            <h3>Name :${data[i].name} </h3>
            <h3>Age:${data[i].age} </h3>
            <h3>Gpa:${data[i].gpa} </h3>
            <button onclick = "deleteData(${i})"> Delete </button>
           <button onclick = "editData(${i})"> Edit </button>
        </div>`;
        
    }
    outputDiv.innerHTML = studentData;
}

const deleteData = (index) => {
    data.splice(index,1);
    localStorage.setItem("data",JSON.stringify(data));
    output();

}

const editData = (index) => {
    alert('click')
    let editdata = `
    <input id="newname" type="text"  placeholder="Enter Name" value = "${data[index].name}">
    <input id="newage" type="number" placeholder="Enter Age" value = "${data[index].age}">
    <input id="newgpa" type="number" placeholder="Enter GPA" value = "${data[index].gpa}">
    <button id="submit" type="submit" onclick="updateData(${index})">Add</button>
    `
    document.getElementById('inputdiv').innerHTML = editdata;
}

const updateData = (index) => {
  let newName = document.getElementById('newname');
  let newAge = document.getElementById('newage');
  let newGpa = document.getElementById('newgpa');

  data[index] = {
    name : newName.value,
    age : newAge.value,
    gpa: newGpa.value
  }

  localStorage.setItem("data",JSON.stringify(data));
    output();

    document.getElementById('inputdiv').innerHTML = `
    <input id="name" type="text"  placeholder="Enter Name">
    <input id="age" type="number" placeholder="Enter Age">
    <input id="gpa" type="number" placeholder="Enter GPA">
    <button id="submit" type="submit" onclick="save()">Add</button>
    `;


}

output();

let nameInput = document.getElementById('name');
let ageInput = document.getElementById('age');
let gpaInput = document.getElementById('gpa');

let data = JSON.parse(localStorage.getItem("data")) || [];

const save = () => {
    console.log(nameInput,ageInput,gpaInput)
    Name = nameInput.value;
    Age = ageInput.value;
    Gpa = gpaInput.value;

  


   let details = {
    name:Name,
    age:Age,
    gpa:Gpa
   }
   console.log(details)


   data.push(details);
   localStorage.setItem("data",JSON.stringify(data));
   console.log(data);
   output();


}

const output = () => {
    const outputDiv = document.getElementById('output');

    let studentData = "";
    for (let i = 0; i < data.length; i++) {
        
       studentData +=` <div class="output_data">
            <h3>Name :${data[i].name} </h3>
            <h3>Age:${data[i].age} </h3>
            <h3>Gpa:${data[i].gpa} </h3>
            <button onclick = "deleteData(${i})"> Delete </button>
           <button onclick = "editData(${i})"> Edit </button>
        </div>`;
        
    }
    outputDiv.innerHTML = studentData;
}

const deleteData = (index) => {
    data.splice(index,1);
    localStorage.setItem("data",JSON.stringify(data));
    output();

}

const editData = (index) => {
    alert('click')
    let editdata = `
    <input id="newname" type="text"  placeholder="Enter Name" value = "${data[index].name}">
    <input id="newage" type="number" placeholder="Enter Age" value = "${data[index].age}">
    <input id="newgpa" type="number" placeholder="Enter GPA" value = "${data[index].gpa}">
    <button id="submit" type="submit" onclick="updateData(${index})">Add</button>
    `
    document.getElementById('inputdiv').innerHTML = editdata;
}

const updateData = (index) => {
  let newName = document.getElementById('newname');
  let newAge = document.getElementById('newage');
  let newGpa = document.getElementById('newgpa');

  data[index] = {
    name : newName.value,
    age : newAge.value,
    gpa: newGpa.value
  }

  localStorage.setItem("data",JSON.stringify(data));
    output();

    document.getElementById('inputdiv').innerHTML = `
    <input id="name" type="text"  placeholder="Enter Name">
    <input id="age" type="number" placeholder="Enter Age">
    <input id="gpa" type="number" placeholder="Enter GPA">
    <button id="submit" type="submit" onclick="save()">Add</button>
    `;
}

output();