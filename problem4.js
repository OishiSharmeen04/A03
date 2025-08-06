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