const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");
let myLeads = []

let leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsLocalStorage)  {
    myLeads = leadsLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

tabBtn.addEventListener("click", function() {
    chrome.tabs,query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
    render(myLeads)
})


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
