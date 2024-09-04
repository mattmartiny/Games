var c = document.getElementById("field");
var ctx = c.getContext("2d");
ctx.translate(0, c.height);
ctx.scale(1, -1);
var guessX = 0; //stores user's click on canvas
var guessY = 0; //stores user's click on canvas
function storeGuess(event) {
  var x = (event.offsetX) / 2;
  var y = ((event.offsetY - 875) * -1) / 2;
  guessX = x;
  guessY = y;
  console.log("x coords: " + guessX + ", y coords: " + guessY);
}
var x = 0;
var y = 0;
var radius = 300 * 2;
var startAngle = 1;
var endAngle = 90;
var counterClockwise = false;
ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.fillStyle = 'green';
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.arc(x, y, 220, startAngle, endAngle);
ctx.fillStyle = "brown";
ctx.fill();
ctx.stroke();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = "white";
ctx.fillRect(0, 130, 8, 8);
ctx.fillRect(130, 0, 8, 8);
ctx.fillRect(130, 130, 8, 8);


var playersOrder = [];
var myTeamHTML = '<table><tbody>'
var oppTeamHTML = '<table><tbody>'
var positioning =
  [{ posName: "P", posNum: 1, xpos: 35, ypos: 35 },
  { posName: "C", posNum: 2, xpos: 0, ypos: 0 },
  { posName: "1B", posNum: 3, xpos: 70, ypos: 10 },
  { posName: "2B", posNum: 4, xpos: 80, ypos: 45 },
  { posName: "3B", posNum: 5, xpos: 10, ypos: 70 },
  { posName: "SS", posNum: 6, xpos: 45, ypos: 80 },
  { posName: "LF", posNum: 7, xpos: 45, ypos: 200 },
  { posName: "LC", posNum: 8, xpos: 125, ypos: 200 },
  { posName: "RF", posNum: 9, xpos: 200, ypos: 40 },
  { posName: "RC", posNum: 10, xpos: 200, ypos: 125 }];



ctx.fillStyle = "black";
for (var x = 0; x < positioning.length; x++) {
  ctx.fillRect(positioning[x].xpos * 2, positioning[x].ypos * 2, 6, 6);
}

const resultsDiv = document.getElementById('Results');

function scrollToBottom() {
    resultsDiv.scrollTop = resultsDiv.scrollHeight;
}









for (var x = 0; x < positioning.length; x++) {
  allPlayers[x].currentPosition = positioning[x];
  if (allPlayers[x].currentPosition == null || allPlayers[x].currentPosition == "") {
    if (x == 10 || x == 11) {
      allPlayers[x].currentPosition = "EH";
    }
    if (x < 11) {
      allPlayers[x].currentPosition = "BNCH";
    }
  }
}


for (let i = 0; i < allPlayers.length; i++) {
  allPlayers[i].battingOrder = i + 1; // default batting order if not sorted
}

var html = "<ul id='battingOrder' class=''>";
for (i = 0; i < allPlayers.length; i++) {
  html += "<li id='" + allPlayers[i].ID + "'class='name' style='line-height:20px; list-style-type: none;'>" + allPlayers[i].fullName + "</li>";
}
html += "</ul>"

var html2 = "<ul id='posis' class='sortable2'>"
for (i = 0; i < allPlayers.length; i++) {
  html2 += "<li class='pos' id='" + allPlayers[i].currentPosition.posNum + "' style='line-height:20px; list-style-type: none;'>" + allPlayers[i].currentPosition.posName + '</li>';
}
html2 += "</ul>";
document.getElementById("player-container").innerHTML = html;
document.getElementById("player-container2").innerHTML = html2;
$(".sortable2").sortable({
  placeholder: "highlight",
  stop: function (event, ui) {
    $(".pos").each(function (i) {
      var allThePlayers = allPlayers[i];
      allThePlayers.currentPosition.posName = ($(this).text());
      allThePlayers.currentPosition.posNum = ($(this).prop('id'));
    });

  }
});

