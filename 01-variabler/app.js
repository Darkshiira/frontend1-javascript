
const prompt = require('prompt-sync')()
// console.log("hello world")
// let question = prompt("Knock knock? ").trim().toLowerCase()
// if (question === "whos there" || question === "who's there" || question === "who is there" || question === "who's there?" || question === "who is there?" || question === "whos there?") {
//     let answer = prompt("Tank! ").trim().toLowerCase()
//     if (answer === "Tank who?" || answer === "tank who?" || answer === "tank who" || answer === "Tank who") {
//         console.log("You're welcome!")
//     }

//  else { console.log("Please play with me!")}
// }

// else { console.log("Please play with me!")}
let namesOfMale = ["Shaun", "John", "Mark", "Peter", "Steven", "Michael", "Robert", "William", "Richard", "Joseph", "Thomas", "James", "Charles", "Daniel", "Paul", "Donald", "George", "Kenneth", "Anthony", "Kevin", "Brian", "Edward", "Ronald", "Jason", "Jeffrey", "Gary", "Stephen", "Larry", "Jeff", "Frank", "Scott", "Raymond", "Gregory", "Samuel", "Benjamin", "Patrick", "Jack", "Dennis", "Jerry", "Alexander", "Tyler", "Aaron", "Jose", "Douglas", "Henry", "Peter", "Adam", "Zachary", "Nathan", "Walter", "Harold", "Kyle", "Carl", "Jeremy", "Ethan", "Arthur", "Gerald", "Roger", "Keith", "Jeremy", "Terry", "Joe", "Sean", "Willie", "Ralph", "Lawrence", "Billy", "Austin", "Bruce", "Christian", "Roy", "Bryan", "Eugene", "Louis", "Harry", "Fred", "Wayne", "Ethan", "Randy", "Louis", "Russell", "Bobby", "Victor", "Martin", "Ernest", "Phillip", "Todd", "Jesse", "Craig", "Alan", "Bryan", "Jeffery", "Clarence", "Jimmy", "Francis", "Bradley", "Gabriel", "Louis", "Jeremy", "Ralph", "Lawrence", "Dennis", "Eugene", "Randy", "Louis", "Russell", "Bobby", "Victor", "Martin", "Ernest", "Phillip", "Todd", "Jesse", "Craig", "Alan", "Bryan", "Jeffery", "Clarence", "Jimmy", "Francis", "Bradley", "Gabriel", "Louis", "Jeremy", "Ralph", "Lawrence", "Dennis", "Eugene", "Randy", "Louis", "Russell", "Bobby", "Victor", "Martin", "Ernest", "Phillip", "Todd", "Jesse", "Craig", "Alan", "Bryan", "Jeffery", "Clarence", "Jimmy", "Francis", "Bradley", "Gab"];
let agesOfMale = [25, 34, 56, 78, 31, 28, 25, 31, 36, 19, 42, 45, 38, 36, 33, 27, 28];
let namesOfFemale = ["Mary", "Linda", "Elizabeth", "Jennifer", "Maria", "Susan", "Lisa", "Karen", "Nancy", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Jennifer", "Maria", "Susan", "Margaret", "Lisa", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Jennifer", "Maria", "Susan", "Margaret", "Lisa", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Jennifer", "Maria", "Susan", "Lisa", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Jennifer", "Maria", "Susan", "Margaret", "Lisa", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Jennifer", "Maria", "Susan", "Margaret", "Lisa", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Jennifer", "Maria", "Susan", "Margaret", "Lisa", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Jennifer", "Maria", "Susan", "Margaret", "Lisa", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Jennifer", "Maria", "Susan", "Margaret", "Lisa", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Jennifer", "Maria", "Susan", "Margaret", "Lisa", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Jennifer", "Maria", "Susan"];
let agesOfFemale = [25, 34, 56, 78, 31, 28, 25, 31, 36, 19, 42, 45, 38, 36, 33, 27, 28];
let heightOfMale = [150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200];
let heightOfFemale = [150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200];
let interestsOfMale = ["Football", "Dogs", "Nature", "Wine", "Beer", "Rugby", "Games", "Videogames", "Computer", "Programming", "Cats", "Walks", "Running", "Climbing", "Sports", "Movies", "Tennis", "Chess", "Boardgames"];
let interestsOfFemale = ["Football", "Dogs", "Nature", "Wine", "Beer", "Rugby", "Games", "Videogames", "Computer", "Programming", "Cats", "Walks", "Running", "Climbing", "Sports", "Movies", "Tennis", "Chess", "Boardgames"];

