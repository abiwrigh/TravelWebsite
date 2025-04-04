<?php

include 'lib/connect-DB.php';

$usernameGiven = isset($_GET['q']) ? htmlspecialchars($_GET['q']) : '';


$passwordGiven = isset($_GET['d']) ? htmlspecialchars($_GET['d']) : '';

$firstName = '';



if ($usernameGiven != '' && $passwordGiven != '') {

  $usernameGiven = strtolower ($usernameGiven);

  $sql= 'SELECT * FROM tblUser WHERE fldUsername = ? AND fldPassword = ?' ;

  $dataVerify = array ($usernameGiven, $passwordGiven);

  $array = $thisDataBaseReader->select($sql, $dataVerify);


  $firstName = $array[0]['fldName'];

  if( sizeof($array) > 0){

    $firstName = $array[0]['fldName'];
    

  }

  else {

    $firstName = '';

  }

}



print $firstName;

?>