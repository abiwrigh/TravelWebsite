// After DOM is loaded, register event handlers
window.addEventListener("DOMContentLoaded", function() {

    let signInPage = document.querySelector("#signInLink");

    let accountPage = document.querySelector("#accountLink");

    let mapPageLink = document.querySelector("#mapLink");

    signInPage.addEventListener("click", signIn);

    accountPage.addEventListener("click", createAccount);

    mapPageLink.addEventListener("click", mapPage);

  

   
 });

 let x = 0;

 setInterval( function() { changeImg(x++) } , 800);

 function signIn() {

    location.replace("https://awrigh30.w3.uvm.edu/cs2450/final/signIn.php");

}

function createAccount() {

    location.replace("https://awrigh30.w3.uvm.edu/cs2450/final/form.php");

}


function mapPage() {

    location.replace("https://awrigh30.w3.uvm.edu/cs2450/final/map.php");

}

function changeImg(number) {

    
    const homeImgs = ["alps.jpg" , "salad.jpg" , "wicked.jpg" , "skii.jpg"];

    if(number>2){

        x = 0;
    }

    document.getElementById("homeImg").src = homeImgs[number];


}