const Potion = require('../lib/Potion');

function Player(name = '') {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion('health'), new Potion()];
}

<<<<<<< HEAD
Player.prototype.getStats = function () {
=======
Player.prototype.getHealth = function() {
  return `${this.name}'s health is now ${this.health}!`;
};

Player.prototype.getStats = function() {
>>>>>>> develop
  return {
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility
  };
};

<<<<<<< HEAD
Player.prototype.getInventory = function () {
=======
Player.prototype.getInventory = function() {
>>>>>>> develop
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};

<<<<<<< HEAD
Player.prototype.getHealth = function () {
  return `${this.name}'s health if now ${this.health}!`;
};

Player.prototype.isAlive = function () {
=======
Player.prototype.isAlive = function() {
>>>>>>> develop
  if (this.health === 0) {
    return false;
  }
  return true;
};
<<<<<<< HEAD
Player.prototype.reduceHealth = function (health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
  }
};

Player.prototype.getAttackValue = function () {
  const min = this.strength - 5;
  const max = this.strength + 5;

  return Math.floor(Math.random() * (max - min) + min);
};

Player.prototype.addPotion = function (potion) {
  this.inventory.push(potion);
};

Player.prototype.usePotion = function (index) {
  const potion = this.getInventory().splice(index, 1)[0];

  switch (potion.name) {
    case 'agility':
      this.agility += potion.value;
      break;
    case 'health':
      this.health += potion.value;
      break;
    case 'strength':
      this.strength += potion.value;
      break;
=======

Player.prototype.addPotion = function(potion) {
  this.inventory.push(potion);
};

Player.prototype.usePotion = function(index) {
  const potion = this.inventory.splice(index, 1)[0];

  switch (potion.name) {
    case 'agility':
      this.agility += potion.value;
      break;
    case 'health':
      this.health += potion.value;
      break;
    case 'strength':
      this.strength += potion.value;
      break;
  }
};

Player.prototype.getAttackValue = function() {
  const min = this.strength - 5;
  const max = this.strength + 5;

  return Math.floor(Math.random() * (max - min) + min);
};

Player.prototype.reduceHealth = function(health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
>>>>>>> develop
  }
};

module.exports = Player;
