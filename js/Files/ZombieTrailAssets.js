var PartyInfo = [];
var player = [];
var playerClasses = [];
//var inventory = [];
var partyMembers = [];
var items =[];
var inventories = []

var soldier = new classes("Soldier", 8, 5, 5, 5, 3, 5);
var teacher = new classes("Teacher", 5, 5, 5, 5, 8, 3);
var brawler = new classes("Brawler", 3, 8, 5, 5, 5, 5);
var gambler = new classes("Gambler", 5, 5, 3, 5, 5, 8);
var runner =  new classes("Runner",  5, 3, 5, 8, 5, 5);
var mechanic =new classes("Mechanic",5, 5, 8, 3, 5, 5);

var slingshot = new Item("Slingshot", "A slingshot for shooting", 0 , 2,0,0,0,0,0,true);
var book = new Item("Book", "Learn More!", 0,0,0,0,0,2,0,true);
var brassKnuckles = new Item("Brass Knuckles", "Brass Knuckles for fighting", 0, 0,2,0,0,0,0,true);
var luckyFoot = new Item("Lucky Rabbits Foot", "Increases Luck", 0,0,0,0,0,0,2,true);
var shoes = new Item("Tennis Shoes", "run faster", 0,0,0,0,2,0,0,true) ;
var wrench = new Item("Wrench", "A great blocking tool", 0,0,0,2,0,0,0,true);

//var charInventory = new Inventory(inventory)



  function classes(className, baseShot, baseStrength, baseDefense, baseAgility, baseBrains, baseLuck) {
  this.className = className;
  this.baseShot = baseShot;
  this.baseStrength = baseStrength;
  this.baseDefense = baseDefense;
  this.baseAgility = baseAgility;
  this.baseBrains = baseBrains;
  this.baseLuck = baseLuck;
  playerClasses.push(this);}

// function Inventory(items){
//   this.items = items;
// inventories.push(this);
// }



var select1 = document.getElementById("selectClass1");
var select2 = document.getElementById("selectClass2");
var select3 = document.getElementById("selectClass3");
var select4 = document.getElementById("selectClass4");


for(var x =0; x < playerClasses.length; x++){
  var opt = playerClasses[x].className;
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = playerClasses[x].className;

  select1.appendChild(el);
  select2.appendChild(el.cloneNode(true));
  select3.appendChild(el.cloneNode(true));
  select4.appendChild(el.cloneNode(true));
}
function addParty() {
  var selectedClass1 = playerClasses.find(cls => cls.className == select1.value);
  var selectedClass2 = playerClasses.find(cls => cls.className == select2.value);
  var selectedClass3 = playerClasses.find(cls => cls.className == select3.value);
  var selectedClass4 = playerClasses.find(cls => cls.className == select4.value);
  var p1 = new partyMem(document.getElementById('p1Name').value, document.querySelector('input[name="gender1"]:checked').value, selectedClass1, inventory);
  var p2 = new partyMem(document.getElementById('p2Name').value, document.querySelector('input[name="gender2"]:checked').value, selectedClass2, inventory);
  var p3 = new partyMem(document.getElementById('p3Name').value, document.querySelector('input[name="gender3"]:checked').value, selectedClass3, inventory);
  var p4 = new partyMem(document.getElementById('p4Name').value, document.querySelector('input[name="gender4"]:checked').value, selectedClass4, inventory);

var initialItem = "";
  for (var x = 0; x < PartyInfo.length; x++) {
var inventory = [];
    switch (PartyInfo[x].playerClass.className) {
      case "Soldier":
        initialItem= slingshot;

        break;
      case "Teacher":
        initialItem = book;

        break;
      case "Body Builder":
        initialItem = brassKnuckles;

        break;
      case "Gambler":
        initialItem = luckyFoot;

        break;
      case "Runner":
        initialItem = shoes;

        break;
      case "Mechanic":
        initialItem = wrench;

        break;
      default:
        initialItem = null;
        break;
        }

     for(var y = 0; y < 1; y++ ){



     }


    var member = new character(x, PartyInfo[x].playerClass.className,
      PartyInfo[x].name,
      1,
      0,
      PartyInfo[x].gender,
      15,
      PartyInfo[x].playerClass.baseShot,
      PartyInfo[x].playerClass.baseStrength,
      PartyInfo[x].playerClass.baseAgility,
      PartyInfo[x].playerClass.baseDefense,
      PartyInfo[x].playerClass.baseBrains,
      PartyInfo[x].playerClass.baseLuck,
      initialItem,
      null,
      inventory)



    partyMembers.push(member);

     member.inventory.push(initialItem);

   }




  console.log(partyMembers)
  function character( id, playerClass, playerName, playerLevel, exp, playerGender, hitPoints, shot, strength, agility, defense, brains, luck, hand1, hand2, inventory) {
    this.userClass = playerClass;
    this.playerName = playerName;
    this.playerGender = playerGender;
    this.playerLevel = playerLevel;
    this.exp = exp;
    this.hitPoints = hitPoints;
    this.shot = shot;
    this.strength = strength;
    this.agility = agility;
    this.defense = defense;
    this.brains = brains;
    this.luck = luck;
    this.hand1 = hand1;
    this.hand2 = hand2;
    this.inventory = inventory;
    player.push(this);
  }


  function partyMem(name, gender, playerClass, inventory) {
    this.name = name;
    this.gender = gender;
    this.playerClass = playerClass;
    this.inventory = inventory;
    PartyInfo.push(this);

  }
startGame();
}
  function Item(itemName, description, hpBonus, shotBonus, strengthBonus, defenseBonus, agilityBonus, brainsBonus, luckBonus, equippable) {
    this.itemName = itemName;
    this.description = description;
    this.hpBonus = hpBonus;
    this.shotBonus = shotBonus;
    this.strengthBonus = strengthBonus;
    this.defenseBonus = defenseBonus;
    this.agilityBonus = agilityBonus;
    this.brainsBonus = brainsBonus;
    this.luckBonus = luckBonus;
    this.equippable = equippable;


    items.push(this);
  }


function enemy(eName, eDescription, enemyHitPoints, eShot, eStrength, eDefense, eAgility, eBrains,  eLuck, eWeakness, expGiven, drop ){
  this.eName = eName;
  this.eDescription = eDescription;
  this.eHitPoints = eHitPoints;
  this.eShot = eShot;
  this.eStrength = eStrength;
  this.eDefense = eDefense;
  this.eAgility = eAgility;
  this.eBrains = eBrains;
  this.eLuck = eLuck;
  this.eWeakness = eWeakness;
  this.expGiven = expGiven;
  this.drop = drop;



}

//assets and such


// classes (or occupations) over custom stats



  //Shot
  //Strength
  //Agility
  //Brains
  //Luck

  //items


  //random events


  //









