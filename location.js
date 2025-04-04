window.addEventListener("DOMContentLoaded", function() {
    console.log("hi");
    let changeLocation = document.querySelector("#map");

    changeLocation.addEventListener("click", getLocation);

    

});

const locationMessage = document.getElementById("latlongText");


// #########From W3schools ############
function getLocation() {

    if (navigator.geolocation) {

      navigator.geolocation.watchPosition(showPosition);

    } 
    else { 


        locationMessage.innerHTML = "Geolocation is not supported by this browser.";

    }
  }
      
  function showPosition(position) {

      longLocation = position.coords.longitude;

      console.log(longLocation);

      latLocation = position.coord.latitude;

    

  }