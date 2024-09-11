//login page 
let password =document.querySelector('#password');
let lock =document.querySelector('.lock');
let icon =document.querySelector(".icon");

lock.addEventListener("click",function() {
 if(password.type === "password"){
    password.type = 'text';
    icon.src ="img/eyeopen.png"
    
    
 }
 else{
    password.type = 'password';
     icon.src ="img/eyeclose.png"
   
 }

})