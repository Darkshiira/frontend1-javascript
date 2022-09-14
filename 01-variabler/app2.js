const prompt = require('prompt-sync')()
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

    function roundUpNearest10(num) {
        return Math.round(num / 10) * 10;
      }

    let ageQuestion = prompt("What age are you looking for? Use a decade for age(ex. 20, 30, 40")
    let ageQuestionRounded = roundUpNearest10(ageQuestion)
    for (let i = 0; i < candidate.length; i++) {
        if (roundUpNearest10(candidate[i].age) === ageQuestionRounded) {
            console.log(candidate[i])
        }
    }
 