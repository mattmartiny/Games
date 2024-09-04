var c = document.getElementById("field");
var ctx = c.getContext("2d");
ctx.translate(0, c.height);
ctx.scale(1, -1);
var guessX = 0; //stores user's click on canvas
var guessY = 0; //stores user's click on canvas
function storeGuess(event) {
  var x = (event.offsetX)/2;
  var y = ((event.offsetY-875)* -1) /2;
  guessX = x;
  guessY = y;
  console.log("x coords: " + guessX + ", y coords: " + guessY);
}
var x = 0;
var y = 0;
var startAngle = 1;
var endAngle = 90;
var counterClockwise = false;
ctx.arc(x, y, 600, startAngle, endAngle, counterClockwise);
ctx.lineWidth = 1;
ctx.strokeStyle='black';
ctx.fillStyle='blue';
ctx.fill();

ctx.beginPath();
ctx.stroke();
ctx.lineWidth = 1;
ctx.arc(x, y, 400, startAngle,endAngle,);
ctx.fillStyle="red";
ctx.fill();
ctx.strokeStyle='black';
ctx.stroke();

ctx.beginPath()
ctx.arc(0, 0, 200,1, 90);
ctx.fillStyle="green";
ctx.fill();
ctx.strokeStyle='black';
ctx.stroke();


// ctx.fillStyle="white";
// ctx.fillRect(0, 120,8, 8);
// ctx.fillRect(120, 0, 8, 8);
// ctx.fillRect(120, 120, 8,8);






//var  playersOrder = [];
var myTeamHTML ='<table><tbody>'
var oppTeamHTML = '<table><tbody>'
// var positioning =
//   [{posName:"P", posNum: 1, xpos: 35, ypos: 35 },
//     {posName: "C", posNum: 2, xpos: 0, ypos: 0},
//     {posName: "1B", posNum: 3, xpos:70, ypos:10},
//     {posName: "2B", posNum: 4, xpos: 80, ypos: 45},
//     {posName: "3B", posNum: 5, xpos: 10, ypos: 70},
//     {posName:"SS", posNum: 6, xpos: 45, ypos: 80},
//     {posName: "LF", posNum: 7, xpos: 45, ypos: 200},
//     {posName: "LC", posNum: 8, xpos: 125, ypos: 200},
//     {posName:"RF", posNum: 9, xpos: 200, ypos: 40},
//     {posName: "RC", posNum:10, xpos: 200, ypos: 125}];
//
//
//
// ctx.fillStyle = "black";



// for(var x = 0; x < positioning.length; x++) {
//   ctx.fillRect(positioning[x].xpos*2, positioning[x].ypos*2, 6, 6);
// }
//
//
// for(var x = 0; x < positioning.length; x++) {
//   allPlayers[x].currentPosition = positioning[x];
//   if (allPlayers[x].currentPosition == null || allPlayers[x].currentPosition == "") {
//     if(x ==10 || x == 11){
//       allPlayers[x].currentPosition = "EH";
//     }
//     if(x < 11){
//       allPlayers[x].currentPosition = "BNCH";
//     }
//   }
// }


// var html = "<ul id='battingOrder' class=''>";
// for (i =0; i < allPlayers.length; i++) {
//   html += "<li id='"+allPlayers[i].ID+"'class='name' style='line-height:20px; list-style-type: none;'>" + allPlayers[i].fullName + "</li>";
// }
// html += "</ul>"




function ftps(player) {
  return player[0].speed * 0.1239696969697 + 14.87603030303;
}




// var html2 = "<ul id='posis' class='sortable2'>"
// for (i=0;i < allPlayers.length; i++){
//   html2 +="<li class='pos' id='"+allPlayers[i].currentPosition.posNum+"' style='line-height:20px; list-style-type: none;'>" +allPlayers[i].currentPosition.posName+'</li>';
// }
// html2 += "</ul>";
// document.getElementById("player-container").innerHTML = html;
// document.getElementById("player-container2").innerHTML = html2;
// $(".sortable2").sortable({
//   placeholder: "highlight",
//   stop: function (event, ui) {
//     $(".pos").each(function (i) {
//       var allThePlayers =  allPlayers[i];
//       allThePlayers.currentPosition.posName = ($(this).text()) ;
//       allThePlayers.currentPosition.posNum = ($(this).prop('id'));
//     });
//
//   }
// });








