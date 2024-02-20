let xp = 0;
let health = 100; 
let gold = 50;
// HERE IS WHERE I ASSIGNED THE HEALTH AND GOLD VARIABLES (referencing what I noted below)
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
// HERE'S WHERE I PRIOR REFERENCED WHAT'S ON THE HTML (referencing what I noted below)
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
    },
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
  gold -= 10;
  health += 10;
  goldText.innerText = gold;
  healthText.innerText = health;
}

// Now that Iam updateing the gold and health variables, I needed to display those new values on the game screen.
// After my assignment lines (gold -= 10;  and  health += 10;), I assigned the innerText property of goldText to be the variable gold.
// Then used the same pattern to update the healthText with the health variable.
// Now when you click on Buy 10 health (10 gold), the inner text in white will update. There's currently no limit on it, so it will 
// go on indefinately. 
// To be clear, the reason this worked was because I had previously assigned the gold and health variabled at the top of this code
// as well as the reference to what's written in the html.
function buyWeapon () {}
function fightSlime () {}
function fightBeast () {}
