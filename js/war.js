const pPoints = document.getElementById('playerPoints');
const oPoints = document.getElementById('oppPoints');
const pChoice = document.querySelector('.player');

const cChoice = document.querySelector('.computer');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');
const cPlayed = document.getElementById('played');
const end = document.getElementById('result');
const resetBtn =  document.getElementById('reset');
let playerPoints = 0;
let oppPoints = 0;


var oT;
var pT;
var player =[];
var opp = [];
var suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
var values = [
  {name:"2", value:2},
  {name:"3",value:3},
  {name:"4", value:4},
  {name:"5", value:5},
  {name:"6", value:6},
  {name:"7", value:7},
  {name:"8", value: 8},
  {name:"9", value:9},
  {name:"10", value:10},
  {name:"Jack", value:11},
  {name:"Queen", value:12},
  {name:"King", value:13},
  {name:"Ace", value:14}];
var nValue =[2,3,4,5,6,7,8,9,10,11,12,13,14]
var i = 0;
var x=0;

var c = 0
function getDeck()
{
  var deck = new Array();

  for(var z = 0; z < suits.length; z++) {
    for (var x = 0; x < values.length; x++) {
        var card = {Value: values[x].name, Suit: suits[z], numVal: values[x].value};
          deck.push(card);
        }
      }

  return deck;
}

function shuffle(deck)
{
  // for 1000 turns
  // switch the values of two random cards
  for (var i = 0; i < 1000; i++)
  {
    var location1 = Math.floor((Math.random() * deck.length));
    var location2 = Math.floor((Math.random() * deck.length));
    var tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
}
var deck1 = getDeck();
shuffle(deck1);

for (i; i < deck1.length; i++){
  player = deck1.filter((v, i)=> i % 2);
  opp = deck1.filter((v, i)=>!(i %2));
}


function play() {

  c += 1;
  if (c < player.length) {
   text2.innerHTML = '';
//tie
 if (player[c].numVal == opp[c].numVal){

     text.innerHTML = "You flipped over " + player[c].Value + " of " + player[c].Suit + ". ";
      setTimeout(function () {text2.innerHTML = "Your opponent flipped over " + opp[c].Value + " of " + opp[c].Suit + "." + "<br />" + 'YOU TIED';}, 1500);

   oT = opp[c].numVal;
   pT = player[c].numVal;
   //console.log(pT+ '=pT');
   //console.log(oT+' = oT');
     tie(oT, pT)
      setTimeout(function(){document.getElementById("flip").disabled = false;}, 6000);
      setTimeout(function(){ oPoints.innerHTML = oppPoints;}, 6100);
      setTimeout(function(){pPoints.innerHTML = playerPoints;},6100);
    }
    else if (player[c].numVal > opp[c].numVal) {
      text.innerHTML = "You flipped over " + player[c].Value + " of " + player[c].Suit + ". "
      setTimeout(function () {text2.innerHTML = "Your opponent flipped over " + opp[c].Value + " of " + opp[c].Suit + "." + "<br />" + 'YOU WON';}, 1500);
      playerPoints = opp[c].numVal + player[c].numVal + playerPoints;

      setTimeout(function(){document.getElementById("flip").disabled = false;}, 1600);
      setTimeout(function(){pPoints.innerHTML = playerPoints;},1600);
    }
    else if (player[c].numVal < opp[c].numVal) {
      text.innerHTML = "You flipped over " + player[c].Value + " of " + player[c].Suit + ". ";
      setTimeout(function () {text2.innerHTML = "Your opponent flipped over " + opp[c].Value + " of " + opp[c].Suit + "." + "<br />" + 'YOU LOST';}, 1500)

        oppPoints = opp[c].numVal + player[c].numVal + oppPoints
      setTimeout(function(){document.getElementById("flip").disabled = false;}, 1600);
      setTimeout(function(){ oPoints.innerHTML = oppPoints;}, 1600);
    }


  x++;


  }else { // end Loop for game
    if (playerPoints > oppPoints) {
      //win
      end.innerHTML = "You Won the War " + playerPoints + ' to ' + oppPoints + '!'
      end.style.color = 'green';
      resetBtn.style.display = 'block'
    } else if (playerPoints < oppPoints) {
      //lose
      end.innerHTML = "You Lost the War " + playerPoints + ' to ' + oppPoints + '.'
      end.style.color = 'red';
      resetBtn.style.display = 'block'
    }

  }
cPlayed.innerHTML = player.length-c + ' cards left of ' + player.length;


  document.getElementById("flip").disabled = true;





};//end Play

function reset(){
window.location.reload();


}

function tie(oT, pT) {

  setTimeout(function(){document.getElementById("flip").disabled = false;}, 10000);
 // console.log('playTie');
  setTimeout(function () {text.innerHTML =" "}, 2500);
  setTimeout(function () {text2.innerHTML =" "}, 2500);
  c += 1;
(function() {

  if (player[c].numVal == opp[c].numVal) {
    oT = opp[c].numVal;
    pT = player[c].numVal;
    console.log('tie again')
    setTimeout(function () {text.innerHTML = "You flipped over " + player[c].Value + " of " + player[c].Suit + ". "},3000);
    setTimeout(function () {text2.innerHTML = "Your opponent flipped over " + opp[c].Value + " of " + opp[c].Suit + "." + "<br />" + 'YOU TIED';}, 4500);
    tie(oT, pT);
  }
    else if (player[c].numVal > opp[c].numVal) {
      playerPoints = opp[c].numVal + player[c].numVal + playerPoints + pT + oT;
      setTimeout(function () {text.innerHTML = "You flipped over " + player[c].Value + " of " + player[c].Suit + ". "}, 3000);
      setTimeout(function () {text2.innerHTML = "Your opponent flipped over " + opp[c].Value + " of " + opp[c].Suit + "." + "<br />" + 'YOU WON';
      }, 4500);
    } else if (player[c].numVal < opp[c].numVal) {
      setTimeout(function (){text.innerHTML = "You flipped over " + player[c].Value + " of " + player[c].Suit + ". "}, 3000);
      setTimeout(function () {
        text2.innerHTML = "Your opponent flipped over " + opp[c].Value + " of " + opp[c].Suit + "." + "<br />" + 'YOU LOST';
      }, 4500)

    oppPoints = opp[c].numVal + player[c].numVal + oppPoints + pT + oT;}


  })();

}
cPlayed.innerHTML = player.length-c + ' cards left of ' + player.length;