$('.btn').click(function () {
  document.getElementById("posis").style.display = "none";
  document.getElementById("posis").className = 'noClass';
  document.getElementById("posbtn").style.display = "none";
  document.getElementById('battingOrder').className = 'sortable1';
  document.getElementById('ordbtn').style.display = "block";

  // Make sorting optional
  $(".sortable1").sortable({
    placeholder: "highlight",
    stop: function (event, ui) {
      var sorted = $("#battingOrder").sortable('toArray');
      if (sorted.length > 0) {
        $(".name").each(function (i) {
          var id = sorted;
          var thisPlayer = allPlayers.find(y => y.ID == id[i]);

          var order = sorted.indexOf(thisPlayer.ID.toString());
          thisPlayer.battingOrder = order + 1;
        });
        playersOrder = allPlayers.sort((a, b) => (a.battingOrder - b.battingOrder));
      }
    }
  });
});


$('.btn2').click(function () {
  document.getElementById('teams').style.display = "none";

  if (playersOrder.length === 0) {
    playersOrder = allPlayers.slice(); // use default order if not sorted
  }

  for (let i = 0; i < playersOrder.length; i++) {
    myTeamHTML += "<tr><td>" + playersOrder[i].fullName + "</td><td>" + playersOrder[i].currentPosition.posName + "</td></tr>";
  }
  myTeamHTML += "</tbody></table>";
  document.getElementById("myTeamLineup").innerHTML = myTeamHTML;
  document.getElementById("oppLineup").style.display = "block";
  document.getElementById("play").style.display = "block";
});


var oppOrder = oppPlayers.sort(function (a, b) { return a.battingOrder - b.battingOrder });
for (let i = 0; i < oppOrder.length; i++) {

  oppTeamHTML += "<tr><td>" + (i + 1) + "</td><td>" + oppOrder[i].fullName + "</td><td>" + oppOrder[i].currentPosition.posName + "</td></tr>"
}

oppTeamHTML += "</tbody></table>"
document.getElementById("oppLineup").innerHTML = oppTeamHTML;
document.getElementById("oppLineup").style.display = "none";


function cos(degrees) {
  var radians = (degrees * Math.PI) / 180;
  return Math.cos(radians);
}
function sin(degrees) {
  var radians = (degrees * Math.PI) / 180;
  return Math.sin(radians);
}


function ftps(player) { //feet per second
  speed = player.speed
  var speedModifier = 26.4 / 99; 

  return speed * speedModifier;
}


function calculateArm(player, minSpeed = 50, maxSpeed = 90, minRating = 1, maxRating = 99) {
  if (player.arm <= minRating) {
      return minSpeed;
  } else if (player.arm >= maxRating) {
      return maxSpeed;
  }

  // Calculate the speed
  const throwSpeed = ((player.arm - minRating) / (maxRating - minRating)) * (maxSpeed - minSpeed) + minSpeed;

  // Round the result to the nearest integer
  return throwSpeed * 1.46667;
}

function calculateReactionTime(player) {
  return 0.8 - ((player.reaction - 1) / 98) * 0.65;
}





var c = -1;
var resultOnBatter;
var resultOfPitch = '';

function Swing(type){
  
  if (resultOnBatter == true) {
    if (c < playersOrder.length - 1) {
      c++;
    }
    else {
      c = 0;
    };
  } else {
    if (c < playersOrder.length - 1 && c != -1) {
      c = c
    }
    else {
      c = 0;
    };

  }
  var player = playersOrder[c];
switch(type){
  case 'Power':
power(player)
break;
case 'Line Drive':
lineDrive(player)
break;
case 'Grounder':
grounder(player)
  break;
}
}

var resAngle;
var resHTML;
var pHeight = 40;
var initialHeight = (pHeight / 12)

