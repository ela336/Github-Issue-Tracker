let signinbtn=document.getElementById("sign-in-btn");
let username=document.getElementById("username");
let password= document.getElementById("password");

function signin() {
    if(username.value === "admin" && password.value === "admin123") {
        
        alert("Sign-in successful!");
        window.location.assign("issues.html");
    } else {
        
        alert("Invalid username or password.");
    }
}