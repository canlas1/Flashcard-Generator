console.log("this is loaded!");
//##########################################################
var fs = require('fs');
// var inquirer = require('inquirer');
// var request = require('request');
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
//##########################################################
//GLOBAL VARIABLES
var nodeArg= process.argv;
var userInput = process.argv[2];
var number = 0;

function BasicCard(question, answer) {
    if (!(this instanceof BasicCard)) {
        return new BasicCard(front, back);
    }
    this.front = front;
    this.back = back;
   

    fs.appendFile('basicLog.txt', JSON.stringify(this), (err) =>{
        if(err) {
            console.log(err);
        }
    })
}

function playGame() {
	inquirer.prompt([{
		type: "confirm",
        message: "Do you want to play Basic Flash Cards?",
        name: "continue",
        default: true
       

	}])then(function(answer) {
        var newCard = new BasicCard(answer.question, answer.answer);
        newCard.printCardInfo();
        if (answer.continue === true){
            createBasicCard()
	// body...
}
 
 // var playCards = new BasicCard("Who was the first president of the United States?", "George Washington");


 // function playCards(front, back) {
 // 	var seeFrontOfCard = function(){this.front = front;}
 // 	var seeBackOfCard = function(){this.back = back;}
 // }
 // playCards();

 
 // if (userInput == "yes") {
 // 	playCards.seeFrontOfCard();
 // 	playCards.seeBackOfCard();
 // }