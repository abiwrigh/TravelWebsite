<?php
define ('PHP_SELF', $_SERVER['PHP_SELF']);
define ('PATH_PARTS', pathinfo(PHP_SELF));
?>
<!DOCTYPE html>

<html lang="en">

<head>

	<meta charset="utf-8">

	<title>SEE: https://moz.com/learn/seo/title-tag</title>

	<meta name="author" content="Aigail Wright">

	<meta name="description" content="SEE: https://moz.com/learn/seo/meta-description">
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" type="text/css"
		href="css/custom.css?version=<?php print time(); ?>">

	<link rel="stylesheet" type="text/css" media="(max-width:800px)"
		href="css/tablet.css?version=<?php print time(); ?>">

	<link rel="stylesheet" type="text/css" media="(max-width:600px)"
		href="css/phone.css?version=<?php print time(); ?>">
	
	<!--- #######################################
			https://www.w3schools.com/howto/howto_google_fonts.asp	

			font					--->
	<link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'>
	

	<!---####################### See map.js --->
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />

	<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
	
	<script src="https://code.jquery.com/jquery-3.6.0.min.js" defer></script>

	<script src="password.js" defer></script>

	<script src="about.js" defer></script>

	<script src="home.js" defer></script>

	<script src="map.js" defer></script>

	<script src="signin.js" defer></script>

	<script src="account.js" defer></script>

	<script src="location.js" defer></script>


	
	
</head>

<?php
print '<body class="' . PATH_PARTS['filename'] .'">';
print PHP_EOL;
include 'lib/connect-DB.php';
print PHP_EOL;
include 'header.php';
print PHP_EOL;
include 'nav.php';
print PHP_EOL;
?>
