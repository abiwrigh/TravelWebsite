// After DOM is loaded, register event handlers
window.addEventListener("DOMContentLoaded", function() {

    let passwordInput = document.querySelector("#txtPassword");

    let usernameInput = document.querySelector("#txtUserName");

    let passwordMatch = document.querySelector("#txtPasswordMatch");

    let emailInput = document.querySelector("#txtEmail");

    let seePassword = document.querySelector("#chkPassword");

    let checkName = document.querySelector("#txtName");

    // from w3schools
    passwordInput.onfocus = function() {

        document.getElementById("messagePass").style.display = "block";

    }

    passwordInput.onblur = function() {

        document.getElementById("messagePass").style.display = "none";

      }

    passwordInput.addEventListener("keydown", preventSpaces);

    passwordInput.addEventListener("input", checkPassword);

    usernameInput.addEventListener("keydown", preventSpaces);

    usernameInput.addEventListener("input", checkUsername);

    usernameInput.addEventListener("input", usernameAvailibity);

    passwordMatch.addEventListener("input", checkPasswordMatch);

    emailInput.addEventListener("keydown", preventSpaces);

    emailInput.addEventListener("input", checkEmail); 

    seePassword.addEventListener("click", showPassword); 

    checkName.addEventListener("input", checkNameForm); 

    document.getElementById('newUser').onsubmit = function() {

        return validateForm();

    }

 });

 var passwordOkay = false;

 var usernameOkay = false;
    
 var nameOkay = false;

 var emailOkay = false;

 function preventSpaces(event) {

    // Ignore space input 
    if (event.key == " ") {

       event.preventDefault();   

    }
 }

function checkNameForm(){

    let name = this.value;

    let nameWord = "";

    if (name.length == 0 ) {

        nameWord = "Please Enter Name";
  
        nameOkay = false;
  
        document.getElementById("correctName").style.setProperty("color", "red");
     }
     else{
        nameOkay = true;
     }

     document.querySelector("#correctName").innerHTML = nameWord;

}

function checkPassword() {

   let password = this.value;

   let strengthWord = "";

   let lowercaseWord = "";

   let uppercaseWord = "";

   let numberWord = "";

   let specaialWord = "";

   let passwordMessage = "";

   let lowercase = false;

   let checkUpper = false;

   let checkNumber = false;

   let checkChar = false;

   let checkPasswordLength = false;

   document.getElementById("headerPass").innerHTML = "Password Must Have The Following";

   
   document.getElementById("messagePass").style.backgroundColor = "#f4e10d";

   document.getElementById("messagePass").style.boxShadow = "1em 1em 1em rgba(0,0,0,.7)";

   document.getElementById("messagePass").style.maxHeight = "50%";

   document.getElementById("messagePass").style.maxWidth = "50%";

   document.getElementById("messagePass").style.marginLeft = "25%";
   // from W3Schools
   var lowerCaseLetters = /[a-z]/g;

   var upperCaseLetters = /[A-Z]/g;

   var numbers = /[0-9]/g;

   // from https://stackoverflow.com/questions/32311081/check-for-special-characters-in-string
   var specaialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;

   // Password should be long enough
   if (password.length < 6 ){

    strengthWord = "Too Short";

    document.getElementById("strengthPassword").style.setProperty("color", "purple");

    passwordOkay = false;
   }

   else if (password.length >= 6 && password.length < 7) {

      strengthWord = "Weak";

      checkPasswordLength = true;

      document.getElementById("strengthPassword").style.setProperty("color", "green");
   }

    else if (password.length >= 7 && password.length < 9) {

        strengthWord = "Moderate";

        checkPasswordLength = true;

        document.getElementById("strengthPassword").style.setProperty("color", "orange");
    }

   
    else if (password.length >= 9 && password.length < 15) {

       strengthWord = "Strong";

       checkPasswordLength = true;

       var strenth = document.getElementById("strengthPassword").style;

       var setStyle = strenth.setProperty("color", "red");   

    }
    
    else if (password.length >= 15){

        strengthWord = "Too Long";

        checkPasswordLength = false;

        document.getElementById("strengthPassword").style.setProperty("color", "purple");

        passwordOkay = false;

    }

    if (password.match(lowerCaseLetters)){

        lowercase = true;

        lowercaseWord = "Lowercase Valid";

        document.getElementById("lowerCase").style.setProperty("color", "green");
    }
    else {

        lowercaseWord = "Need Lowercase";

        document.getElementById("lowerCase").style.setProperty("color", "red");

        passwordOkay = false;

    }

    if (password.match(upperCaseLetters)){

        checkUpper = true;

        uppercaseWord = "Uppercase Valid";

        document.getElementById("upperCase").style.setProperty("color", "green");
    }
    else {

        uppercaseWord = "Need Uppercase";

        document.getElementById("upperCase").style.setProperty("color", "red");

        passwordOkay = false;
    }

    if (password.match(numbers)){

        checkNumber = true;

        numberWord = "Number Valid";

        document.getElementById("number").style.setProperty("color", "green");
    }
    else {

        numberWord = "Need Number";

        document.getElementById("number").style.setProperty("color", "red");

        passwordOkay = false;
    }

    if (password.match(specaialChar)){

        checkChar = true;

        specaialWord = "Special Character Valid";

        document.getElementById("specailChar").style.setProperty("color", "green");
    }
    else {

        specaialWord = "Need Special Character";

        document.getElementById("specailChar").style.setProperty("color", "red");

        passwordOkay = false;
    }

    if (checkPasswordLength == true && checkUpper == true && checkNumber == true && lowercase == true && checkChar == true){

        passwordMessage = "Great Password";

        document.getElementById("headerPass").style.display = "none";
    
        document.getElementById("lowerCase").style.display = "none";

        document.getElementById("upperCase").style.display = "none";

        document.getElementById("number").style.display = "none";

        document.getElementById("specailChar").style.display = "none";

        passwordOkay = true;
        
    }
    // Display document messages 
    document.querySelector("#strengthPassword").innerHTML = strengthWord;

    document.querySelector("#lowerCase").innerHTML = lowercaseWord;

    document.querySelector("#upperCase").innerHTML = uppercaseWord;

    document.querySelector("#number").innerHTML = numberWord;

    document.querySelector("#specailChar").innerHTML = specaialWord;

    document.querySelector("#checkPassword").innerHTML = passwordMessage;

    

 }

