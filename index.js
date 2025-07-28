import './style.scss';

let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");

inputBtn.addEventListener('click', () => {
  myLeads.push(inputEl.value);
})
 



