let myLeads = [];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

let LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (LeadsFromLocalStorage) {
  myLeads = LeadsFromLocalStorage;
  renderLeads();
}

inputEl.addEventListener("keypress", (Event) => {
  if (Event.key == "Enter") {
    Event.preventDefault();
    inputBtn.click();
  }
});

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = null;
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});
deleteBtn.addEventListener("keypress", (Event) => {
  if (Event.key == "Enter") {
    deleteBtn.dblclicl();
  }
});

function renderLeads() {
  let listitems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listitems += `
    <li>
    <a href= "${myLeads[i]}" target="_blank"> ${myLeads[i]}</a> 
    </li>
    `;
  }
  ulEl.innerHTML = listitems;
}