$('.btn').click(function(){
  document.getElementById("posis").style.display="none";
  document.getElementById("posis").className = 'noClass';
  document.getElementById("posbtn").style.display="none";
  document.getElementById('battingOrder').className ='sortable1'
  document.getElementById('ordbtn').style.display="block";
  $(".sortable1").sortable({
    placeholder: "highlight",
    stop: function (event, ui) {
      var sorted = $("#battingOrder").sortable('toArray');
      $(".name").each(function (i) {
        var id = sorted;
        var thisPlayer =  allPlayers.find( y=>y.ID== id[i]);

        var order = sorted.indexOf(thisPlayer.ID.toString());
        thisPlayer.battingOrder = order +1;
        playersOrder =   allPlayers.sort((a, b) => (a.battingOrder - b.battingOrder));
      });
    }
  });
});
// $('.btn2').click(function(){
//   document.getElementById('teams').style.display = "none";
//   for(i =0; i<playersOrder.length; i++) {
//     myTeamHTML += "<tr><td>" + playersOrder[i].fullName + "</td><td>" + playersOrder[i].currentPosition.posName + "</td></tr>"
//   }
//   myTeamHTML +="</tbody></table>"
//   document.getElementById("myTeamLineup").innerHTML = myTeamHTML;
//   document.getElementById("oppLineup").style.display = "block";
//   document.getElementById("play").style.display="block";
// })


// var oppOrder = oppPlayers.sort(function(a, b) {return a.battingOrder - b.battingOrder});
// for (let i =0; i < oppOrder.length; i++){
//
//   oppTeamHTML +="<tr><td>"+(i+1)+"</td><td>"+ oppOrder[i].fullName +"</td><td>"+oppOrder[i].currentPosition.posName +"</td></tr>"
// }
//
// oppTeamHTML += "</tbody></table>"
// document.getElementById("oppLineup").innerHTML = oppTeamHTML;
// document.getElementById("oppLineup").style.display="none";

playersOrder=[];


console.log(allPlayers.id);
playersOrder.push(allPlayers[0]);
playersOrder.push(allPlayers[1]);
console.log(playersOrder);



function cos(degrees) {
  var radians = (degrees * Math.PI) / 180;
  return Math.cos(radians);
}
function sin(degrees) {
  var radians = (degrees * Math.PI) / 180;
  return Math.sin(radians);
}

var c= -1;
$(".AB").click(function(){
  if(c < playersOrder.length-1){
    c++;
  }
  else{
    c= 0;
  }
  play(c);
})

function play(c){
  var player = playersOrder[c];
  atBat(player);
}


var resAngle;
var resHTML;

function atBat(player) {



  //set opposing Pitcher Acc to something like 85
  var oppAcc = 85;
  //Pitch Value
  var pv= Math.floor(Math.random() * 100)+1;


  //---logic for pitch----//

  //set pitch height to constant for now, lets say 40 inches
  var pHeight = 40;
  var initialHeight = (pHeight / 12)

  //function contact(player, initial height){
  physics(player, initialHeight);

  //}

}

