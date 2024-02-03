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
button1.onclick= goStore
button2.onclick = goCave;
button3.onclick = fightDragon;

function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
  }
// I used the innerText property to update button2 and button3. I realized that these functions are all occurring on the same page; a
// new page isn't loading. It just acts like a new page has loaded when the goStore function is activated. Those 3 buttons are
// the same buttons, just the words on them changed when the onclick event happened.
function goCave (){
    console.log("Going to cave.")
}
function fightDragon (){
    console.log("Fighting dragon.")
  }
