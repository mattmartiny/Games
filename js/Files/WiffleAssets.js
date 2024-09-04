var allPlayers =[];
const jug = new player(0, "Jugger", 100,100, 100, 100, 100, 100, 100, "Cheat player")
const matt = new player (1, "Matt", 95, 90, 80,75,75,80,60, "Hitter");
const kyle =new player(2, "Kyle", 80, 90, 85, 80,80, 75,65, "Pitcher");
const rj = new player(3, "RJ", 75, 90, 70, 70, 75, 80, 95, "Speed and defense");
const jon =new player(4, "Jon", 75,80,65,85,70,65,65,"Solid all around")
const nate =new player(5,"Nate", 65,70, 55,80,65,65,65, "Young good player");
const luke =new player(6, "Luke", 70,65,60,60,80,65, 70, "Silly and quick");
const josh = new player(7, "Josh", 75, 65,70,70,65,70,65, "Tall lanky and has some power");
const alex = new player(8, "Alex", 70, 70, 80,55,75, 75,90, "Quick and solid lefty");
const rebecca = new player(9, "Rebecca", 40,60,40,10,10,60,50, "Tries really hard");
const kendra = new player(10, "Kendra", 55,60, 10, 40, 10, 60, 65, "Plus defense and speed")


function player(id, name, hitPower, hitContact, pitchVelo, pitchAcc, pitchMove, defense, speed, blurb){
  this.id = id;
  this.name = name;
  this.hitPower = hitPower;
  this.hitContact = hitContact;
  this.pitchVelo = pitchVelo;
  this.pitchAcc = pitchAcc;
  this.pitchMove = pitchMove;
  this.defense = defense;
  this.speed = speed;
  this.blurb = blurb;
  allPlayers.push(this);



}
