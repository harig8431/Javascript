function convert(){
let C=document.getElementById("input").value;
let F=(C*(9/5))+32;
let result=document.getElementById("result")
result.innerHTML=F +" °F"
}