var batwing = {
  status: "Ready",
  rescueBatman: function() { 
    document.write("Locating his transponder ... initiating liaunch ...")

  }

}

/*
if (batwing.status === "Ready") {
   batwing.rescueBatman();
}
*/

var utilities = {
   printALLMembers : function(targetObject) {

     for (i in targetObject) {
       document.write("<br />"+ targetObject[i]);
     }

   }

}

//utilities.printALLMembers(batwing);

var i_am_empty = { cool : 5 };

var planet = {
  id: 34,
  name : "guse Maria",
  faction: {
     functionId: 2,
     name: "Nex",
     notification: function() {
       document.write("Nex alliance ... unite!");
   }
  },
   cities: [
    { locationId: 15, name:"Gladius" },
    { locationId: 16, name:"Gladius2" },
    { locationId: 17, name:"Gladius3" }
   ]
};

//planet.faction.notification();
//document.write(planet.cities[1].name)

/*
for (member in planet)
{
  document.write("<br/" + member + " ===> "+ planet[member]);
}*/



function car(make, model, year) {
   this.make = make;
   this.model = model;
   this.year = year;
}


var myCar = new car("Eagle", "Talon TSi", 1993);
var myCar2 = new car("Eagle2", "Talon TSi2", 19932);

alert(myCar.model);
alert(myCar2.model);












