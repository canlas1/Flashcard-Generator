console.log('this is loaded!');

// ClozeCard` should have a property or method that contains or returns _only_ the cloze-deleted portion of the text.

// ClozeCard` should have a property or method that contains or returns _only_ the partial text.

// ClozeCard` should have a property or method that contains or returns _only_ the full text.

// ClozeCard` should throw or log an error when the cloze deletion does _not_ appear in the input text.


var clozeCard = function(statement, clozeSelection) {
    this.statement = statement;
    this.clozeSelection = clozeSelection;
	    //refered to w3 schools
	    var newStatement = statement.replace(/clozeSelection/g, "_____________");
    this.seeFrontOfCard = function() {
        console.log(newStatement);
    }
    this.seeBackOfCard = function() {
        console.log(clozeSelection);
    }
}

var presidentQuestion = new clozeCard("George Washington was the first president of the United States.", "George Washington")

var userInput = process.argv[2];

if (userInput == "yes") {
    presidentQuestion.seeFrontOfCard();
    presidentQuestion.seeBackOfCard();
}


module.exports = clozeCard; 
