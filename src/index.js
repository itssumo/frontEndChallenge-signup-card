let tField = document.querySelectorAll("input");
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
document.querySelector("button").addEventListener("click", (e)=>{
e.preventDefault();
console.log(tField[2].value);
if(tField[0].value==""){
    document.getElementById("fname").style.display = "block"
    tField[0].classList.add('input-error'); 
}else if(tField[0].value!=""){
    document.getElementById("fname").style.display = "none"
    tField[0].classList.remove('input-error');
}
if(tField[1].value==""){
    document.getElementById("lname").style.display = "block"
    tField[1].classList.add('input-error'); 
}else if(tField[1].value!=""){
    document.getElementById("lname").style.display = "none"
    tField[1].classList.remove('input-error');
}
if(tField[3].value==""){
    document.getElementById("password").style.display = "block"
    tField[3].classList.add('input-error'); 
}else if(tField[3].value!=""){
    document.getElementById("password").style.display = "none"
    tField[3].classList.remove('input-error');
}
if(tField[2].value.match(mailformat)==null){
    document.getElementById("email").innerHTML = "Looks like this is not an email";
    document.getElementById("email").style.display = "block"
    tField[2].classList.add('input-error');  
}else{
    document.getElementById("email").style.display = "none"
    tField[2].classList.remove('input-error');   
}

console.log(tField[2].value.match(mailformat));
});