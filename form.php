<?php

include 'top.php';

print '<main class="formpage">';

print '<section class="s11">';

print '<h4>Create Account</h4>';

function getPostData($field){
    if (!isset($_POST[$field])){
        $data="";
    } else {
        $data = trim($_POST[$field]);
        $data = htmlspecialchars($data);
    
    }
    return $data;
    }

    function getGetData($field){
        if (!isset($_GET[$field])){
            $data="";
        } else {
            $data = trim($_GET[$field]);
            $data = htmlspecialchars($data);
        
        }
        return $data;
        }
        $userName='';
        $password='';
        $email='';
        $firstName='';
        $tracking=0;
       
        
        if($_SERVER["REQUEST_METHOD"]=='POST'){
            
        $userName=getPostData('txtUserName');
        $password=getPostData('txtPassword');
        $email=getPostData('txtEmail');
        $firstName=getPostData('txtName');
        $tracking=(int) getPostData('chkTracking');
        
        
            
        $dataIsGood=true;

                    if($userName == ''){
                        print '<p class="mistake">Please type in a username.</p>';
                        $dataIsGood=false;
                    }

                    if($password == ''){
                        print'<p class="mistake">Please type in a password.</p>';
                        $dataIsGood=false;
                    } 

                    if($email == ''){
                        print '<p class="mistake">Please type in your email address.</p>';
                        $dataIsGood=false;

                    } elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                        print '<p class="mistake">Your email address contains invalid characters.</p>';
                        $dataIsGood=false;
                    }
                    if ($firstName == ''){
                        print '<p class="mistake">Please enter your first name.</p>';
                        $dataIsGood=false;
                    }
                    $sqlVerifyNewUser= 'SELECT * FROM tblUser WHERE fldEmail = ?';

                    $dataVerify=array($email);

                    $arrayEmail=$thisDataBaseReader->select($sqlVerifyNewUser, $dataVerify);

                    if( sizeof($arrayEmail) > 0){
                        
                        print '<p class="pForm">Our records show you\'ve already made an account!</p>';

                        $dataIsGood = false;
                    }
                   
                        
                    $sqlVerifyNewUser= 'SELECT * FROM tblUser WHERE fldUsername = ?';

                    $dataVerify=array($userName);

                    $arrayUser=$thisDataBaseReader->select($sqlVerifyNewUser,$dataVerify);

                    if( sizeof($arrayUser) > 0){
                        
                        print '<p class="pForm">Our records show this username is already in use</p>';
                        
                        $dataIsGood = false;
                    }

                    

                    

                    $totalChecker = 0;

                    if($tracking != 1) $tracking = 0;

                    $totalChecker += $tracking;
                    
                   
                    if($dataIsGood){
                      
                        try {

                            $sqlUser= 'INSERT INTO tblUser (fldUsername, fldPassword, fldEmail, fldName,fldTracking)

                            VALUES (?,?,?,?,?)';

                            $dataUser=array($userName,$password,$email,$firstName,$tracking);

                            $thisDataBaseWriter->insert($sqlUser,$dataUser);


                            $sqlUserSel='SELECT pmkUserId from tblUser WHERE fldEmail=?';

                            $dataUserId=array($email);

                            $userData = $thisDataBaseReader->select($sqlUserSel,$dataUserId); 

                            $userId=$userData[0]['pmkUserId'];


                            if($thisDataBaseWriter->insert($sqlUserSel,$dataUserId)){

                              print '<p class="pForm">You successfully created an account with Luster, we are a platform 
                              created to help explore whats around you. No matter how you are feeling, no matter the day, we got you!</p>';
                              $to = $email;

                              $from ='Luster <abigail.wright@uvm.edu>';

                              $subject = 'Thanks For Creating An account with Luster';

                              $mailMessage = '<p style="font: 18pt;">You successfully created an account with Luster, we are a platform created to help explore whats around you. No matter how you are feeling, no matter the day, we got you!</p>';

                              $headers= "MIME-Version: 1.0\r\n";

                              $headers.= "Content-type: text/html; charset=utf-8\r\n";

                              $headers.= "From:" . $from . "\r\n";

                              $mailSent = mail($to, $subject, $mailMessage, $headers);

                              if($mailSent){

                                  print "<p class='pForm'>We are excited to explore the world with you! </p>";
                              
                              }

                              header("Location: account.php?userId=" .$userId."");
                            
                        }
                        else{

                          $message ='<p class="pForm">Something went wrong, try that again.</p>';

                          $dataIsGood=false;

                        }

                      } catch(PDOEeception $e){

                      $message='<p class="pForm">Attempt was unsuccessful, please email abigail.wright@uvm.edu</p>';

                      $dataIsGood=false;

                  }

              } //data is good

      } //ends form submitted
                       
                     
                ?>

                </section>
    




<form action="#" onsubmit="return validateForm()" id="newUser" method ="POST">

    <span id="correctUsername"></span>

    <span id="txtAvailble"></span>

    <span class="pForm" id="usernameWrongInput"></span>

    <p class="pForm">
        <label class="required" for="txtUserName">Username:</label>

        <input id="txtUserName" maxlength="25"  name="txtUserName" value="<?php echo $userName; ?>" tabindex="300" type="text" required>

       

    </p>

    <span id="strengthPassword"></span>

    <span class="pForm" id="passwordWrongInput"></span>

    <p class="pForm">

      <label class="required" for="txtPassword">Password:</label>

      <input type="password" id="txtPassword" value="<?php echo $password; ?>" name="txtPassword" required>

      

    </p>

    <p class="pForm">

      <label for="chkPassword">Show Password:</label>

      <input type="checkbox" id="chkPassword" >

    </p>

    <section id="messagePass">
 
      <h3 id="headerPass" ></h3>

      <p class="pForm" id="number"></p>

      <p class="pForm" id="upperCase"></p>

      <p class="pForm" id="lowerCase"></p>

      <p class="pForm" id="specailChar"></p>

      <p class="pForm" id="checkPassword"></p>

    </section>

    <span id="passwordMatch"></span>

    <span class="pForm" id="passwordMismatch"></span>

    <p class="pForm">

      <label for="txtPasswordMatch">Match Password:</label>

      <input type="password" id="txtPasswordMatch" name="txtPasswordMatch" required>

    </p>

    
    <span id="correctEmailFormat"></span>
    <span id="correctEmail"></span>

    <p class="pForm">
        <label class="required" for="txtEmail">Email: </label>

        <input id="txtEmail" maxlength="100" value="<?php echo $email; ?>" name="txtEmail" type="email"  required>

        

    </p>

    <span id="correctName"></span>

    <p class="pForm">

        <label class="required" for="txtName">First Name:</label>

        <input id="txtName" maxlength="50" value="<?php echo $firstName; ?>" name="txtName" type="text" required>

    </p>
<p class="pForm">
    Upon your consent, Luster's interactive map harnesses the power of your device's location services to pinpoint your exact whereabouts. With a simple click, you grant Luster permission to access your location, enabling our platform to curate a personalized selection of activities to coffee shops in your vicinity.
</p>
    <p class="pForm">
                <input type="checkbox" id="chkTracking" name="chkTracking"  <?php if($tracking) print 'checked'; ?> value="1">

                <label for="chkTracking">Allow Location Tracking </label>
    </p>

    <p class="pForm">

    <input id="btnSubmit" class="button" name="btnSubmit" type="submit" value="SUBMIT">

    </p>

    </form>

</main>

<?php 

include 'footer.php';

?>
