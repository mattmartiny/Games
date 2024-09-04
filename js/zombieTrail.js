function startGame() {
  var partyStats = "<table id='' class=''><thead><tr><th>Name</th><th>Lvl</th><th>HP</th><th>Shot</th><th>Strength</th><th>Agility</th><th>Defense</th><th>Brains</th><th>Luck</th><th>Exp</th><th></th><th>Class</th></tr></thead><tbody>";
  for (var x = 0; x < partyMembers.length; x++) {
    partyStats += "<tr><td id='" + partyMembers[x].id + "'>" + partyMembers[x].playerName + "</td><td>" + partyMembers[x].playerLevel + "</td><td>" + partyMembers[x].hitPoints + "</td><td>" + partyMembers[x].shot + "</td><td>" + partyMembers[x].strength + "</td><td>" + partyMembers[x].agility + "</td><td>" + partyMembers[x].defense + "</td><td>" + partyMembers[x].brains + "</td><td>" + partyMembers[x].luck + "</td><td>" +
      partyMembers[x].exp + "</td><td></td><td>"+partyMembers[x].userClass+"</td></tr>";
  }
  partyStats += "</tbody></table>";
  document.getElementById("party-container").innerHTML = partyStats;
  document.getElementById('initiateParty').style.display = 'none';

  //itemList dropdown

var itemList = document.getElementById("itemList");
var opt = ""
for (var x = 0; x < partyMembers.length; x++) {
  opt = partyMembers[x].playerName;
  var el = document.createElement("option");
  el.value = opt;
  el.text =  opt;
  itemList.appendChild(el)
}
encounter();
document.getElementById('items').style.display = 'block';
var inventory ="<ul>"
$('#itemList').on('change', function(){
 $('#info').hide();
 // document.getElementById("info").style.display = "none";
var selected = itemList.options[itemList.selectedIndex].text;

var selectedUser = partyMembers.filter(x => x.playerName.indexOf(selected) > -1)
console.log(selectedUser);
 for (var x=0; x< selectedUser[0].inventory.length; x++) {
if(inventory.includes("<li>")){
  inventory = "<ul>"
}
   inventory += "<li>"+ selectedUser[0].inventory[x].itemName + "</li>"
  }
inventory += "</ul>";
  document.getElementById("info").innerHTML = inventory;
  document.getElementById("info").style.display = "block";
})

};


function encounter() {

  var game = "<div style='float:left;'>"
  for (x = 0; x < partyMembers.length; x++) {

  game += "<div id='"+x+"'>"
    game += "<p>"+partyMembers[x].playerName+"</p>"
    game += "<button id='bash"+ x+"' onclick='bash(" + "\"" + partyMembers[x].playerName + "\"" + ")'>bash</button>";
    game += "<button id= 'shoot"+x+"' onclick='shoot(" + "\"" + partyMembers[x].playerName + "\"" + ")'>Shoot</button><br />";
    game += "<button id='item"+ x+"' onclick='itemUse(" + "\"" + partyMembers[x].playerName + "\"" + ")'>Item</button>";
    game += "<button id='run' onclick='runAway()'>Run</button></br>";
    game += "</div>"

  }

  game += "</div>"
  document.getElementById("gameOptions").innerHTML = game








}





function bash(playerName) {
  var selectedFighter = partyMembers.filter(x => x.playerName.indexOf(playerName)> -1);


}
function shoot(playerName){
  var selectedFighter = partyMembers.filter(x => x.playerName.indexOf(playerName)> -1);


}
function itemUse(playerName){
  var selectedFighter = partyMembers.filter(x => x.playerName.indexOf(playerName)> -1);


}
function runAway(){



}
