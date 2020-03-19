// constructor function which can take in a series of values and create objects
// with the properties contained inside
function Pokemon(name, type, gender, age, strength, hp) {
  this.name = name;
  this.type = type;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hp = hp;
}
// method which prints all of the stats for a character
Pokemon.prototype.printStats = function() {
  console.log(
    "Name: " +
      this.name +
      "\Type: " +
      this.type +
      "\nGender: " +
      this.gender +
      "\nAge: " +
      this.age +
      "\nStrength: " +
      this.strength +
      "\nHitPoints: " +
      this.hp
  );
  console.log("\n-------------\n");
};

// method which determines whether or not a character's "hitpoints" are less than zero
// and returns true or false depending upon the outcome
Pokemon.prototype.isAlive = function() {
  if (this.hp > 0) {
    console.log(this.name + " is still alive!");
    console.log("\n-------------\n");
    return true;
  }
  console.log(this.name + " has died!");
  return false;
};

// method which takes in a second object and decreases their "hitpoints" by this character's strength
Pokemon.prototype.attack = function(character2) {
   var attInterval = setInterval(() => {
  if (character2.isAlive()==true) {
      character2.hp -= this.strength;

      console.log(character2);
    }
    else{
        function myStopFunction() {
            clearInterval(attInterval);
          }
          myStopFunction()
    }
}, 1000);
};

// method which increases this character's stats when called
Pokemon.prototype.levelUp = function() {
  this.age += 1;
  this.strength += 5;
  this.hp += 25;
};

// creates two unique characters using the "character" constructor
var squirttle = new Pokemon("Squirttle", "Water", "Male", 5, 10, 75);
var pikachu = new Pokemon("Pikachu", "Lightning", "Female", 2, 20, 50);

//   warrior.printStats();
//   rogue.printStats();

squirttle.attack(pikachu);
//   warrior.printStats();
//   warrior.isAlive();

//   rogue.printStats();
