var bonus = false;
var doubleBonus = false;
var superBonus = false;
var superDoubleBonus = false;
var extremeBonus = false;
var maxBonus = false;
var execute = true;
var hasRun = false;



let cryptoTokens = 0.000000;
let tokWin = 0.05;
let tokSeriesWin = 0.1;
let expPoints = 0;
let playerLevel = 1;
let pWinEXP = 4;
let sWinEXP = 2;
let pLossExp = 2;
let sLossExp = 1;
let playerLosses = 0;
let playerWins = 0;
let currentSeriesW =  0;
let currentSeriesL = 0;
let seriesW = 0;
let seriesL = 0;
const displayBonus = document.getElementById('bonus');
const displayLevel = document.getElementById('lvl');
const displayExp = document.getElementById('expPoints');
const displayTokens = document.getElementById('cryptoTotal');
const pWins = document.getElementById('wins');
const pLosses = document.getElementById('losses');
const currentSeriesWin = document.getElementById('cSeriesWins');
const currentSeriesLoss = document.getElementById('cSeriesLoss');
const sWins = document.getElementById('seriesWins');
const sLosses = document.getElementById('seriesLosses');
const pChoice = document.querySelector('.player');
const ebButtons = document.querySelectorAll('.selection button');
const cChoice = document.querySelector('.computer');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');
const ebRandomClasses = ["Wood", "Fire", "Earth", "Metal", "Water"];