function physics(player, initialHeight){
  initialHeight = initialHeight / 3.281;//convert initial height to meters from inches
  const gravityM = 9.81;
  //const gravity = 32.1740;
  const air = 1.1215;
  const sbr = 0.09652;
  const wbMass = 0.099208
  var pw = player.hitPower;//playersOrder[x].power;
  var exitVelo =  (Math.floor((Math.random() * ((pw+5)-(pw-10))) + (pw-10))* .40)
  var exitVelo = exitVelo * 1.44667; //meters per second from mph
  var ct = player.hitContact;//playersOrder[x].contact;
  var ldPerc = ct * .75;//lineDrive Percentage
  launchAngle(ldPerc);
  var h_0 = exitVelo * cos(resAngle);
  var v_0 = exitVelo * sin(resAngle);
  var dt = 0.02;
  dt = Math.max(0.001, dt);
  var area = (Math.PI * Math.pow(sbr, 2));
  var dragCoef = .4

  var airResistance = function (velocity, dragCoef, area) {
    var force = 0;
    force = (air * dragCoef * area/2)* Math.pow(velocity, 2);
    force = force * -1  * velocity/Math.abs(velocity); //makes sure that force goes in direction opposite of velocity
    return force;
  };

  var initVelo = gravityM + airResistance(exitVelo, dragCoef, area)/wbMass;
  var yNetAcc = gravityM + airResistance(v_0,dragCoef, area)/wbMass;
  var xNetAcc= airResistance(h_0, dragCoef,  area)/wbMass;
  var v_yNew = v_0 + (yNetAcc * dt);
  var v_xNew = h_0 + (xNetAcc * dt);
  var v_yAver =  (v_yNew + v_0)/2;
  var v_xAver = (v_xNew + h_0)/2;
  var verticalVelocity = v_yNew;
  var horizontalVelocity = v_xNew;
  var TOF;
  var Dist;
  var hmax;
  //if launchangle is 0
  if(resAngle <=0) {
    TOF = Math.sqrt(2 * initialHeight / gravityM);
    Dist = horizontalVelocity * TOF;
    hmax = initialHeight;
  }
  else {
    hmax =  (initialHeight + verticalVelocity * sin(resAngle))/(2* gravityM)
    TOF = [verticalVelocity * sin(resAngle) + Math.sqrt(Math.pow(verticalVelocity * sin(resAngle), 2) + 2 * gravityM* initialHeight)] / gravityM // hopefully a better formula

    //TOF = [verticalVelocity * sin(resAngle) + Math.sqrt(Math.pow(verticalVelocity * sin(resAngle), 2) + 2 * gravityM * initialHeight)] / gravityM // hopefully a better formula
    Dist = (horizontalVelocity * [verticalVelocity + Math.sqrt(Math.pow(verticalVelocity, 2) + 2 * gravityM * initialHeight)] / gravityM)
  }
  Dist = Dist/1.44667;
  bounce(TOF, hmax, verticalVelocity, initialHeight)
  function groundball(TOF, Player, resAngle, initialHeight, verticalVelocity){



  }


  hitLocation(player, Dist, TOF, resAngle, exitVelo);






  document.getElementById("Results").innerHTML +=  results(player, exitVelo, TOF, Dist)

}//end physics


function results(player, exitVelo, TOF, Dist) {
  resHTML = player.name + '<br />';
  resHTML += "Exit Velocity: " + exitVelo + '<br />';
  resHTML += "Launch Angle: " + resAngle + '<br />';
  resHTML += "Time of Flight: " + TOF + "<br />";
  resHTML += "Distance: " + Dist + "<br /><br />";
  return resHTML;
}

//contact value < line drive percentage
function launchAngle(ghp){
  var lineDrive = Math.floor(Math.random() * 40) + 10; //  10 to 50
  var flyball = Math.floor(Math.random() * 15) + 50; // 50 to 65
  var popup = Math.floor(Math.random() * 10) + 65; //65 to 75
  var groundball = Math.floor(Math.random() * 10) - 5; //-5 to 5
  var roller = Math.floor(Math.random() * 10) - 15; // -15 to -5
  //contactValue
  var cv = (Math.random() * 100)+1;
  //badHitValue
  var bhv = Math.floor(Math.random() * 100)+1;
  if(cv < ghp){
    resAngle = lineDrive;
  }else {
    switch(true){
      case bhv < 5:
        resAngle = roller;
        break;
      case bhv >= 5 && bhv < 45:
        resAngle=  groundball;
        break;
      case bhv >=45 && bhv < 75:
        resAngle = flyball;
        break;
      case bhv > 75:
        resAngle = popup;
        break;
      default:
        break;
    }
  }
}



