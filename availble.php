<?php

include 'lib/connect-DB.php';

$q = isset($_GET['q']) ? htmlspecialchars($_GET['q']) : '';

$hint = '';

if ($q != '') {

  $q = strtolower($q);

  $sql= 'SELECT fldUsername FROM tblUser WHERE fldUsername = ?' ;

  $dataVerify=array($q);

  $array = $thisDataBaseReader->select($sql, $dataVerify);
  

 

  if( sizeof($array) > 0){

    $hint = "Not Available";
  }
  else{

    $hint = "Available";

  }

}



print $hint;

?>