function lineDrive(player) {
var placementValue = player.placement
var randomFactor = Math.random() * (1.2 - 0.8) + 0.8;
var placementEffectiveness = placementValue * randomFactor 
console.log(placementEffectiveness)
physics(player, initialHeight, 'Line Drive', placementEffectiveness)
}
function grounder(player) {
  var placementValue = player.placement
  var randomFactor = Math.random() * (1.2 - 0.8) + 0.8;
  var placementEffectiveness = placementValue * randomFactor 
  console.log(placementEffectiveness)
  physics(player, initialHeight, 'Grounder', placementEffectiveness)
  }  
function power(player) {
  var placementValue = player.placement
  var randomFactor = Math.random() * (1.2 - 0.8) + 0.8;
  var placementEffectiveness = placementValue * randomFactor 
  console.log(placementEffectiveness)
  physics(player, initialHeight, 'Power', placementEffectiveness)
}

function physics(player, initialHeight, swingType, placementNum) {
  initialHeight = initialHeight / 3.281; // convert initial height to meters from inches
  const gravityM = 9.81;
  const air = 1.1215;
  const sbr = 0.09652;
  const sbMass = 0.198;
  var power = player.power;
  var contact = player.contact;

  // Generate a random factor between 0.8 and 1.2 to simulate the quality of the swing
  var randomFactor = Math.random() * (1.2 - 0.8) + 0.8;
  // Calculate the swing effectiveness based on contact and the random factor
  var swingEffectiveness = contact / 100 * randomFactor;
  // Calculate the exit velocity, ensuring it does not exceed the max power (88)
  var exitVelo = power * swingEffectiveness;
  // Cap the exit velocity at the max power value
  exitVelo = Math.min(exitVelo, power); 
  console.log("Exit Velocity: " + exitVelo);

  var exitVeloM = exitVelo * 0.44704; // convert mph to m/s

  launchAngle(swingType, placementNum);
  var angleInRadians = resAngle * (Math.PI / 180); // Convert resAngle to radians

  var h_0 = exitVeloM * Math.cos(angleInRadians); // horizontal velocity
  var v_0 = exitVeloM * Math.sin(angleInRadians); // vertical velocity

  var dt = 0.02;
  dt = Math.max(0.001, dt);
  var area = (Math.PI * Math.pow(sbr, 2));
  var dragCoef = 0.59;

  var airResistance = function (velocity, dragCoef, area) {
      var force = (air * dragCoef * area / 2) * Math.pow(velocity, 2);
      force = force * -1 * velocity / Math.abs(velocity); // ensure force goes in the opposite direction of velocity
      return force;
  };

  var yNetAcc = gravityM + airResistance(v_0, dragCoef, area) / sbMass;
  var xNetAcc = airResistance(h_0, dragCoef, area) / sbMass;

  var v_yNew = v_0 + (yNetAcc * dt);
  var v_xNew = h_0 + (xNetAcc * dt);
  var verticalVelocity = v_yNew;
  var horizontalVelocity = v_xNew;

  var TOF, Dist, hmax;

  if (resAngle == 0) {
      TOF = Math.sqrt(2 * initialHeight / gravityM);
      Dist = horizontalVelocity * TOF;
      hmax = initialHeight;
  } else {
      // Calculate max height (hmax)
      hmax = initialHeight + Math.pow(v_0, 2) / (2 * gravityM);

      // Calculate Time of Flight (TOF)
      TOF = (v_0 + Math.sqrt(Math.pow(v_0, 2) + 2 * gravityM * initialHeight)) / gravityM;

      // Calculate Distance (Dist)
      Dist = h_0 * TOF;
  }

  Dist = Dist * 3.281; // Convert distance back to feet

  // Output results
  hitLocation(player, Dist, TOF, exitVelo, hmax);
  document.getElementById("Results").innerHTML += results(player, exitVelo, TOF, Dist);
  resultOnBatter = true;
  scrollToBottom()
}