let candidate1 = "Name: " + namesOfMale[getRandomInt(namesOfMale.length)] + ", Age:  " + agesOfMale[getRandomInt(agesOfMale.length)] + ", Length: " + heightOfMale[getRandomInt(heightOfMale.length)]+ " and Interests: " + interestsOfMale[getRandomInt(interestsOfMale.length)]
let candidate2 = "Name: " + namesOfMale[getRandomInt(namesOfMale.length)] + ", Age:  " + agesOfMale[getRandomInt(agesOfMale.length)] + ", Length: " + heightOfMale[getRandomInt(heightOfMale.length)]+ " and Interests: " + interestsOfMale[getRandomInt(interestsOfMale.length)]
let candidate3 = "Name: " + namesOfMale[getRandomInt(namesOfMale.length)] + ", Age:  " + agesOfMale[getRandomInt(agesOfMale.length)] + ", Length: " + heightOfMale[getRandomInt(heightOfMale.length)]+ " and Interests: " + interestsOfMale[getRandomInt(interestsOfMale.length)]
let candidate4 = "Name: " + namesOfMale[getRandomInt(namesOfMale.length)] + ", Age:  " + agesOfMale[getRandomInt(agesOfMale.length)] + ", Length: " + heightOfMale[getRandomInt(heightOfMale.length)]+ " and Interests: " + interestsOfMale[getRandomInt(interestsOfMale.length)]
let candidate5 = "Name: " + namesOfMale[getRandomInt(namesOfMale.length)] + ", Age:  " + agesOfMale[getRandomInt(agesOfMale.length)] + ", Length: " + heightOfMale[getRandomInt(heightOfMale.length)]+ " and Interests: " + interestsOfMale[getRandomInt(interestsOfMale.length)]

let candidateFem1 = "Name: " + namesOfFemale[getRandomInt(namesOfFemale.length)] + ", Age:  "  + agesOfFemale[getRandomInt(agesOfFemale.length)] + ", Length: " + heightOfFemale[getRandomInt(heightOfFemale.length)]+ " and Interests: "  + interestsOfFemale[getRandomInt(interestsOfFemale.length)]
let candidateFem2 = "Name: " + namesOfFemale[getRandomInt(namesOfFemale.length)] + ", Age:  "  + agesOfFemale[getRandomInt(agesOfFemale.length)] + ", Length: " + heightOfFemale[getRandomInt(heightOfFemale.length)]+ " and Interests: "  + interestsOfFemale[getRandomInt(interestsOfFemale.length)]
let candidateFem3 = "Name: " + namesOfFemale[getRandomInt(namesOfFemale.length)] + ", Age:  "  + agesOfFemale[getRandomInt(agesOfFemale.length)] + ", Length: " + heightOfFemale[getRandomInt(heightOfFemale.length)]+ " and Interests: "  + interestsOfFemale[getRandomInt(interestsOfFemale.length)]
let candidateFem4 = "Name: " + namesOfFemale[getRandomInt(namesOfFemale.length)] + ", Age:  "  + agesOfFemale[getRandomInt(agesOfFemale.length)] + ", Length: " + heightOfFemale[getRandomInt(heightOfFemale.length)]+ " and Interests: "  + interestsOfFemale[getRandomInt(interestsOfFemale.length)]
let candidateFem5 = "Name: " + namesOfFemale[getRandomInt(namesOfFemale.length)] + ", Age:  "  + agesOfFemale[getRandomInt(agesOfFemale.length)] + ", Length: " + heightOfFemale[getRandomInt(heightOfFemale.length)]+ " and Interests: "  + interestsOfFemale[getRandomInt(interestsOfFemale.length)]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let datingSite = function(factor) {
    if (factor == 1) {
       switch (prompt("What's most important, age, height or interests?"))
       {
       case "age":
        let ageQuestion = prompt("What age are you looking for?")
       case "height":

       case "interests":

       default:
              console.log("Please enter a valid option")  }}
    } else {
       
        
    }
}
let name = prompt('What is your name? ')
let age = prompt('How old are you? ')
let height = prompt('How tall are you? ')
let interests = prompt('What are your interests? ')

    if (age < 18)
        {console.log('You are not old enough to date')
}
else console.log(`Welcome to the datingsite ${name}`)

let choice = prompt("Do you want to date female or male? Type '1' if Male")
console.log(datingSite(choice))


// console.log(process.argv)

