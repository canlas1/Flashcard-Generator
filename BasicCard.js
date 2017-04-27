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
        var printCard = "Front: " + this.question + "\nBack: " + this.answer + "\r\n";


        fs.appendFileSync("basicLog.txt", printCard);
    }
};

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
            console.log("see basicLog.txt for new flashcards!")
        }


    });
}

   createBasicCard();

module.exports = BasicCard;


