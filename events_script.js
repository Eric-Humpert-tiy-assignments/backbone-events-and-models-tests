'use strict';

function Animal(type) {
  this.type = type;
}

function Circus() {
  this.animals = [];
}

_.extend(Circus.prototype, Backbone.Events);

Circus.prototype.add = function(animal) {
  this.animals.push(animal);
  this.trigger('animalAdded', animal);
}

Circus.prototype.animalCount = function() {
  return this.animals.length;
}

function Ringmaster() {
  this.isCalm = true;
  this.salary = 40000;
}

Ringmaster.prototype.watch = function (circus) {
  var self = this;
  circus.on('animalAdded', function(animal) {
    console.log('yo', animal.type);
    if (animal.type === 'lion') {
      self.isCalm = false;
    }
  });

}
