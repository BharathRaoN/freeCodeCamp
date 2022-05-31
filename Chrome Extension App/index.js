let myLeads = [];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

let LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

const tabs = [
  {
    url: "https://www.linkedin.com/in/per-harald-borgen/",
  },
];

if (LeadsFromLocalStorage) {
  myLeads = LeadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", () => {
  myLeads.push(tabs[0].url);
  let sample = JSON.stringify(myLeads);
  localStorage.setItem("myLeads", sample);
  render(myLeads);
});

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
  render(myLeads);
});

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

function render(leads) {
  let listitems = "";
  for (let i = 0; i < leads.length; i++) {
    listitems += `
    <li>
    <a href= "${leads[i]}" target="_blank"> ${leads[i]}</a> 
    </li>
    `;
  }
  ulEl.innerHTML = listitems;
}
