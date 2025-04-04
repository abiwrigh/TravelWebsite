<?php
include 'top.php';

function getGetData($field){
    if (!isset($_GET[$field])){
        $data="";
    } else {
        $data = trim($_GET[$field]);
        $data = htmlspecialchars($data);
    
    }
    return $data;
    }
$name="";
$userId = isset($_GET['userId']) ? (int) getGetData('userId') : 0;

$sqlVerifyNewUser= 'SELECT * FROM tblUser WHERE pmkUserId = ? ';

$dataVerify=array($userId);

$userDetails = $thisDataBaseReader->select($sqlVerifyNewUser, $dataVerify);


$name=$userDetails[0]['pmkUserId'];

print '<p id="nameMap">'.$name.'</p>' ?>



<main>

	<section> 

		<h2 id="headMap">What Do You Want To Do Today?</h2>

        <p>Our interactive map feature revolutionizes the way you explore your surroundings, seamlessly integrating with your preferences and location to offer tailored suggestions for your next adventure or coffee shop rendezvous.</p>

        <p>Whether you're craving outdoor excitement, cultural immersion, or simply a cozy spot to enjoy your favorite brew, our interactive map has you covered. Simply specify your desired activity or coffee shop vibe, and watch as Luster's map comes alive with a plethora of options waiting to be explored. </p>
		
      

<p id="latlongText"></p>


		</section>

		<!-- //#####################################################################
			This is the API I used for the map section of my Javascript 
			link is below, 
			https://leafletjs.com/examples/quick-start/example-basic.html
	-->

		

		

		<section id="map"></section>

		<!-- //#####################################################################  -->

		
		<section>
            <p >With Luster's interactive map, the possibilities are endless. Say goodbye to aimless wandering and hello to personalized exploration tailored to your tastes and interests. Whether you're a local looking to uncover hidden gems or a traveler seeking authentic experiences, let our map be your guide to endless adventure and delightful discoveries. </p>

			<p>Click directly on pinpoints on maps to expand location names. This reveals detailed information about places, aiding navigation and understanding. If signed in click the button "ADD" to add to your favorites!</p>
    </section>


   

   
	
	

</main>

<?php 
include 'footer.php';
?>
