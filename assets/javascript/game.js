

// make variable array computer choices for the alphabet

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    

// make win ,lose, how many used, and how many left variables

             var wins = 0;
             var losses = 0;
             var guessesLeft = 9;
             var guessChoices = [];
             
// copied wizardry

             document.onkeyup = function(event) {
    
                 var userGuess = event.key;
    
                 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//  var options alphabet array

                 var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
                 
//  write conditionsl if statements 
// 4. Wins: (# of times the user has guessed the letter correctly)

// 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// 6. Guesses Left: (# of guesses left. This will update)

// 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).


                if (options.indexOf(userGuess) > -1) {
    
                    if (computerGuess === userGuess) {
                        wins++;
                        guessesLeft = 9;
                        guessChoices = [];
                    }
                    if (guessesLeft === 0) {
    
                    guessesLeft = 9;
                    losses ++;
                    guessChoices = [];
                    }
    
                    if (computerGuess != userGuess) {
                        guessesLeft --;
                        guessChoices.push(computerGuess);
                    }
    
                    
    
                    
                }

// more wizardy *dont quite understand this other than it apears to link the variable. me thinks they are accessors.

                var html = 
                "<h1> The Psychic Game </h1>" +
                "<p>Guess what letter HAL is thinking of!</p>" +
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses Left: " + guessesLeft + "</p>" +
                "<p>Your Guesses: " + guessChoices.join(", ") + "</p>";
    
                document.querySelector("#game").innerHTML = html;
    
                
                
            };