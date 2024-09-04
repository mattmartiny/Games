var bonus = false;
var doubleBonus = false;
var superBonus = false;
var superDoubleBonus = false;
var extremeBonus = false;
var maxBonus = false;
var execute = true;
var hasRun = false;



let cryptoTokens = 0.000000;
let tokWin = 0.04;
let expPoints = 0;
let playerLevel = 1;
let pWinEXP = 3;
let pLossExp = 1;
let playerLosses = 0;
let playerWins = 0;
const displayBonus = document.getElementById('bonus');
const displayLevel = document.getElementById('lvl');
const displayExp = document.getElementById('expPoints');
const displayTokens = document.getElementById('cryptoTotal');
const pWins = document.getElementById('wins');
const pLosses = document.getElementById('losses');
const pChoice = document.querySelector('.player');
const buttons = document.querySelectorAll('.selection button');
const cChoice = document.querySelector('.computer');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');
const options = ['Heads', 'Tails'];

const cfGame = () =>{
  buttons.forEach(btn =>{
    btn.addEventListener( 'click',(e)=>{
      let clickedBtn = e.target.className;
      pChoice.className = clickedBtn;

      let result = Math.floor(Math.random() * 2)
      cChoice.className = options[result];

      text2.innerHTML= '<br/>'
     if (pChoice.className == cChoice.className){
       text.innerHTML = "You picked " + pChoice.className + ". It landed on "+cChoice.className + ". Good job!";
       playerWins++;
       pWins.innerHTML = playerWins;
       switch(true) {
         case bonus:
           cryptoTokens = cryptoTokens + (tokWin * 1.005)
           expPoints = expPoints + (pWinEXP*1.05);
           break;
         case doubleBonus:
           cryptoTokens = cryptoTokens + (tokWin * 1.01)
           expPoints = expPoints + (pWinEXP*1.1);
           break;
         case superBonus:
           cryptoTokens = cryptoTokens + (tokWin * 1.015)
           expPoints = expPoints + (pWinEXP*1.15);
           break;
         case superDoubleBonus:
           cryptoTokens = cryptoTokens + (tokWin * 1.02)
           expPoints = expPoints + (pWinEXP*1.2);
           break;
         case extremeBonus:
           cryptoTokens = cryptoTokens + (tokWin * 1.03)
           expPoints = expPoints + (pWinEXP*1.3);
           break;
         case maxBonus:
           cryptoTokens = cryptoTokens + (tokWin * 1.05)
           expPoints = expPoints + (pWinEXP*1.5);
           break;
         default:
           cryptoTokens =  cryptoTokens + tokWin;
           expPoints = expPoints + pWinEXP;
           break;
       }



     }else{
       text.innerHTML = "You picked " + pChoice.className + " It landed on "+cChoice.className + ". Better Luck next time.";
      playerLosses++;
      pLosses.innerHTML = playerLosses;
       expPoints = expPoints - pLossExp;
     }
      if (expPoints < 0){
        expPoints = 0
      }

      playerLevel = ((1 + Math.sqrt(((1 + 8)* expPoints)/30))/2).toFixed()
      switch(true){
        case playerLevel >= 5  && playerLevel < 10:
          bonus = true;
          doubleBonus = false;
          displayBonus.innerHTML = "BONUS ACTIVE";
          bonusEXP();
          hasRun= true;
          break;
        case playerLevel >= 10 && playerLevel < 15:

          bonus = false;
          doubleBonus = true;
          superDoubleBonus = false;
          displayBonus.innerHTML = "DOUBLE BONUS ACTIVE";
          bonusEXP();
          hasRun= true;
          break;
        case playerLevel >= 15 && playerLevel < 20:

          doubleBonus = false;
          superBonus = true;
          superDoubleBonus = false;
          displayBonus.innerHTML = "SUPER BONUS ACTIVE";
          bonusEXP();
          hasRun= true;
          break;
        case playerLevel >= 20 && playerLevel < 30:

          superBonus=false;
          superDoubleBonus = true;
          extremeBonus = false;
          displayBonus.innerHTML = "SUPER DOUBLE BONUS ACTIVE";
          bonusEXP();
          hasRun= true;
          break;
        case playerLevel >= 30  && playerLevel < 50:

          superDoubleBonus = false;
          extremeBonus = true;
          maxBonus = false;
          displayBonus.innerHTML = "EXTREME BONUS ACTIVE";
          bonusEXP();
          hasRun= true;
          break;
        case playerLevel >= 50:
          extremeBonus = false;
          maxBonus = true;
          displayBonus.innerHTML = "MAX BONUS ACTIVE";
          bonusEXP();
          hasRun= true;
          break;
        default:
          displayBonus.innerHTML = ' ';
          break;
      }
      //give exp points every play
      expPoints= expPoints + .05;
      displayLevel.innerHTML = playerLevel;
      displayExp.innerHTML = Math.round(expPoints);
      displayTokens.innerHTML = cryptoTokens;
    });
  });




}
cfGame()
var bonusEXP = function(){
  if (hasRun = false) {
    return function () {
      if (execute == true) {
        expPoints = expPoints + (playerLevel * 5);
        execute = false;
      }

    }
  }
};
