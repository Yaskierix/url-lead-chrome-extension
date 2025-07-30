import "./style.scss";

let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const clearBtn = document.querySelector("#clear-btn");


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

clearBtn.addEventListener("dblclick", () =>{
  clear();
})

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads();

});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li><a target='_blank' href='${myLeads[i]}'/>${myLeads[i]}</a></li>`;
  }

  ulEl.innerHTML = listItems;
}

function clear(){
  myLeads = [];
  localStorage.clear();
  renderLeads();
}
