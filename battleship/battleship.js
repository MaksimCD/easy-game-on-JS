var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){
    guess = prompt("Are you ready? Pick any number, scale of 1 to 6.");
    if(guess < 0 || guess >6){
        alert("No way!");
    }else{
        guesses = guesses + 1;
        if(guess == location1 || guess == location2 || guess == location3){
            hits = hits + 1;
            if(hits == 3){
                isSunk = true;
                alert("Nice bro, you won!!");
            }
        }else{
            alert("Nop!!!AHHAHA");
        }
    
    }
}
var status = " Your shots " + guesses + "" + " Your level of accuracy " +(3/guesses);
alert(status); 