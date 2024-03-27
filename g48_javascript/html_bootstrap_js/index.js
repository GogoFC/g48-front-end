"use strict";


// sample data
const data = [
    { firstname: "John", lastname: "Doe", email: "john@example.com" },
    { firstname: "Mary", lastname: "Moe", email: "mary@example.com" },
    { firstname: "July", lastname: "Dooley", email: "july@example.com" },
    { firstname: "Simon", lastname: "Elbrink", email: "simon@example.com" },
  ];


function showTable(){
    console.log("TableShow() has been executed!");

    if(!document.getElementById("dynamicTable")){
        const table = document.createElement("table");
    table.id = "dynamicTable";
    table.classList.add("table", "table-striped");

    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");


    const headerRow = document.createElement("tr");
    const headerText = ["FirstName", "LastName", "Email"];

    headerText.forEach((headerName) => {
        const th = document.createElement("th");
        th.textContent = headerName;
        headerRow.appendChild(th);
    })
    thead.appendChild(headerRow);

    //Appedning table-header to table
    table.appendChild(thead);


    //Create Table Body
    data.forEach((person)=> {
        const row = document.createElement("tr");
        const columns = ["firstname", "lastname", "email"];
        columns.forEach((value) => {
            const td = document.createElement("td");
            td.textContent = person[value];
            row.appendChild(td);
        })
        tbody.appendChild(row);
    })

    table.appendChild(tbody);


    const dataTable = document.getElementById("data-table");
    dataTable.appendChild(table);

    }
    
}


function hideTable(){
    console.log("Tablehide() has been executed!");

    const table = document.getElementById("dynamicTable");

    if(table){
        table.remove();
    }
}