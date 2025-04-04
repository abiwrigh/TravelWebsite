 // After DOM is loaded, register event handlers
window.addEventListener("DOMContentLoaded", function() {
	var longLocation = 44.475883;
    var latLocation = -73.212074;
	 //#####################################################################
 //This is the API I used for the map section of my Javascript 
 //link is below, I've edited to fit my project
 //https://leafletjs.com/examples/quick-start/example-basic.html is the source I 

const map = L.map('map').setView([longLocation, latLocation], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {

    maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);


//###################################################################### To here

let burlington = L.marker([44.475883, -73.212074]).addTo(map);

burlington.bindPopup("<b>Burlington, Vermont!</b><button id='burlingtonB' onclick='addPlace(\"burlingtonB\")' class='mapButton'>ADD</button><br>").openPopup();

let bbco = L.marker([44.456787, -73.220562]).addTo(map);

bbco.bindPopup("<b>Burlington Beer Company!</b><button id='bbcoB' onclick='addPlace(\"bbcoB\")' class='mapButton'>ADD</button><br>").openPopup();

let mayday = L.marker([44.486942,-73.208733]).addTo(map);

mayday.bindPopup("<b>May Day!</b><button id='maydayB' onclick='addPlace(\"maydayB\")' class='mapButton'>ADD</button><br>").openPopup();

let thornnroot = L.marker([44.477818, -73.21244]).addTo(map);

thornnroot.bindPopup("<b>Thorn and Roots!</b><button id='thornB' onclick='addPlace(\"thornB\")' class='mapButton'>ADD</button><br>").openPopup();

let stonesoup = L.marker([44.477007, -73.211399]).addTo(map);

stonesoup.bindPopup("<b>Zabby & Elf's Stone Soup!</b><button id='stoneB' onclick='addPlace(\"stoneB\")' class='mapButton'>ADD</button><br>").openPopup();

let cityMarket = L.marker([44.478097, -73.210627]).addTo(map);

cityMarket.bindPopup("<b>City Market CO-OP!</b><button id='cityB' onclick='addPlace(\"cityB\")' class='mapButton'>ADD</button><br>").openPopup();

let oge = L.marker([44.479024, -73.212939]).addTo(map);

oge.bindPopup("<b>Outdoor Gear Exchange!</b><button id='ogeB' onclick='addPlace(\"ogeB\")' class='mapButton'>ADD</button><br>").openPopup();

let homeport = L.marker([44.478798, -73.212483]).addTo(map);

homeport.bindPopup("<b>Homeport!</b><button id='homeB' onclick='addPlace(\"homeB\")' class='mapButton'>ADD</button><br>").openPopup();

let petco = L.marker([44.471064, -73.188609]).addTo(map);

petco.bindPopup("<b>Petco!</b><button id='petB' onclick='addPlace(\"petB\")' class='mapButton'>ADD</button><br>").openPopup();

let ace = L.marker([44.477144, -73.213545]).addTo(map);

ace.bindPopup("<b>City Hardware!</b><button id='aceB' onclick='addPlace(\"aceB\")' class='mapButton'>ADD</button><br>").openPopup();

let surfclub = L.marker([44.464401, -73.219323]).addTo(map);

surfclub.bindPopup("<b>Burlington Surf Club!</b><button id='surfB' onclick='addPlace(\"surfB\")' class='mapButton'>ADD</button><br>").openPopup();

let sailing = L.marker([44.483268, -73.224258]).addTo(map);

sailing.bindPopup("<b>Lake Champlain Community Sailing Center!</b><button id='sailB' onclick='addPlace(\"sailB\")' class='mapButton'>ADD</button><br>").openPopup();

let kru = L.marker([44.480294, -73.212596]).addTo(map);

kru.bindPopup("<b>Kru Coffee!</b><button id='kruB' onclick='addPlace(\"kruB\")' class='mapButton'>ADD</button><br>").openPopup();

let skinnyp = L.marker([44.476991, -73.219516]).addTo(map);

skinnyp.bindPopup("<b>The Skinny Pancake Burlington!</b><button id='skinnyB' onclick='addPlace(\"skinnyB\")' class='mapButton'>ADD</button><br>").openPopup();

let blackcap = L.marker([44.479047,-73.21251]).addTo(map);

blackcap.bindPopup("<b>Black Cap Coffee & Bakery!</b><button id='blackcB'  onclick='addPlace(\"blackcB\")' class='mapButton'>ADD</button><br>").openPopup();

let camels = L.marker([44.247966, -72.941945]).addTo(map);

camels.bindPopup("<b>Camels Hump State Park!</b><button id='camelB' class='mapButton' onclick='addPlace(\"camelB\")'>ADD</button><br>").openPopup();

let rockpoint = L.marker([44.496727, -73.240415]).addTo(map);

rockpoint.bindPopup("<b>Rock Point Hiking Area!</b><button id='rockB' class='mapButton' onclick='addPlace(\"rockB\")'>ADD</button><br>").openPopup();

let kwiniaska = L.marker([44.393883, -73.199308]).addTo(map);

kwiniaska.bindPopup("<b>Kwiniaska Golf Course and Driving Range!</b><button id='kwiniB' class='mapButton'  onclick='addPlace(\"kwiniB\")'>ADD</button><br>").openPopup();

let bcountry = L.marker([44.459515, -73.195252]).addTo(map);

bcountry.bindPopup("<b>Burlington Country Club!</b><button id='bcountryB' class='mapButton' onclick='addPlace(\"bcountryB\")'>ADD</button><br>").openPopup();



if (document.getElementById("nameMap").innerHTML == "") {

    setInterval( mapHide, 1);

 }
 
 });
 
 


 function mapHide(){


    let mapButtons = document.getElementsByClassName("mapButton");

    for (let i = 0; i < mapButtons.length; i++) {

        mapButtons[i].style.display = "none";
    }
}


function addPlace(id){
	
	
	let username=document.getElementById('nameMap').innerHTML;

	

	let str="";

	switch (id) {

        case "burlingtonB":

            str = "Burlington";

            break;

        case "bbcoB":

            str = "Burlington Beer Company";

            break;

        case "thornB":

            str = "Thorn and Roots"; 

            break;

		case "burlingtonB":

            str = "Burlington";

            break;

        case "maydayB":

            str = "May Day";

            break;

        case "stoneB":

            str = "Zabby & Elf's Stone Soup"; 

            break;

	    case "cityB":

            str = "City Market CO-OP";

            break;

        case "ogeB":

            str = "Outdoor Gear Exchange";

            break;

        case "homeB":

            str = "Homeport"; 

            break;

	    case "petB":

            str = "Petco";

            break;

        case "aceB":

            str = "City Hardware";

            break;

        case "surfB":

            str = "Burlington Surf Club"; 

            break;

	    case "sailB":

            str = "Lake Champlain Community Sailing Center";

            break;

        case "kruB":

            str = "Kru Coffee"; 

            break;

	    case "skinnyB":

            str = "The Skinny Pancake Burlington";

            break;

        case "blackcB":

            str = "Black Cap Coffee & Bakery";

            break;

        case "camelB":

            str = "Camels Hump State Park"; 

            break;

	    case "rockB":

            str = "Rock Point Hiking Area"; 

            break;

	    case "kwiniB":

            str = "Kwiniaska Golf Course and Driving Range";

            break;

    
        case "bcountryB":

            str = "Burlington Country Club"; 

            break;

	}

    if (str.length > 0) {

        const xmlhttp = new XMLHttpRequest();

        xmlhttp.onload = function() {

			location.replace("https://awrigh30.w3.uvm.edu/cs2450/final/account.php?userId="+username);
        }

      xmlhttp.open("GET", "add.php?q=" + str + "&s="+username);

      xmlhttp.send();

    }


}



