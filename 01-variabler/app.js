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
    interests: "games"},
    
{name: "Michael",
age: 44,
height: 180,
interests: "videogames"},

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
    ]

    
 const findInterests = function(searchFor, journal) {
    for (let i = 0; i < journal.length; i++) {
           if (journal[i].interests === searchFor) {
               return console.log( journal[i]);
}}
}



let yourName = prompt('What is your name? ')
let yourAge = prompt('How old are you? ')
let yourHeight = prompt('How tall are you? ')
let yourInterests = prompt('What are your interests? ')

    if (yourAge > 18)
{ console.log(`Welcome to the datingsite ${yourName}`)

switch (prompt("Do you want to date female or male?"))
{case "male": 
    switch (prompt("What's most important, age, height or interests?"))
    {
    case "age":
     let ageQuestion = prompt("What age are you looking for? Use a decade for age(ex. 20, 30, 40")
     function roundUpNearest10(num) {
        return Math.round(num / 10) * 10;
      }
    let ageQuestionRounded = roundUpNearest10(ageQuestion)
    for (let i = 0; i < candidate.length; i++) {
        if (roundUpNearest10(candidate[i].age) === ageQuestionRounded) {
            console.log(candidate[i])
            
            break;
        }
    }
        

     case "height":
     break;
    case "interests":
        console.log(findInterests(yourInterests, candidate));
        console.log("Theese seem to be the best candidates for you!")

     break;
    default:
           console.log("Please enter a valid option")  
     break;
    }

case "female":
     {
        console.log("Write something")
        break;
     }
     default: {
        console.log("You have to choose!")
        break;
     }
    }
}
else {
    console.log('You are not old enough to date')
}

// console.log(process.argv)

