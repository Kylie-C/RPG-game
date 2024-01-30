let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth; 
let inventory = ["stick"]; 
let button1 = document.querySelector("#button1"); //JS interacts with the HTML using the Document Object Model, or DOM. The DOM
//is a tree of objects that represents the HTML. I accessed the HTML using the document object, which represents my entire HTML document.
//One method for finding specific elements in my HTML is using the querySelector() method. This methos takes a CSS selector as an argument and returns
//the first element that matches that selector. So, I created a button1 variable (let button1 =) using the querySelector() to assign it 
//to the element with the id of button1. Remember that CSS id selectors are prefixed with a #.