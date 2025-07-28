import './style.scss';

let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener('click', () => {
  myLeads.push(inputEl.value);
  console.log(myLeads);
})

for (let i = 0; i < myLeads.length; i++){
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}

 



