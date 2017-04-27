console.log("this is loaded!");
//##########################################################
var fs = require('fs');
var inquirer = require('inquirer');

//creating a constructor function for the 2 arguments question and answer
function BasicCard(question, answer) {
    this.question = question;
    this.answer = answer;


    this.displaycardContent = function() {
        console.log("Front: " + this.question + " " + "Back: " + this.answer);
    }

    this.printCardInfo = function() {
        var printCard = "Front: " + this.question + ", Back: " + this.answer + "\n";
    }


        fs.appendFile('basicCardLog.json', JSON.stringify(this), (err) =>{
        if(err) {
     
            console.log(err);
    };
});
}



function createBasicCard() {
    inquirer.prompt([


     {
        name: "question",
        message: "Enter Question of Basic Flash Card: "
    }, {
        name: "answer",
        message: "Enter Answer of Basic Flash Card:  "

    }, {
        type: "confirm",
        message: "Do you want to create another Card?",
        name: "continue",
        default: true
       


    }]).then(function(answer) {
        var newCard = new BasicCard(answer.question, answer.answer);
        newCard.printCardInfo();
        if (answer.continue === true){
            createBasicCard()
        }
        else{
            console.log("see basicCardLog.json for new flashcards!")
         
        }


    });
}
// function readText() {
//     // body...

// fs.readFile("basicLog.txt", "utf8", function(err, data) {
//   // If there was an error reading the file, we log it and return immediately
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
//   data = data.split("\n");
//   console.log(data);
//   splitBasicCardUp(data);


// });
// }
// function splitBasicCardUp(arrayOfQuestions) {
//     console.log(arrayOfQuestions);
//     for (var i = 0; i < arrayOfQuestions.length; i++) {
//         var currentQuestion = arrayOfQuestions[i];
//         currentQuestion = currentQuestion.split(",");
//         inquirer.prompt([{
//             type: "input",
//             name: "fuckoff",
//             message: currentQuestion[0]
//         }]).then(function(answer){
//             if(answer.fuckoff == currentQuestion[1]) {
//                 console.log("Woohooo")
//             }
//         })

//     }
// }

   createBasicCard();

module.exports = BasicCard;