function results(player, exitVelo, TOF, Dist) {
  resHTML = player.fullName + '<br />';
  resHTML += "Exit Velocity: " + exitVelo + '<br />';
  resHTML += "Launch Angle: " + resAngle + '<br />';
  resHTML += "Time of Flight: " + TOF + "<br />";
  resHTML += "Distance: " + Dist + "<br />";
  resHTML += resultOfPitch + "<br /><br />"
    return resHTML;
}

//contact value < line drive percentage
function launchAngle(swingType, placementNum) {
var flyball = Math.floor(Math.random() * 26) + 25; // 25 to 50
var popup = Math.floor(Math.random() * 50) + 51; // 51 to 100 (greater than 50)
var groundball = Math.floor(Math.random() * 10); // 0 to 9 (less than 10)
var lineDrive = Math.floor(Math.random() * 16) + 10; // 10 to 25

var hv = Math.floor(Math.random() * 100) + 1;
switch(swingType){
  case 'Power':
    if (placementNum > hv){
        resAngle = flyball
    }else{
        otherOutcomes = [lineDrive, popup, groundball]
        randomIndex = Math.floor(Math.random() * otherOutcomes.length);
        resAngle=otherOutcomes[randomIndex]
}
break;
case 'Line Drive':
    if (placementNum > hv){
        resAngle = lineDrive
    }else{
        otherOutcomes = [flyball, popup, groundball]
        randomIndex = Math.floor(Math.random() * otherOutcomes.length);
        resAngle=otherOutcomes[randomIndex]
}
break;
case 'Grounder':
    if (placementNum > hv){
        resAngle = groundball
    }else{
        otherOutcomes = [flyball, popup, lineDrive]
        randomIndex = Math.floor(Math.random() * otherOutcomes.length);
        resAngle=otherOutcomes[randomIndex]
}
break;
}
}



function hitLocation(player, Dist, TOF, exitVelo, hmax) {
  var locAngle = hitLocAngle(player);
  var x = cos(locAngle) * Dist * 2;
  var y = sin(locAngle) * Dist * 2;

  x = Math.min(875, x);
  y = Math.min(875, y)
  //
  // console.log("("+x + "," + y+")");
  ctx.fillStyle = "#FFCC00";
  ctx.fillRect((x) - 2.5, (y) - 2.5, 5, 5,);

switch (true) {
    //flyball
    //case TOF > 1.15 && Dist < 300:
case Dist < 0:
//foulball
console.log('foul ball. Strike')
break;
case resAngle > 25 && resAngle < 50:
    console.log('flyball')
      flyball(TOF, player, Dist, x, y)
break;
      //groundball
case resAngle <= 9:
     console.log('groundball')   
     groundball(exitVelo, player, x, y)
break;
      //line drive
case resAngle >= 10 && resAngle <= 25:
      console.log('Line Drive')
break;
//pop up;
  case resAngle > 50:
    console.log('popup')
    flyball(TOF, player, Dist, x, y, oppOrder)
    break;

    default:
      ctx.fillStyle = "#FFCC00";
      ctx.fillRect((x) - 2.5, (y) - 2.5, 5, 5,)
      break;


  }
}

//where on the field the ball is hit 
var hitLocAngle = function (player) {
  //RightSideHit <= 30;
  //Middle >= 30 <= 60
  //leftSide >= 60
  var rs = Math.floor(Math.random() * 35) - 5
  var mi = Math.floor(Math.random() * 30) + 30;
  var ls = Math.floor(Math.random() * 30) + 60;

  var hitloc = { rightSide: (player.rsideHit / 100), middle: (player.middleHit / 100), leftSide: (player.lsideHit / 100) };
  var sum = 0;
  for (let j in hitloc) {
    sum += hitloc[j];
  }
  function pick_random() {
    var pick = Math.random() * sum;
    for (let j in hitloc) {
      pick -= hitloc[j];
      if (pick <= 0) {


        return j;
      }
    }
  }
  switch (pick_random()) {
    case "leftSide":
      return ls;
      break;
    case "middle":
      return mi;
      break;
    case "rightSide":
      return rs;
      break;
  }
}




