let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth; 
let inventory = ["stick"]; 
const button1 = document.querySelector("#button1"); 
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3"); 
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
button1.onclick=goStore
button2.onclick = goCave;
button3.onclick = fightDragon;
// Moved these 3 onclick properties up here to clean up the code.
function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
}
// I removed the code inside the goStore function and added a line that updates the text of button1 to say Buy 10 health(10 gold).
// I did this using the innerText property, which controls the text that appears in an HTML element (button1). 
function goCave (){
    console.log("Going to cave.")
}
function fightDragon (){
    console.log("Fighting dragon.")
  }
