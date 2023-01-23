var level = 0;
var userClickedPattern = [];
var gamePattern = [];
var array = [];
var clev = 0; 

function startOver(){

    level = 0;
    userClickedPattern = [];
    gamePattern = [];
    array = [];
    clev = 0; 

}

//this is for user input like when user will click a button it will animate make sound and store the response
$(".btn").on("click", function(e){
     
    var userChosenColour;
    
    
    userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour); 
    //console.log(userClickedPattern);

    playSound(userChosenColour);

    playAnimation(userChosenColour);

     
     checkResponse(clev);
     clev++;
    

  });

  


//this is for the pattern given by computer 
function nextSequence() {

    var randomNumber = Math.round(Math.random()*3);

    var buttonColours = ["red", "blue", "green", "yellow"];

    var randomChosenColour = buttonColours[randomNumber];

    playSound(randomChosenColour);
    playAnimation(randomChosenColour);

    
    gamePattern.push(randomChosenColour);

    level++;

    $("h1").text("level "+level);

    userClickedPattern = [];
    clev = 0;

}


//for playing sound
function playSound (name)
{
    var address = "sounds/"+name+".mp3";

    var audio = new Audio(address);
    audio.play();

}

//for playing animation
function playAnimation(currentColour)
{
   $("#"+currentColour).addClass("pressed");

   setTimeout(function () {
    $("#"+currentColour).removeClass("pressed");
   },100);

}


$(document).on("keydown", function(e) {
      
    
     array.push(e.key);

    if(array.length == 1){
        setTimeout(nextSequence, 700);   
    }
    
});


function checkResponse(i) {

    if(gamePattern[i] != userClickedPattern[i])
        {
            $("body").addClass("game-over");

              setTimeout(function () {
             $("body").removeClass("game-over");
                                       },100);


              playSound("wrong");
                $("h1").text("Game Over, Press Any Key to Restart"); 

        startOver();
                
              
        }
        else if(i+1 == level)
        {
            setTimeout(nextSequence, 1000);
        }

}


