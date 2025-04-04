// After DOM is loaded, register event handlers
window.addEventListener("DOMContentLoaded", function() {
 
    let passwordInputSign = document.querySelector("#txtPasswordSignIn");

    let usernameInputSign = document.querySelector("#txtUserNameSignIn");

    let checkDatabse = document.querySelector("#txtUserNameSignIn");


    passwordInputSign.addEventListener("keydown", preventSpaces);

    passwordInputSign.addEventListener("input", checkPasswordSign);

    usernameInputSign.addEventListener("keydown", preventSpaces);

    usernameInputSign.addEventListener("input", checkUsernameSign);

    

    

 });

    
 
 function preventSpaces(event) {

    // Ignore space input 
    if (event.key == " ") {

       event.preventDefault();   

    }
 }
 
 function checkUsernameSign() {
   
   
    let usernameSign = this.value;

    let usernameWordSign = "";

   if (usernameSign.length < 6 ){

    usernameWordSign = "There Must Be A Charater Missing";

    document.getElementById("usernameLengthSign").style.setProperty("color", "purple");

   }
   document.querySelector("#usernameLengthSign").innerHTML = usernameWordSign;

 }

 function checkPasswordSign() {
   
   
    let passwordSign = this.value;

    let lengthWordSign = "";
 

    if (passwordSign.length < 6 ){

        lengthWordSign = "There Must Be A Charater Missing";
    
        document.getElementById("passwordLengthSign").style.setProperty("color", "purple");
    
       }
       document.querySelector("#passwordLengthSign").innerHTML = lengthWordSign;

 }


 