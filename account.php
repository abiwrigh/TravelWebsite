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

$userId = isset($_GET['userId']) ? (int) getGetData('userId') : 0;

$sqlVerifyNewUser= 'SELECT * FROM tblUser WHERE pmkUserId = ? ';

$dataVerify=array($userId);

$userDetails = $thisDataBaseReader->select($sqlVerifyNewUser, $dataVerify);


$name=$userDetails[0]['fldName'];

print '<p id="userNameAccountPage" style="display: none;">'.$userId.'</p>';


?>

<main id="mainAccount">

	<section id="firstColAccount" class="mainSections"> 

    <h1 id="timeOfDay"></h1>

    <p>Thank you for coming back to Luster! We're genuinely delighted to be a part of your daily explorations, helping you find new activities, delicious food, and great stores. Your continued trust and support inspire us to enhance your experience further. Here's to many more adventures together!</p>
    
    <h3>Profile: <?php print $name ?></h3>

    <?php 

        $sql= 'SELECT * FROM tblUserFavorites WHERE fnkUserId = ? ';

        $data=array($userId);

        $favorites = $thisDataBaseReader->select($sql, $data);
 

        print '<h3>FAVORITES</h3>';

        print '<ul>';

        foreach($favorites as $favorite){

            print '<li>'. $favorite['fldFavorites1'] .'</li>';

        }

        print '</ul>';
    ?>
		
    
    </section>

    <section id="secondColAccount" class="mainSections">

    <p>Click the map link to explore nearby activities, food spots, and stores. Discover local gems and easily add favorites, like Luster, to your list for quick access. Whether it's dining, shopping, or leisure, find what suits your taste and save them for future visits with just a click.</p>

    <button id="mapLinkLogin" class= "formButton">Map</button>

    </section>
	
	<section id="thirdColAccount">
    
    <p>My Account Page: Add favorites, view local map, manage settings, update profile, explore personalized recommendations.</p>

    <img src="beach.jpg"  id= "accountImg" alt="Beach Ocean, Green Grass" /> 
    
    </section>

</main>

<?php 
include 'footer.php';
?>
