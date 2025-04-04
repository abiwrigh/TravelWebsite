$(document).ready(function(){

    var comminity = false;

    var bioClick = false;

    var locationClick = false;

    var peopleClick = false;

    var actClick = false;

    var weatherClick = false;

    $("#community").hide();

    $("#bio").hide();

    $("#location").hide();

    $("#people").hide();

    $("#activites").hide();

    $("#weather").hide();

    $("#communityImg").click(function(){
        
        if(comminity == false){
            $("#community").show();
            comminity = true;
        }

        else{
            $("#community").hide();
            comminity = false;
        }
       
        

    });

   
    $("#locationImg").click(function(){
        
        if(locationClick == false){
            $("#location").show();
            locationClick = true;
        }

        else{
            $("#location").hide();
            locationClick = false;
        }
       
        

    });

    

    $("#peopleImg").click(function(){
        
        if(peopleClick == false){
            $("#people").show();
            peopleClick = true;
        }

        else{
            $("#people").hide();
            peopleClick = false;
        }
       
        

    });

    $("#actImg").click(function(){
        
        if(actClick == false){
            $("#activites").show();
            actClick = true;
        }

        else{
            $("#activites").hide();
            actClick = false;
        }
       
        

    });
    $("#weatherImg").click(function(){
        
        if(weatherClick == false){
            $("#weather").show();
            weatherClick = true;
        }

        else{
            $("#weather").hide();
            weatherClick = false;
        }
       
        

    });

    $("#bioImg").click(function(){
        
        if(bioClick == false){
            $("#bio").show();
            bioClick = true;
        }

        else{
            $("#bio").hide();
            bioClick = false;
        }
       
        

    });

 
});
