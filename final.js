/** Problem -01 ( Divide the Asset ) */
var area = 475;
//write your code here
var asset = area / 2;
console.log(asset);

/** Problem -02 ( Cycle or Laptop ) */
var money = 75000;
//write your code here
if(money >=25000) {
    console.log("Laptop");
}
else if(money >=10000) {
    console.log("Cycle");
}
else {
    console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 7 ;
//write your code here
for(var i = 1; i <= lastDay; i++) {
    if(i % 3 === 0) {
        console.log(i + " - medicine");
    }
    else {
        console.log(i + " - rest");
    }
}

/** Problem 04 - (Delete / Store) */
var fileName= "data.docx";
//write your code here
var firstChar = fileName[0];
if(firstChar === "#" || fileName.slice(-4) === ".pdf" || fileName.slice(-5) === ".docx") {
    console.log("Store");
}
else {
    console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student= {name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
var email = student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(email);

/** Problem 06 :  (Current Salary )  */
var experience = 5;
var startingSalary = 25000;
//write your code here
var currentSalary = startingSalary * Math.pow(1 + 0.05, experience);
console.log(currentSalary.toFixed(2));