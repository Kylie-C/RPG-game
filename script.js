let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth; 
let inventory = ["stick"]; 
const button1 = document.querySelector("#button1"); //Changed it to const because I'm not going to reassign this variable. This way,
//it will throw an error if I do accidently try reassigning it. Also interesting thing, I can't comment the usual way in the html
//file, but it is working on this js file. My theory is that it's because the js is RUNNING through the html and reads everything?