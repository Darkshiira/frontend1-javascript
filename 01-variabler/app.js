const prompt = require('prompt-sync')();
//This is the data that we will use to compare the candidates, female version

let candidateFemale = [
    {name: "Melissa",
    age: 25,
    height: 150,
    interests: "dogs"},

    {name: "Johanna",
    age: 35,
    height: 162,
    interests: "cars"},

    {name: "Pia",
    age: 22,
    height: 178,
    interests: "wine"},

    {name: "Mia",
    age: 46,
    height: 180,
    interests: "nature"},

    {name: "Maria",
    age: 36,
    height: 163,
    interests: "beer"},

    {name: "Sofia",
    age: 45,
    height: 167,
    interests: "rugby"},

    {name: "Hanna",
    age: 34,
    height: 166,
    interests: "games"},

    {name: "Maja",
    age: 44,
    height: 180,
    interests: "videogames"},

    {name:"Elena",
    age: 33,
    height: 165,
    interests:"computer"},

    {name:"Elin",
    age: 28,
    height: 189,
    interests: "programming"},

    {name:"Emma",
    age: 19,
    height: 179,
    interests:"cats"},

    {name: "Elise",
    age: 36,
    height: 180,
    interests: "music"},

    {name: "Ella",
    age: 45,
    height: 167,
    interests: "reading"},

    {name: "Magdalena",
    age: 28,
    height: 175,
    interests: "cooking"},

    {name:"Emilia",
    age: 44,
    height: 180,
    interests: "swimming"},

    {name:"Elisabeth",
    age: 33,
    height: 165,
    interests:"tennis"},
];
//This is the data we use to compare the candidates, male version
let candidate = [
    {name: "Shaun",
    age: 25,
    height: 150,
    interests: "dogs"}
    ,
    {name: "Johan",
    age: 35,
    height: 162,
    interests: "cars"}
    ,
    {name: "Peter",
    age: 22,
    height: 178,
    interests: "wine"}
,
    {name: "Mark",
    age: 46,
    height: 180,
    interests: "nature"}
,
    {name: "Peter",
    age: 36,
    height: 163,
    interests: "beer"}
,
    {name: "Steven",
    age: 45,
    height: 167,
    interests: "rugby"}
,
    {name: "John",
    age: 28,
    height: 175,
    interests: "games"}
,   
    {name: "Michael",
    age: 44,
    height: 180,
    interests: "videogames"}
,
    {name:"William",
    age: 33,
    height: 165, 
    interests:"computer"},

    {name:"Robert",
    age: 28,
    height: 189,
    interests: "programming"},

    {name:"Joseph",
    age: 19,
    height: 179, 
    interests:"cats"},

    {name: "Thomas",
    age: 36,
    height: 180,
    intersts: "walks"},

    {name:"James",
    age: 38,
    height: 179,
    interests: "running"},

    {name: "Daniel",
    age: 30,
    height: 180, 
    interests: "climbing"},

    {name: "Charles",
    age: 29,
    height: 173,
    interests: "sports"},

    {name: "Daniel", 
    age: 27,
    height: 173,
    interests: "movies"},

    {name: "Donald",
    age: 65,
    height: 175,
    interests: "politics"},

    {name: "George",
    age: 21,
    height: 156,
    interests: "boardgames"}
];


    //This is the questions we ask the user and store them for comparison
let yourName = prompt('What is your name? ')
let yourAge = prompt('How old are you? ')
let yourHeight = prompt('How tall are you? ')
let yourInterests = prompt('What are your interests? ')
let datingsite = true;

