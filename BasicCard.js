console.log("this is loaded!");
//creating a constructor function for the 2 arguments question and answer
var basicCard = function (question, answer) {
	//this refers to basicCard, question refers to the first argument
	this.question = question;
	//this refers to basicCard, answer refers to the second argument
	this.answer = answer;
	//this refers to basicCard, seeFrontOfCard is a passed in method to read the front of the card which is the question
	this.seeFrontOfCard = function() {
		console.log(question);
	}
	//this refers to basicCard, seeFrontOfCard is a passed in method to read the back of the card which is the answer
	this.seeBackOfCard = function() {
		console.log(answer);
	}
}
	//new constructor based on the first constructor function.  Note there are preset arguments
var playCards = new basicCard("Who was the first president of the United States?", "George Washington");

var nodeArg= process.argv;
var userInput = process.argv[2];
if (userInput == "yes") {
	playCards.seeFrontOfCard();
	playCards.seeBackOfCard();
}

// allows to export the constructor basicCard	
module.exports = basicCard;

// // 
// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); 

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText)

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze("This doesn't work", "oops"); 
// //




// var BasicCard = function() {
//   this.question = "Who was the first president of the United States?";
//   this.answer = "George Washington";
  

//   // method which feeds the digitalpal when they are hungry and sets them to sleepy
//   this.question = function() {
//     if (this.question === true) {
//       console.log("That was yummy!");
//       this.hungry = false;
//       this.sleepy = true;
//     }
//     else {
//       console.log("No thanks, I'm full.");
//     }
//   };

//   // method which puts the digitalpal to sleep when they are sleepy, increases their age by one,
//   // and sets them to bored
//   this.sleep = function() {
//     if (this.sleepy === true) {
//       console.log("ZZzzZZZzzzZZz~~");
//       this.sleepy = false;
//       this.bored = true;
//       this.increaseAge();
//     }
//     else {
//       console.log("No way! I'm not tired!");
//     }
//   };

//   // method which allows the user to play with their digitalpal when they are bored and sets them to hungry
//   this.play = function() {
//     if (this.bored === true) {
//       console.log("Yay! Let's play!");
//       this.bored = false;
//       this.hungry = true;
//     }
//     else {
//       console.log("Not right now. Maybe later?");
//     }
//   };

//   // method which is called in "this.sleep" to increase the age of the digitalpal by one
//   this.increaseAge = function() {
//     this.age++;
//     console.log("Happy Birthday to me! I am " + this.age + " old!");
//   };
// };








// // here's your scope-safe constructor:
// function President(title) {
//   if (this instanceof Book) {
//     this.title  = title;
//   } else {
//     return new Book(title);
//   }
// }

// // and here's a nice thing you can do with scope-safe constructors:
// var books = [
//   'JavaScript: The Definitive Guide',
//   'Professional JavaScript for Web Developers',
//   'JavaScript: The Good Parts',
//   'JavaScript Patterns',
//   'Developing Backbone.js Applications'
//   // etc.
// ];

// // books.map(Book);


// function Person(name, age, job){    
//   this.name = name;    
//   this.age = age;    
//   this.job = job; 
// }                   
// var person = new Person("Nicholas", 29, "Software Engineer");
// alert(person.name); //Nicholas
// alert(person.age);//29
// alert(person.job);//Software Engineer

// function Person(name, age, job){    
//   if (this instanceof Person){        
//     this.name = name;        
//     this.age = age;        
//     this.job = job;    
//   } else {        
//     return new Person(name, age, job);    
//   } 
// }                   
// var person1 = Person("Nicholas", 29, "Software Engineer"); 
// console.log(person1);   //"" 
// alert(person1.name);  //"Nicholas"
// var person2 = new Person("Shelby", 34, "Ergonomist"); 
// alert(person2.name);  //"Shelby"