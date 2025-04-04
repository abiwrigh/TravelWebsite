// After DOM is loaded, register event handlers
window.addEventListener("DOMContentLoaded", function() {

    let mapPageLinkLogin = document.querySelector("#mapLinkLogin");

    mapPageLinkLogin.addEventListener("click", mapPageLogin);
   
 });

const day = new Date();

        let time = day.getHours();

        let greeting;

        if (time >= 6 && time < 12){
            greeting = "Good Day";
        }

        else if (time >= 12 && time < 18){
            greeting = "Good Afternoon";
        }

        else if (time >= 18 && time < 24){
            greeting = "Good Evening";
        }

        else {
            greeting = "Welcome To Late Night Live"
        }
        
        document.getElementById("timeOfDay").
        innerHTML = greeting;


let userIdGlobal=document.getElementById('userNameAccountPage').innerHTML;

if (userIdGlobal == "" || userIdGlobal == "0") {

    addUser();

 }
 


function mapPageLogin() {

    let userId=document.getElementById('userNameAccountPage').innerHTML;

    location.replace("https://awrigh30.w3.uvm.edu/cs2450/final/map.php?userId="+userId);

 }

 function addUser() {

    document.getElementById("mainAccount").style.visibility = "hidden";

   

    if (confirm("Sign In Or Sign Up!")) {

         location.replace("https://awrigh30.w3.uvm.edu/cs2450/final/index.php");

    } 
    
    else {
        
        document.getElementById("mainAccount").style.visibility = "visible";

        const elements = document.querySelectorAll('.mainSections');

        elements.forEach(function(element) {

            element.style.visibility = 'hidden';

        });
    
        }
    }