function hitLocation(player, Dist, TOF, resAngle, oppOrder){
  var locAngle = hitLocAngle(player);
  var x =  cos(locAngle) * Dist *2;
  var y = sin(locAngle) * Dist *2;

  x = Math.min(875, x);
  y = Math.min(875,y)
  //
  // console.log("("+x + "," + y+")");
  ctx.fillStyle = "#FFCC00";
  ctx.fillRect((x)-2.5,(y)-2.5, 5, 5,);

  switch(true){
    case TOF > 1.15 && Dist < 300:
      flyball(TOF, player, Dist, x, y, oppOrder)
      break;
    // case resAngle <= 15:
    //   groundball
    //   break;

    default:
      ctx.fillStyle = "#FFCC00";
      ctx.fillRect((x)-2.5,(y)-2.5, 5, 5,)
      break;


  }
}



var hitLocAngle = function(player){
  var d = Math.random() * 100;
//RightSideHit <= 30;
//Middle >= 30 <= 60
//leftSide >= 60
  var rs = Math.floor(Math.random()* 35) -5
  var mi = Math.floor(Math.random()* 30) + 30;
  var ls = Math.floor(Math.random()* 30) + 60;

  var  hitloc = {rightSide: (player.rsideHit/100), middle: (player.middleHit/100), leftSide: (player.lsideHit/100)};
  var sum = 0;
  for(let j in hitloc){
    sum += hitloc[j];
  }function pick_random(){
    var pick = Math.random()*sum;
    for(let j in hitloc){
      pick -= hitloc[j];
      if(pick <= 0){
        return j;
      }
    }
  }
  switch(pick_random()){
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

function flyball(TOF, player, Dis, x, y){
  //if a fielder can get to the ball before the TOF ends based on their speed, it's an out
  //for each second in the air, a fielder can move their ftps. If the fielder can get to the ball before it hits the ground,
  // it's an out
  // need to take into account fielding as well decide if I want to leave that up to a random number generator or something different

//the distance between point of the ball and the closest fielder
  function distance(p) {
    return Math.sqrt(Math.pow(point.xpos - p.xpos, 2) + Math.pow(point.ypos - p.ypos, 2))
  }
  // set a range factor so a player doesn't get a perfect jump on every ball.  Eventually put this into individual players
  // range of 100 = .1 second of delay 0 = 1.5 second delay


  var rangeFactor = 50

  var delay = -0.0090909090909091*rangeFactor+1.0090909090909;

  var point = {xpos: x, ypos: y};
  var positions = [];
  for(i=0; i < positioning.length; i++){
    positions.push({xpos: oppOrder[i].currentPosition.xpos, ypos: oppOrder[i].currentPosition.ypos});
  }

  var closest = positions.reduce((a, b) => distance(a ) < distance(b) ? a : b);
  var closestPlayer = oppOrder.filter(opp => opp.currentPosition.xpos == closest.xpos && opp.currentPosition.ypos == closest.ypos);
  console.log("closest: "+  closestPlayer[0].currentPosition.posName)

  var rangeInFlight = (TOF - delay) * ftps(closestPlayer);
  var playerField = closestPlayer[0].fielding

  console.log("range in flight "+ rangeInFlight)
  var trackDist = (Math.hypot(point.xpos - closest.xpos, point.ypos - closest.ypos)/ 2)-3.5;
  //subtract 3.5 for a) balls at the feet, or b) the 3.5 feet start the ball over a players head might get, eventually make this
  //a better formula

  console.log("track Dist "+trackDist)
  closest= [];


  if(trackDist >  rangeInFlight){
    ctx.fillStyle = "red";
    console.log(x+ ", " + y)
    ctx.fillRect((x)-2.5,(y)-2.5, 5, 5,);
    console.log('out')
  }else{
    console.log('hit');
    ctx.fillStyle = "limegreen";
    ctx.fillRect((x)-2.5,(y)-2.5, 5, 5,);
  }
}

function groundball(TOF, Player, initialHeight, verticalVelocity){



}





function bounce(TOF, hmax, verticalVelocity,  initialHeight){
  //going to need to calculate max height, and find coefficient of restitution
//var h0 = initialHeight;//hmax
  var v = verticalVelocity;



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
  var  bounces = 0;

  while(height > .015){
    height = (height * .44) ;
    distance += height *2;
    bounces += 1;
  }

  console.log(distance);
  console.log(bounces);
// console.log(H.length)
// console.log([H, T])

}















