let myLead = [];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

localStorage.setItem("myLead", "www.facebook.com");
localStorage.clear();
console.log(localStorage.getItem("myLead"));

inputEl.addEventListener("keypress", (Event) => {
  if (Event.key == "Enter") {
    Event.preventDefault();
    inputBtn.click();
  }
});

inputBtn.addEventListener("click", () => {
  myLead.push(inputEl.value);
  renderLeads();
  inputEl.value = null;
});

function renderLeads() {
  let listitems = "";
  for (let i = 0; i < myLead.length; i++) {
    listitems += `
    <li>
    <a href= "${myLead[i]}" target="_blank"> ${myLead[i]}</a> 
    </li>
    `;
  }
  ulEl.innerHTML = listitems;
}
