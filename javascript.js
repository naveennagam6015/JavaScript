var person = {name:'Naveen',age:21,class:15};
console.log(person.name);
document.write(person.age)

//   for (let prop in document.body.childNodes) alert(prop);

let month = prompt("Select a month");
if (month > 12) {
    console.log("Please select a valid  month");
} else if (month >= 10) {
    console.log("Winter");
} else if (month >= 6) {
    console.log("Rainy");
} else if (month >= 3) {
    console.log("Summer")
} else if (month < 3) {
    console.log("Winter")
} else {
    console.log("Select A month")
}
 
function myFunction(){ 
    const node = document.createElement("li");
    const textnode = document.createTextNode("Home");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    }