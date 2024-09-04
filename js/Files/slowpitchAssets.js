var allPlayers = [];
const p1 = new player(1, "Matt Martiny", "2B 3B 1B C", "RF RC", 78, 86, 73, 58, 60, 63, 26, 15, 30, 55);
const p2 = new player(2, "Ryan Stufflebean", "C 1B", "LC RC LF", 76,93, 76, 48,57, 72,52, 45, 35,20);
const p3 = new player(3, "Joe Dearing", "2B SS 3B RC", "LF LC RF", 72, 87, 75, 66, 70,66,35,40,35,25);
const p4 = new player (4, "Liam McDaniel","1B 2B 3B SS LC RC RF LF", "P C",  82, 80, 75,  85,86,76,60,33,34,33);
const p5 = new player(5, "Tommy McDaniel", "3B LF LC 2B RC RF", "SS 1B C", 84, 101, 85, 76,77,77,29,30,40,30)
const p6 = new player(6,"Corey Moyer", "SS LC RC 2B 3B LF", "RF",  89, 83, 80, 82, 88,80,3,25,35,40);
const p7 = new player(7, "Rudy Lintner", "LF LC RC", "RF C", 72, 82, 75, 70,68,62,5, 50, 40, 10);
const p8 = new player(8, "Ben Hohly", "1B C", "P", 82, 70, 85, 25, 58,55, 75, 15,20,65);
const p9 = new player (9, "Adam Gabbert", "1B RC C", "RF LF LC", 74, 95, 75, 70,60,58,5, 20,60, 20)
const p10 = new player (10, "Bill Collins", "P 1B C", "RF 2B", 79, 78, 75, 60, 60,60,96, 40, 40, 20);




function player(id, name, position, position2, contact, power, placement, speed, fielding, arm, pitchAcc, leftSideHit, middleHit, rightSideHit, currentPosition, battingOrder){
  this.ID = id;
  this.fullName = name;
  this.Position = position;
  this.Position2 = position2;
  this.contact = contact;
  this.power = power;
  this.placement = placement
  this.speed = speed;
  this.fielding = fielding;
  this.arm = arm;
  this.pitchAcc = pitchAcc;
  this.lsideHit = leftSideHit;
  this.middleHit= middleHit;
  this.rsideHit = rightSideHit;
  



  this.currentPosition = currentPosition;
  this.battingOrder = battingOrder;
  allPlayers.push(this);
}




var oppPlayers = [];
var opp1 = new oppplayer(1001, "Joe Speicher", "P", "2B 1B C", 65, 55, 60, 60, 60, 55, 80,40,30,30,{posName:'P', posNum: 1, xpos: 35, ypos: 35  }, 7 );
var opp2 = new oppplayer(1002,"Kyle Pettey", "C", "2B", 60,50,50,58, 60,50,38,30,30,40,{posName:'C', posNum: 2, xpos:0, ypos:0 }, 8);
var opp3 = new oppplayer(1003, "Jon Roswell", "1B 3B", "2B RF", 60,60, 60,60, 60,60,30,30,40,30, {posName:'1B', posNum: 3, xpos:70, ypos:10}, 4);
var opp4 = new oppplayer( 1004, "Brian Miller", "2B SS", "C RF 1B", 60,60, 60,60,30,30,40,30,40,30, {posName:'2B', posNum: 4, xpos:80, ypos:45}, 1);
var opp5 = new oppplayer( 1005, "Joseph Matthews", "3B 2B", "RF RC 1B", 60,60, 60,60, 60,60,30,30,40,30, {posName:'3B', posNum: 5, xpos:10, ypos:70 }, 5);
var opp6 = new oppplayer(1006, "Michael Lemon", "SS 3B RC", "LF LC RF", 60,60, 60,60,60, 60,30,30,40,30,{posName:'SS', posNum: 6, xpos:45, ypos: 80}, 3);
var opp7 = new oppplayer(1007, "Steven Green", "LF RF RC", "LC", 60,60, 60,60, 60,60,30,30,40,30, {posName:'LF', posNum: 7, xpos:45, ypos:200 }, 6);
var opp8 = new oppplayer(1008, "Jacob Rutherford", "LC RC LF", "2B RF", 60,60, 60, 60, 60,60,30,30,40,30, {posName:'LC', posNum: 8, xpos:125, ypos:200}, 2);
var opp9 = new oppplayer(1009, "Brian Lee", "RF RC", "LF LC", 60,60, 60,60, 60, 60,30,30,40,30, {posName:'RF', posNum: 9, xpos:200, ypos:40 }, 10);
var opp10 = new oppplayer(1010, "Joe Mupo", "RC RF 2B", "SS 3B LF C LC", 60,60, 60, 60,60,60,30,30,40,30, {posName:'RC', posNum: 10, xpos:200, ypos:125}, 9);



function oppplayer(id, name, position, position2, contact, power,  speed, fielding,reaction, arm, pitchAcc, leftSideHit, middleHit, rightSideHit, currentPosition, battingOrder){

  this.ID = id;
  this.fullName = name;
  this.Position = position;
  this.Position2 = position2;
  this.contact = contact;
  this.power = power;
  this.speed = speed;
  this.fielding = fielding;
  this.reaction = reaction;
  this.arm = arm;
  this.pitchAcc = pitchAcc;
  this.lsideHit = leftSideHit;
  this.middleHit= middleHit;
  this.rsideHit = rightSideHit;
  this.currentPosition = currentPosition;
  this.battingOrder = battingOrder;
  oppPlayers.push(this);

}
