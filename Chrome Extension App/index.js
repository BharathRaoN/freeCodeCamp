let myLead = '["jksdhfksajh","kjsdahfkjh"]';

myLead = JSON.parse(myLead);

myLead.push("j;asjk");

myLead = JSON.stringify(myLead);

console.log(typeof myLead);
myLead = JSON.parse(myLead);

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

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
