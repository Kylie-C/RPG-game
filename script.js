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
function goStore(){
    console.log("Going to store.");
}
// Right now, I declared this function (basically I just named it), but I need to call it in order for it to do something.
// So looking at it in the console as is, nothing will happen because the function hasn't been called.
goStore()
// This is how you would call that function. Now if I look in the console, I'll see "Going to store." show up.




