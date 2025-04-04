<?php

include 'lib/connect-DB.php';

$q = isset($_GET['q']) ?  htmlspecialchars($_GET['q']) : '';

$s = isset($_GET['s']) ? (int) htmlspecialchars($_GET['s']) : '';

$hint = '';



    $sqlUser= 'INSERT INTO tblUserFavorites (fnkUserId, fldFavorites1)

    VALUES (?,?)';

    $dataUser=array($s,$q);

    if($thisDataBaseWriter->insert($sqlUser,$dataUser)){
        $hint = "success";
        print '<p>'.$hint.'</p>';
    }



print $hint;

?>