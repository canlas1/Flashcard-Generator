console.log('this is loaded!');

// dependency for inquirer npm package
var inquirer = require("inquirer");


// "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); 

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText);

var ClozeCard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.clozeStatement = "[president_name] was the [president_number] president of the United States";

    var president_names = [];
    var president_number = [];
    var loop = 0;

    var getPresident = function(loop) {
        console.log(loop);
        console.log(president_name);

        if (loop < 2) {
            inquirer.prompt({
                name: "president_name",
                message: "Enter a Presidents Name: "
            }).then(function(answers) {
                president_names.push(anwers.president_name);
                loop++
                getPresident();
            });
        }
        getPresident();
    }
}






//   this.front = function() {
//     if (this.front === this.text) {
//       console.log("That was yummy!");
//       this.hungry = false;
//       this.sleepy = true;
//     }
//     else {
//       console.log("No thanks, I'm full.");
//     }
//   };

//    {
//     //not inside so we need to reference th
//     console.log("THIS IS THE CLOZE TEXT:  " + this.text);

//     var newText = this.text.replace(this.cloze, "_____________");
//     console.log(newText);
//     }

//     this.seeBackOfCard = function() {
//     console.log("THIS IS THE CLOZE ANSWER" + this.cloze);
//     };
// };



// // var firstPresidentCloze = new ClozeCard(
// //     "George Washington was the first president of the United States.", "George Washington");





// var count = 0;
// var newArr = [];

// // var newFlashCards = function() {

//     // if (count < 2) {
//     //     // for (var i = 0; i<)
//         inquirer.prompt([
//           {
//             name: "name",
//             message: "what is your name?"
//         }, {
//             title: "title",
//             message: "what is your title?"
//         }, {
//             age: "age",
//             message: "how old are you?"
//         }, {
//             favoriteLanguage: "language",
//             message: "What is your favorite language?"

//         }]).then(function(answers) {
//             console.log(answers)
//             var newFlashCards = new ClozeCards(answers.text, answers.cloze);
//             console.log(newFlashCards);
//           });


//       if (count.length < 5) {
//   starters.push(player);
//   team.push(player);
//   console.log(player.name + " added to the starters");
// }
// else {
//   subs.push(player);
//   team.push(player);
//   console.log(player.name + " added to the subs");
// }
//       newArr.push(newFlashCards);

//       newFlashCards.seeFrontOfCard();

//       count++;

//       newFlashCards();
//   });


// console.log('All questions asked');

// };

// console.log(newFlashCards);


// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var BrokenCloze = new ClozeCard("This doesn't work", "oops");


// ClozeCard.prototype.seeFrontOfCard = function() {
//     //not inside so we need to reference th
//     console.log(this.text);
//     var newText = this.text.replace(this.cloze, "_____________");
//     console.log(newText);
// }

// ClozeCard.prototype.seeBackOfCard = function() {
//     console.log(this.clozeSelection);
// }

// var question1 = new ClozeCard("George Washington was the first president of the United States.", "George Washington")


// if (userInput == "yes") {
//     PresidentQuestion.seeFrontOfCard();
//     PresidentQuestion.seeBackOfCard();
// }



// function makeABasicFlashCard(front, back) {
//     // blah blah blah do something with front
//     // blah blah blah do something with back
//     // fs.write("textfilename", this.front + this.back)
//     makeAClozeCard();
// }

// function makeAClozeCard(front, back) {
//     // blah blah blah do something with front
//     // blah blah blah do something with back
//     // fs.write("someothertextfilename", this.front + this.back)
//     greeting();
// }

// // module.exports = ClozeCard;