function flyball(TOF, player, Dist, x, y) {
  // Calculate the distance between two points
  function distance(p1, p2) {
    return Math.sqrt(Math.pow(p1.xpos - p2.xpos, 2) + Math.pow(p1.ypos - p2.ypos, 2));
  }

  // Calculate range factor based on fielding delay
  var rangeFactor = 50;
  var delay = -0.090909090909091 * rangeFactor + 1.090909090909;

  var ballPosition = { xpos: x, ypos: y };
  var positions = [];

  // Create a list of fielder positions
  for (var i = 0; i < positioning.length; i++) {
    positions.push({ xpos: oppOrder[i].currentPosition.xpos, ypos: oppOrder[i].currentPosition.ypos });
  }

  // Find the closest fielder
  var closest = positions.reduce((closest, current) => 
    distance(ballPosition, current) < distance(ballPosition, closest) ? current : closest
  );
  var closestPlayer = oppOrder.find(opp => opp.currentPosition.xpos === closest.xpos && opp.currentPosition.ypos === closest.ypos);

  if (!closestPlayer) {
    console.error("No valid fielder found.");
    return;
  }

  console.log("Closest player: " + closestPlayer.currentPosition.posName);

  var rangeInFlight = (TOF - delay) * ftps(closestPlayer);
  var playerFielding = closestPlayer.fielding;

  console.log("Range in flight: " + rangeInFlight);

  var trackDist = (distance(ballPosition, closest) / 2) - 3.5;
  console.log("Track distance: " + trackDist);

  if ((trackDist > rangeInFlight) && (Dist < 300)) {
    ctx.fillStyle = "red";
    ctx.fillRect(x - 2.5, y - 2.5, 5, 5);
    console.log(`Out.  Ball Caught by ${closestPlayer.fullName}.`)
resultOfPitch = `Out.  Ball Caught by ${closestPlayer.fullName}.`

  } else if (Dist > 300){
console.log('Home Run!')
ctx.fillStyle = 'blue';
ctx.fillRect(x - 2.5, y - 2.5, 5, 5);
resultOfPitch ='Home Run!'

 }  
  else {
    console.log(`Hit.  Ball cut off by ${closestPlayer.fullName}`);
    ctx.fillStyle = "limegreen";
    ctx.fillRect(x - 2.5, y - 2.5, 5, 5);
    resultOfPitch = `Hit.  Ball cut off by ${closestPlayer.fullName}`
  
  }
}


