let xp = 0;
let health = 100; 
let gold = 50;
let currentWeapon = 0;
// This is the global variable (all the code can access this code) that was already here.
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
const weapons = [
  {name: "stick", power: 5},
  {name: "dagger", power: 30},
  {name: "claw hammer", power: 50},
  {name: "sword", power: 100},
];

const locations = [
    {name: "town square",
      "button text": ["Go to store", "Go to cave", "Fight dragon"],
      "button functions": [goStore, goCave, fightDragon],
      text: "You are in the town square. You see a sign that says \"Store\"."},
    {name: "store",
      "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
      "button functions": [buyHealth, buyWeapon, goTown],
      text: "You enter the store."},
    {name: "cave",
      "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
      "button functions": [fightSlime, fightBeast, goTown],
      text: "You enter the cave. You see some monsters."},
  ];

button1.onclick= goStore
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
  }

function goTown() {
    update(locations[0]);
  }

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
  }

function fightDragon (){
    console.log("Fighting dragon.")
  }

function buyHealth (){
  if (gold >= 10) {
  gold -= 10;
  health += 10;
  goldText.innerText = gold;
  healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon () {
  if (currentWeapon < weapons.length - 1){
    if (gold >= 30) {
    gold -= 30;
    currentWeapon++;
    goldText.innerText = gold;
    let newWeapon = weapons[currentWeapon].name;
    text.innerText = "You now have a " + newWeapon + ".";
    inventory.push(newWeapon);
    text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
    }
}

function sellWeapon () {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon;
  }
}
// This currentWeapon variable is ONLY accessible inside this if {} statemenr because I specifically declared it in here. Even though 
// thos variable has the same exact name as the global variable above that I had prior created, they are two seperate variables.
// This is called block scope. This variable is only scoped to this block of code. Scope is the term used to describe where a
// variable can be accessed. If a variable is declared inside a block of code (like an if {}, else {}, or function), it is only
// accessible to the code inside that block.
function fightSlime () {}
function fightBeast () {}
// console.log()