//If you are over 18, you get to open the datingsite
    if (yourAge > 18)
    
    {   console.log(`Welcome to the datingsite ${yourName}`);  
        while(datingsite === true) {
         

//Here you choose the sex of the candidate you want to date
            let genderChoice = (prompt("Do you want to date female or male?  Write exit to exit "))

// ------------------------------------------------------ Male ------------------------------------------------------
            
                if (genderChoice === "male")
                {
// Here it goes back to chooosing what you want to find:

                switch (prompt("Scroll through whats important for you: age, height or interests? "))

    // ------------------------------------------------------ Age ------------------------------------------------------ 
                {
                    case "age":
                        let ageQuestion = prompt("What age are you looking for? Use a decade for age(ex. 20, 30, 40 ")
                        //Function to compare the age
                        function roundUpNearest10(num) {
                        return Math.round(num / 10) * 10;
                            }    

                        let ageQuestionRounded = roundUpNearest10(ageQuestion)
                            for (let i = 0; i < candidate.length; i++) {
                                if (roundUpNearest10(candidate[i].age) === ageQuestionRounded) {
                                     console.log(candidate[i])
                                     console.log("This candidate might seem interesting to you!")
                                     continue;
                                    }
                                    
                                }
                                break;
        
// ------------------------------------------------------ Height ------------------------------------------------------
                    case "height":
                        let heightQuestion = prompt("What height are you looking for? write in CM (ex. 160, 180, 170) ")
                        let heightQuestionRounded = roundUpNearest10(heightQuestion)
                            for (let i = 0; i < candidate.length; i++) {
                                 if (roundUpNearest10(candidate[i].height) === heightQuestionRounded) {
                                    console.log(candidate[i])
                                    console.log("This candidate might seem interesting to you!")
                                    continue;
                                }
                                         
                            }
                            break;

    // ------------------------------------------------------ Interests ------------------------------------------------------
                    case "interests":
                        const findInterests = function(searchFor, journal) {
                            for (let i = 0; i < journal.length; i++) {
                                if (journal[i].interests === searchFor) {
                                return console.log( journal[i]);
                                 }
                            }
                        }

                         console.log(findInterests(yourInterests, candidate));
                         console.log("This seems to be the best candidate for you!")
                         break;

// ------------------------------------------------------ Default ------------------------------------------------------
                    default:
                    console.log("Please enter a valid option")  
                    break;
                }
            }
            

//----------------------------------------------------Female--------------------------------------------------------------
            else if (genderChoice === "female")
                {
                    switch (prompt("Scroll through whats important for you: age, height or interests?" ))
                    {

            // ---------------------------- Age-------------------------------------------------------
                         case "age":
                            let ageQuestion = prompt("What age are you looking for? Use a decade for age(ex. 20, 30, 40) ")
                                function roundUpNearest10(num) {
                                return Math.round(num / 10) * 10;
                                }

                             let ageQuestionRounded = roundUpNearest10(ageQuestion)
                                for (let i = 0; i < candidateFemale.length; i++) {
                                      if (roundUpNearest10(candidateFemale[i].age) === ageQuestionRounded) {
                                         console.log(candidateFemale[i])
                                        console.log("This candidate might seem interesting to you!")
                                         continue;
                                        }
                                    
                                    }
                                    break;
            
    // ---------------------------- Height-------------------------------------------------------
                         case "height":
                             let heightQuestion = prompt("What height are you looking for? write in CM (ex. 160, 180, 170) ")
                            let heightQuestionRounded = roundUpNearest10(heightQuestion)
                                 for (let i = 0; i < candidateFemale.length; i++) {
                                     if (roundUpNearest10(candidateFemale[i].height) === heightQuestionRounded) {
                                        console.log(candidateFemale[i])
                                         console.log("This candidate might seem interesting to you!")
                                        continue;
                                    }
                                     
                                    }
                                    break;
    // ---------------------------- Interests-------------------------------------------------------
                        case "interests":

                            const findInterests = function(searchFor, journal) {
                                for (let i = 0; i < journal.length; i++) {
                                     if (journal[i].interests === searchFor) {
                                     return console.log( journal[i]);
                                    }
                                }
                            }
                            console.log(findInterests(yourInterests, candidateFemale));
                            console.log("This seems to be the best candidate for you!")
                            break;
    //---------------------------- Default-------------------------------------------------------
                         default:
                            console.log("Please enter a valid option")  
                             break;
                        }
                    }
                    else if (genderChoice === "exit")
                    {
                        datingsite = false;
                    }              
             else 
                 console.log("You have to choose!")
                
            }
    }
    
//If you are under 18, you get to be a kid
    else {
    console.log('You are not old enough to date')
}

// console.log(process.argv)

