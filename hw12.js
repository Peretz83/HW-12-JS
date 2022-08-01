import {myCountries, changeBgColor, changeColor} from "./helpers.js";


let myTitle = document.createElement("h1")
myTitle.className="main-header"
myTitle.innerText = "I love:"
document.body.appendChild(myTitle)
myTitle.style.textAlign = "center"

let myDiv = document.createElement("div")
myDiv.id = "root"
document.body.appendChild(myDiv)
myDiv.style.display= "flex"
myDiv.style.justifyContent= "center"

myDiv.innerHTML+=`
 <form  id="my-form" method="get">
 <label>R:</label>
    <input id="input1" type="range" placeholder="Give value to:">
     <label>G:</label>
    <input id="input2" type="range" placeholder="Give value to:">
     <label>B:</label>
    <input id="input3" type="range" placeholder="Give value to:">
  </form>
`;

let myBtn = document.createElement("button")
myBtn.textContent = "Click here"
myBtn.style.borderRadius = "20px"
myDiv.appendChild(myBtn)

myBtn.addEventListener("click", ()=>{
myTitle.style.backgroundColor = changeBgColor()
myTitle.style.color = changeColor()
})



let mySelect = document.createElement('select')
mySelect.id = "countryList"
mySelect.style.borderRadius = "20px"
mySelect.style.textAlign = "center"

document.body.appendChild(mySelect)


myCountries.map((state) => {
  mySelect.innerHTML += `
  
  <option>${state.country}</option>

  `;
});

mySelect.addEventListener("change", (selectedCountry)=>{
myTitle.textContent = "I love: " + selectedCountry.target.value
myTitle.style.backgroundColor=changeColor()

});



