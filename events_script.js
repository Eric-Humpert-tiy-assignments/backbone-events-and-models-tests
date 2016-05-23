'use strict';

function Animal(type) {
  this.type = type;
}

function Circus() {
  this.animals = [];
}

Circus.prototype.add = function(animal) {
  this.animals.push(animal);
}

Circus.prototype.animalCount = function() {
  return this.animals.length;
}

function Ringmaster() {
  this.isCalm = true;
}

_.extend(Circus.prototype, Backbone.Events);

Ringmaster.prototype.watch = function (watchingShow) {
  var self = this;
  watchingShow.on ('Show Time!', function() {
    if (Animal.type === 'lion') {
      self.isCalm == false;
    }
  })

}
