console.log("this is loaded!");
//##########################################################
var fs = require('fs');
var inquirer = require('inquirer');
var request = require('request');
//##########################################################
//GLOBAL VARIABLES
var name;
var nodeArg;
var emptyArray = []
    //##########################################################
    //FUNCTIONS I WANT

startGame();

function greeting(name) {
    console.log("------------------------");
    console.log("------------------------");
    console.log("Name:  " + name);
}

function startGame() {
    console.log("------------------------");
    inquirer.prompt([{
        type: "confirm",
        message: "Do You Want to Play Basic FLashCards?",
        name: "confirm"
    }, {
        type: "input",
        message: "What is your name?",
        name: "name"
    }]).then(function(answer) {
        greeting(answer.name)
        if (answer.confirm) {
            createFlashCard();
        } else {
            console.log("Then Dont Play!")
        }
    });
};

//##########################################################
//creating a constructor function for the 2 arguments question and answer
function createFlashCard() {
    inquirer.prompt([{
        type: 'confirm',
        message: "Do you want to create a new flashcard?",
        name: "makeAFlashCard"
    }]).then(function(answer) {
            if (answer.makeAFlashCard) {
                inquirer.prompt([{
                    type: "input",
                    message: "Write a question",
                    name: "question"
                }, {
                    type: "input",
                    message: "What is the answer",
                    name: "answer"
                }]).then(function(answer) {
                    var newCard = new basicCard(answer.question, answer.answer);
                    console.log(newCard);
                    emptyArray.push(newCard);
                    createFlashCard();
                })
            } else {
                inquirer.prompt([{
                    type: 'confirm',
                    message: "Do you want to play the card game?",
                    name: "cardGameConfirm"
                }]).then(function(answer) {
                    if (answer.cardGameConfirm) {
                        playGame()
                    }
                })
            }
        });
    };

    function playGame() {
        console.log("We are going to start playing the game");
        console.log(emptyArray);
        // body...
    }

    var basicCard = function(question, answer) {
        //this refers to basicCard, question refers to the first argument
        this.question = question;
        //this refers to basicCard, answer refers to the second argument
        this.answer = answer;
        //this refers to basicCard, seeFrontOfCard is a passed in method to read the front of the card which is the question


        function seeFrontOfCard() {
            console.log(this.question)
        }

        function seeBackOfCard() {
            console.log(this.answer);
        }
        // inquirer.prompt(seeFrontOfCard, seeBackOfCard);
    }


    //new constructor based on the first constructor function.  Note there are preset arguments
    var playCards = new basicCard("Who was the first president of the United States?", "George Washington");
