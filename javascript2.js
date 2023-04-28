for (let i=0;i<=100;i++){
//note
console.log(i)

}
let j = 1;




let names = new Array();
names =["Naveen","Pradeep","rajesh","kamal","prashanth","swamy","mallesh"];
let number = prompt("Entr id");

for(let i= 0;i<=names.length;i++){

    if(number == i){
        console.log(names[i])
    }
    console.log(names[i])
}





let student;
student = prompt("?");


names =["Naveen","Pradeep","rajesh","kamal","prashanth","swamy","mallesh"];

console.log(names[student]);






let time = 12;
let details =["Goodmorning","Ga","gn","ge", "Select valid number"]
if(time>=25){
    console.log(details[4])
}else if(time>=20){
    console.log(details[2])
}else if(time>=18){
    console.log(details[3])
}else if(time>=12){
    console.log(details[1])
}else if (time<=11){
    console.log(details[0])
}else{
    console.log()
}




let month = prompt("Select a Month");
if (month > 12 ){
    console.log("Please select a valid  month");
}else if((month >= 11) || (month <=3)){
    console.log("Winter");//month is G= 11 or month is L=3
}else if(month >=6 ){
    console.log("Rainy");//month is G= 6
}else if(month >= 3){
    console.log("Summer");//month is G= 3
}




for (let i = 0;i<10;i++){
    for (let s=i;s>0;s--){
        document.write("* ")
    }
    document.write("<br/>")
}

for(let i=10;i>0;i--){
    for(let s=i;s>0;s--){
        document.write("* ")
    }
    document.write("<br/>")
}





var cubes = [
    ["1.1.string", "1.2.string", ["1.3.1", "1.3.2", "1.3.3"]],
    15365,
    ["2.1.string", "2.2.string"],
    ["3.1.string", "3.2.string"],
    "424"];

for (let i = 0; i < cubes.length; i++) { // 1st
    if (typeof (cubes[i]) == "string" || typeof (cubes[i]) == "number") {
        console.log(cubes[i]);
    } else {
        for (let p = 0; p < cubes[i].length; p++) { // 2nd
            if (typeof (cubes[i][p]) == "string") {
                console.log(cubes[i][p]);
            } else {

                for (let u = 0; u < cubes[i][p].length; u++) { // 3

                    console.log(cubes[i][p][u]);
                }
            }
        }
    }
}
