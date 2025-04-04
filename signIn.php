<?php
include 'top.php';

print '<main>';

print '<h2>Welcome back to Luster!</h2>';

print '<section>';

print '<p>Signing in with us means joining a community where innovation meets elegance. At Luster, we prioritize your experience, ensuring seamless access to our cutting-edge solutions and personalized services. Whether you\'re reconnecting with familiar features or exploring new enhancements, your journey with Luster promises efficiency and satisfaction. We\'re thrilled to have you back, ready to illuminate your path with our signature blend of technology and style. Thank you for choosing Luster – where each login is a step towards brighter possibilities.</p>';

print '</section>';

print '<section id="signInForm">';

print '<form action="#"  id="user" method ="POST">';

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
       
       
        
        if($_SERVER["REQUEST_METHOD"]=='POST'){
            
        $userName=getPostData('txtUserNameSignIn');
        $password=getPostData('txtPasswordSignIn');
           
        $dataIsGood=true;

                    if($userName == ''){
                        print '<p class="mistake">Please type in a username.</p>';
                        $dataIsGood=false;
                    }

                    if($password == ''){
                        print'<p class="mistake">Please type in a password.</p>';
                        $dataIsGood=false;
                    } 

                    
                    $sqlVerifyNewUser= 'SELECT * FROM tblUser WHERE fldUsername = ?';

                    $dataVerify=array($userName);

                    $array = $thisDataBaseReader->select($sqlVerifyNewUser, $dataVerify);

                    
                    if( sizeof($array) <= 0){

                        print '<p id="errorSignIn"> Oopps, Something went wrong! Username Not Found In System</p>';  

                        $dataIsGood=false;

                    }

                    if($dataIsGood){
                      
                        try {

                           

                            $sqlVerifyNewUser= 'SELECT * FROM tblUser WHERE fldUsername = ? AND fldPassword=?';

                            $dataVerify=array($userName, $password);

                            $array = $thisDataBaseReader->select($sqlVerifyNewUser, $dataVerify);

                            
                            if( sizeof($array) > 0){

                                // redirect page here, with AJAX
                                
                                $userId = $array[0]['pmkUserId'];
                            
                                header("Location: account.php?userId=" . $userId. ""); 

                            }

                            else {

                                print '<p id="errorSignIn"> Oopps, Something went wrong! Username or Password Does not match what we have in our system</p>';  

                                $dataIsGood=false;
                            }

                        }

                    catch(PDOEeception $e){

                      $message='<p>Attempt was unsuccessful, please email abigail.wright@uvm.edu</p>';

                      $dataIsGood=false;

                      }
                    } //data is good

              } 

            
                       
                     
?>

    <p>
        <label class="required" for="txtUserNameSignIn">Username:</label>

        <input id="txtUserNameSignIn" maxlength="25"  value="<?php echo $userName; ?>" name="txtUserNameSignIn" tabindex="300" type="text" required>
        
        <span id="usernameLengthSign"></span>


    </p>

    <p>

      <label class="required" for="txtPasswordSignIn">Password:</label>

      <input type="password" id="txtPasswordSignIn" value="<?php echo $password; ?>" name="txtPasswordSignIn" required>

      <span id="passwordLengthSign"></span>

    </p>

    <p>

    <input id="btnSubmitSignIn" class="button" name="btnSubmitSignIn" type="submit" value="SUBMIT">

    </p>

    </form>
    <span id="txtFirstName"></span>
</section>


</main>

<?php 
include 'footer.php';
?>