const ebGame = () => {

  ebButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let clickedBtn = e.target.className;
      pChoice.className = clickedBtn;

      let randomChoice = Math.floor(Math.random() * ebRandomClasses.length);
      cChoice.className = ebRandomClasses[randomChoice];

      text2.innerHTML = '<br />';
      if (cChoice.className == pChoice.className) {
        text.innerHTML = "Opponent picked " + cChoice.className + " and you picked " + pChoice.className + ". You tied.";
      }
      else if ((pChoice.className == ebRandomClasses[0] && cChoice.className == ebRandomClasses[1]) ||
          (pChoice.className == ebRandomClasses[0] && cChoice.className == ebRandomClasses[3]) ||
          (pChoice.className == ebRandomClasses[1] && cChoice.className == ebRandomClasses[2]) ||
          (pChoice.className == ebRandomClasses[1] && cChoice.className == ebRandomClasses[4]) ||
          (pChoice.className == ebRandomClasses[2] && cChoice.className == ebRandomClasses[0]) ||
          (pChoice.className == ebRandomClasses[2] && cChoice.className == ebRandomClasses[3]) ||
          (pChoice.className == ebRandomClasses[3] && cChoice.className == ebRandomClasses[1]) ||
          (pChoice.className == ebRandomClasses[3] && cChoice.className == ebRandomClasses[4]) ||
          (pChoice.className == ebRandomClasses[4] && cChoice.className == ebRandomClasses[0]) ||
          (pChoice.className == ebRandomClasses[4] && cChoice.className == ebRandomClasses[2])
        ) {text.innerHTML = "Opponent picked " + cChoice.className + " and you picked " + pChoice.className + ". You LOST.";
          playerLosses++;
          pLosses.innerHTML = playerLosses;
          currentSeriesL++;
          currentSeriesLoss.innerHTML = currentSeriesL;
        expPoints = expPoints - pLossExp;
          if (currentSeriesL == 3) {
            text2.innerHTML = "You LOST the series."
            seriesL++;
            sLosses.innerHTML = seriesL;
            currentSeriesL = 0;
            currentSeriesW = 0;
            currentSeriesWin.innerHTML = currentSeriesW;
            currentSeriesLoss.innerHTML = currentSeriesL;
            expPoints = expPoints - sLossExp;
          }
        } else if ((pChoice.className == ebRandomClasses[0] && cChoice.className == ebRandomClasses[2]) ||
          (pChoice.className == ebRandomClasses[0] && cChoice.className == ebRandomClasses[4]) ||
          (pChoice.className == ebRandomClasses[1] && cChoice.className == ebRandomClasses[0]) ||
          (pChoice.className == ebRandomClasses[1] && cChoice.className == ebRandomClasses[3]) ||
          (pChoice.className == ebRandomClasses[2] && cChoice.className == ebRandomClasses[1]) ||
          (pChoice.className == ebRandomClasses[2] && cChoice.className == ebRandomClasses[4]) ||
          (pChoice.className == ebRandomClasses[3] && cChoice.className == ebRandomClasses[0]) ||
          (pChoice.className == ebRandomClasses[3] && cChoice.className == ebRandomClasses[2]) ||
          (pChoice.className == ebRandomClasses[4] && cChoice.className == ebRandomClasses[1]) ||
          (pChoice.className == ebRandomClasses[4] && cChoice.className == ebRandomClasses[3])
        ) {text.innerHTML = "Opponent picked " + cChoice.className + " and you picked " + pChoice.className + ". You WON.";
          playerWins++;
          pWins.innerHTML = playerWins;
          currentSeriesW++;
          currentSeriesWin.innerHTML = currentSeriesW;

        switch(true) {
          case bonus:
            cryptoTokens = cryptoTokens + (tokWin * 1.05)
            expPoints = expPoints + (pWinEXP*1.05);
            break;
          case doubleBonus:
            cryptoTokens = cryptoTokens + (tokWin * 1.1)
            expPoints = expPoints + (pWinEXP*1.1);
            break;
          case superBonus:
            cryptoTokens = cryptoTokens + (tokWin * 1.15)
            expPoints = expPoints + (pWinEXP*1.15);
            break;
          case superDoubleBonus:
            cryptoTokens = cryptoTokens + (tokWin * 1.2)
            expPoints = expPoints + (pWinEXP*1.2);
            break;
          case extremeBonus:
            cryptoTokens = cryptoTokens + (tokWin * 1.3)
            expPoints = expPoints + (pWinEXP*1.3);
            break;
          case maxBonus:
            cryptoTokens = cryptoTokens + (tokWin * 1.5)
            expPoints = expPoints + (pWinEXP*1.5);
            break;
          default:
            cryptoTokens =  cryptoTokens + tokWin;
            expPoints = expPoints + pWinEXP;
            break;
        }

        if (currentSeriesW == 3) {
            text2.innerHTML = "You WON the series!"
            seriesW++;
            sWins.innerHTML = seriesW;
            currentSeriesL = 0;
            currentSeriesW = 0;
            currentSeriesWin.innerHTML = currentSeriesW;
            currentSeriesLoss.innerHTML = currentSeriesL;
              switch(true) {
              case bonus:
                expPoints = expPoints + (sWinEXP*1.05);
                cryptoTokens = cryptoTokens + (tokSeriesWin * 1.05)
                break;
              case doubleBonus:
                expPoints = expPoints + (sWinEXP*1.1);
                cryptoTokens = cryptoTokens + (tokSeriesWin * 1.1)
                break;
              case superBonus:
                expPoints = expPoints + (sWinEXP*1.15);
                cryptoTokens = cryptoTokens + (tokSeriesWin * 1.15)
                break;
              case superDoubleBonus:
                expPoints = expPoints + (sWinEXP*1.2);
                cryptoTokens = cryptoTokens + (tokSeriesWin * 1.2)
                break;
              case extremeBonus:
                expPoints = expPoints + (sWinEXP*1.3);
                cryptoTokens = cryptoTokens + (tokSeriesWin * 1.3)
                break;
              case maxBonus:
                expPoints = expPoints + (sWinEXP*1.5);
                cryptoTokens = cryptoTokens + (tokSeriesWin * 1.5)
                break;
              default:
                expPoints = expPoints + sWinEXP;
                cryptoTokens = cryptoTokens + tokSeriesWin;
                break;
            }
          }
        }

      if (expPoints < 0){
        expPoints = 0
      }

    playerLevel = ((1 + Math.sqrt(((1 + 8)* expPoints)/25))/2).toFixed()
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
      expPoints= expPoints + .15;
      displayLevel.innerHTML = playerLevel;
      displayExp.innerHTML = Math.round(expPoints);
      displayTokens.innerHTML = cryptoTokens;
    });
  });


}
ebGame();
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