function showPassword() {

    let chkPass = document.getElementById("txtPassword");

    if (chkPass.type === "password") {
        
      chkPass.type = "text";

    } 

    else {

      chkPass.type = "password";

    }
}

function checkUsername(){

    let username = this.value;

    let usernameWord = "";

   if (username.length < 6 ){

    usernameWord = "Too Short";

    document.getElementById("correctUsername").style.setProperty("color", "purple");

    document.getElementById("txtAvailble").style.display = "none";

    usernameOkay = false;

   }

   if (username.length >= 6 && username.length < 15 ){

    usernameWord = "Perfect";

    document.getElementById("correctUsername").style.setProperty("color", "red");

    document.getElementById("txtAvailble").style.display = "block";

    usernameOkay = true;

   }

   if (username.length >= 15 ){

    usernameWord = "Too Long";

    document.getElementById("correctUsername").style.setProperty("color", "purple");

    document.getElementById("txtAvailble").style.display = "none";

    usernameOkay = false;

   }

   document.querySelector("#correctUsername").innerHTML = usernameWord;
}

function checkPasswordMatch() {

    let password = this.value;

    let passwordCheckWord = "";


    if (document.getElementById("txtPassword").value == password){
        
        passwordCheckWord = "Good To Go!";
    }

    else {

        passwordCheckWord = "Passwords Don't Match";

    }

    document.querySelector("#passwordMatch").innerHTML = passwordCheckWord;
}

function checkEmail(){

    let email = this.value;

    let emailWord = "";

    if (email.length == 0 ) {

        emailWord = "Please Enter Email";
  
        emailOkay = false;
  
        document.getElementById("correctEmail").style.setProperty("color", "red");
     }
     else{
        emailOkay = true;
     }

     document.querySelector("#correctEmail").innerHTML = emailWord;


}

function validateForm() {

    let passMismatch = "";

    let passWrong = "";

    let userWrong= "";

    let emailWrong= "";

    if (document.getElementById("txtPassword").value != document.getElementById("txtPasswordMatch").value) {

        passMismatch = "Passwords Must Match";

        document.getElementById("passwordMismatch").style.display = "block";

        document.getElementById("passwordMismatch").style.setProperty("color", "red");

        document.querySelector("#passwordMismatch").innerHTML = passMismatch;
        
        return false;

    }

    else if(passwordOkay == false){

        passWrong = "Password Does Not Meet Requirements";

        document.getElementById("passwordWrongInput").style.display = "block";

        document.getElementById("passwordWrongInput").style.setProperty("color", "red");

        document.querySelector("#passwordWrongInput").innerHTML = passWrong;

        return false;
    }

    else if(usernameOkay == false){

        userWrong = "Username Does Not Meet Requirements";

        document.getElementById("usernameWrongInput").style.display = "block";

        document.getElementById("usernameWrongInput").style.setProperty("color", "red");

        document.querySelector("#usernameWrongInput").innerHTML = userWrong;

        return false;
    }

    else if(emailOkay == false){

        emailWrong = "Email Must Be Correct Format";

        document.getElementById("correctEmailFormat").style.display = "block";

        document.getElementById("correctEmailFormat").style.setProperty("color", "red");

        document.querySelector("#correctEmailFormat").innerHTML = emailWrong;

        return false;
    }


    else {

        document.getElementById("passwordMismatch").style.display = "none";
        
        document.querySelector("#passwordMismatch").innerHTML = passMismatch;
        
        document.getElementById("passwordWrongInput").style.display = "none";
        
        document.querySelector("#passwordWrongInput").innerHTML = passWrong;

        document.getElementById("usernameWrongInput").style.display = "none";
        
        document.querySelector("#usernameWrongInput").innerHTML = userWrong;

        document.getElementById("correctEmailFormat").style.display = "none";
        
        document.querySelector("#correctEmailFormat").innerHTML = userWrong;

    }

    return true;
}

function usernameAvailibity() {
    let str=this.value;

    if (str.length == 0) {

        document.getElementById("txtAvailble").innerHTML = "";

        return;

      } 
      
      else {

        const xmlhttp = new XMLHttpRequest();

        xmlhttp.onload = function() {

          document.getElementById("txtAvailble").innerHTML = this.responseText;

          if(document.getElementById("txtAvailble").innerHTML == "Not Available"){

            document.getElementById("correctUsername").style.display = "none";

            usernameOkay = false;

          }

        }

      xmlhttp.open("GET", "availble.php?q=" + str);

      xmlhttp.send();

      }

  }