function groundball(exitVelo, player, x, y) {
  var distanceToBase = 65; // in feet
  var outfieldThreshold = 220; // A distance threshold that represents when the ball reaches the outfield
  var bases = {
      "HP": { xpos: 0, ypos: 0 },
      "1B": { xpos: 130, ypos: 0 },
      "2B": { xpos: 130, ypos: 130 },
      "3B": { xpos: 0, ypos: 130 }
  };

  var targetBase = "1B";
  var ballPosition = { xpos: x, ypos: y };

  // Function to calculate distance between two points
  function distance(x1, y1, x2, y2) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  // Function to calculate the number of bounces based on exit velocity
  function calculateBounces(exitVelo) {
      return Math.max(1, Math.round(5 - (exitVelo / 20))); // Example: high exit velocity results in fewer bounces
  }

  // Function to calculate the distance lost per bounce based on exit velocity
  function distancePerBounce(exitVelo) {
      return Math.max(5, 20 - (exitVelo / 5)); // Example: high exit velocity results in longer distances between bounces
  }

  // Function to calculate throw time based on distance
  function calculateThrowTime(distance, player) {
      return distance / calculateArm(player);
  }

  // Calculate the number of bounces and the distance lost per bounce
  var bounces = calculateBounces(exitVelo);
  var bounceDistance = distancePerBounce(exitVelo);

  // Calculate the adjusted distance considering bounces
  var adjustedDistance = distanceToBase + (bounces * bounceDistance);
  var positions = [];

  for (var i = 0; i < positioning.length; i++) {
      positions.push({ xpos: oppOrder[i].currentPosition.xpos, ypos: oppOrder[i].currentPosition.ypos });
  }

  // Find the closest fielder who can intercept the ball
  var closestFielder = null;
  var shortestTime = Infinity;
 


  for (var i = 0; i < positions.length; i++) {
      var fielder = oppOrder[i];
      var fielderDistanceToBall = distance(ballPosition.xpos, ballPosition.ypos, fielder.currentPosition.xpos, fielder.currentPosition.ypos);
      var ballTravelTime = fielderDistanceToBall / (exitVelo * 1.467); // Ball travel time in seconds
      var fielderTime = fielderDistanceToBall / ftps(fielder); // Fielder's time to reach the ball

      // Add reaction time to fielder's total time to reach the ball
      var totalFielderTime = fielderTime + calculateReactionTime(fielder);

      if (totalFielderTime < ballTravelTime && fielderDistanceToBall < outfieldThreshold) {
          // This fielder can intercept the ball
          if (totalFielderTime < shortestTime) {
              shortestTime = totalFielderTime;
              closestFielder = fielder;
          }
      }
  }

  // If no fielder can intercept, use the original closest fielder logic
  if (!closestFielder) {
      closestFielder = oppOrder.reduce((closest, current) => 
          distance(ballPosition.xpos, ballPosition.ypos, current.currentPosition.xpos, current.currentPosition.ypos) < 
          distance(ballPosition.xpos, ballPosition.ypos, closest.currentPosition.xpos, closest.currentPosition.ypos) ? current : closest
      );
  }

  // Calculate time for the runner to reach the base
  var runnerTime = distanceToBase / ftps(player)

  // Get the target base position
  var basePosition = bases[targetBase];

  // Calculate the distance from the fielder to the target base
  var throwDistance = distance(closestFielder.currentPosition.xpos, closestFielder.currentPosition.ypos, basePosition.xpos, basePosition.ypos);

  // Calculate the throw time based on the distance to the base
  var throwTime = calculateThrowTime(throwDistance, closestFielder);

  // Calculate fielder's reaction time based on their rating
  var fielderReactionTime = calculateReactionTime(closestFielder)
  // Calculate time for the closest fielder to field the ball and make a throw
  var fielderSpeed = closestFielder.speed; // Speed of the closest fielder
  var fieldTime = totalFielderTime; // Now includes reaction time

  // Calculate total time for fielder
  var totalFieldTime = fieldTime + throwTime + fielderReactionTime;

  // Compare times to determine if the runner is safe or out
  if (runnerTime < totalFieldTime) {
      console.log('Safe');
      console.log(`Base hit.  Cut off by ${closestFielder.fullName}.`)
      ctx.fillStyle = "limegreen";
    ctx.fillRect(x - 2.5, y - 2.5, 5, 5);
    resultOfPitch = `Base hit.  Cut off by ${closestFielder.fullName}.`
  } else {
      console.log('Out');
      console.log(`Out. Thrown out by ${closestFielder.fullName}.`)
      ctx.fillStyle = "red";
      ctx.fillRect(x - 2.5, y - 2.5, 5, 5);
      resultOfPitch = `Out. Thrown out by ${closestFielder.fullName}.`
  }
}







