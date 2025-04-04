<nav>
	<a class="<?php
	if (PATH_PARTS['filename'] == "index"){
		print'activePage';
	}
	?>" href="index.php">Home</a>

        <a class="<?php
	if (PATH_PARTS['filename'] == "map"){
		print'activePage';
	}
	?>" href="map.php">Map</a>

	
	

	<a class="<?php
	if (PATH_PARTS['filename'] == "explore"){
		print'activePage';
	}
	?>" href="explore.php">Explore</a>

<a class="<?php
	if (PATH_PARTS['filename'] == "about"){
		print'activePage';
	}
	?>" href="about.php">About Us</a>


<a class="<?php
	if (PATH_PARTS['filename'] == "account"){
		print'activePage';
	}
	?>" href=account.php>My Account</a>


</nav>
