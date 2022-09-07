
const prompt = require('prompt-sync')()
console.log("hello world")
let question = prompt("Knock knock? ").trim().toLowerCase()
if (question === "whos there" || question === "who's there" || question === "who is there" || question === "who's there?" || question === "who is there?" || question === "whos there?") {
    let answer = prompt("Tank! ").trim().toLowerCase()
    if (answer === "Tank who?" || answer === "tank who?" || answer === "tank who" || answer === "Tank who") {
        console.log("You're welcome!")
    }

 else { console.log("Please play with me!")}
}

else { console.log("Please play with me!")}




// console.log(process.argv)