function bounce(hmax, exitVelo) {
  //going to need to calculate max height, and find coefficient of restitution
  //var h0 = initialHeight;//hmax
  // var v = verticalVelocity;
  // var g = 9.81;
  // var t = 0;
  // var dt = 0.02;
  // var rho = 0.44;
  // var tau = TOF;
  // hmax = h0;
  // var h = h0;
  // var hstop =0.01
  // var freefall = true;
  // var t_last = -Math.sqrt(2* h0/ g) //time we would have launched to get to h0 at t=0
  // var vmax = Math.sqrt( 2 * hmax * g);
  //
  // var H = [];
  // var T = [];
  //
  // while(hmax > hstop){
  //   if(freefall) {
  //     var hnew = h + v * dt - .05 * g * dt * dt;
  //     if (hnew < 0) {
  //       t = t_last + 2 * Math.sqrt(2 * hmax / g);
  //       freefall = false;
  //       t_last = t + tau
  //       h = 0;
  //     } else {
  //       t = t + dt;
  //       v = v - g * dt;
  //       h = hnew;
  //     }
  //   }
  //     else{
  //       t = t+ tau;
  //       vmax = vmax *rho;
  //       v = vmax;
  //       freefall = true;
  //       h = 0;
  //     hmax = 0.5 * vmax*vmax/g
  //
  //   }
  // hmax = 0.5 * vmax*vmax/g
  // H.push(h)
  // T.push(t)
  //
  //   }
  var height = hmax;
  var distance = height;
  var bounces = 0;

  while (height > .015) {
    height = (height * .44);
    distance += height * 2;
    bounces += 1;
  }

  console.log(distance);
  console.log(bounces);
  // console.log(H.length)
  // console.log([H, T])

//groundball(distance, bounces, exitVelo)
}



//---------------------------------new stuff-------------------------------------
//-----------old Code for physics----------------  
//---logic for pitch----//
//set pitch height to constant for now, lets say 40 inches

//function contact(player, initial height){

let strikes = 1;
let balls = 1;
let outs = 0
//set opposing Pitcher Acc to something like 85
var oppAcc = 65;



//power approach +3 power -3 contact
//contact approach +3 contact - 3 power
//normal approach

//Pitch Value

//player discipline for testing
let pd = 45; //plate discipline


let strikePitch = Math.floor(oppAcc * .667)
let fityBall = Math.floor(((100 - oppAcc) * .667) + oppAcc)


//strike -- player swings 
//50/50 strike  -- player swings depending on discipline (and number of strikes)
//ball  -- player takes
//50/50 ball  --- player either takes or swings depending on discipline

function neutralApproach(player) {
  var pv = Math.floor(Math.random() * 100) + 1;
  var hv = Math.floor(Math.random() * 100) + 1
  if (pv < oppAcc) {
    if (pv < (strikePitch)) {
      console.log(pv + '  strike')
      //contact or swing and miss
      physics(player, initialHeight)
    }
    else {
      console.log(pv + '  50/50 strike')
      //player swing dependent on discipline, less likely to be mishit than 50/50 ball in this case, if the players pd is 100, he will swing everytime
      //possibly give option to work count through each at bat later on 
      if (hv < pd) {
        console.log('batter swings at 50/50 strike')

        //logic for swing and miss or contact   if(....)   
        physics(player, initialHeight)
        //}
      } else {
        console.log('batter takes strike')
        resultOnBatter = false
        return strike()

      }
    }

  } else {
    if (pv < fityBall) {
      console.log(pv + ' Fifty/Fifty Ball')
      ///player swing dependent on discipline. if players pd is 100, he will take everytime
      if (pd < hv) {
        console.log('batter takes 50/50 ball')
        resultOnBatter = false
        return ball()
      } else {
        console.log('player swings at 50/50 ball')
        //contact or swing and miss
        physics(player, initialHeight)

      }
    } else {
      console.log(pv + ' ball')
      //player takes
    }
  }

}



function aggressiveApp(player) {



}

function patientApproach(player) {




}
function takeAllTheWay(player) {


}

function ball() {
  balls++
}
function strike() {
  strikes++;
}

function contact(player) {

  hv



}
