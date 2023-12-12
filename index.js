const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = []

let leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsLocalStorage)  {
    myLeads = leadsLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) 

    renderLeads()

    console.log(localStorage.getItem("myLeads"))
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

/*
inputBtn.addEventListener("click", function() {

    const li = document.createElement("li")
    const anchor = document.createElement("a")
    anchor.href = inputEl.value
    li.textContent = anchor.href
    ulEl.append(li)
    inputEl.value = ""
})

*/
