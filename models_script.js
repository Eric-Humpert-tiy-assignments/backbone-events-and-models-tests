'use strict';

var FurnitureStore = Backbone.Model.extend({

  defaults: {
    brokenFurnitureCount: 0,
    furnitureCountToBeExamined: 0,
  },

  track: function(furniture) {
    var self = this;
      self.listenTo(furniture, 'smash', function(furniture) {
        var count = self.get('brokenFurnitureCount');
        self.set('brokenFurnitureCount', count += 1);
    });
    furniture.on("change:condition", function() {
      var count = self.get("furnitureCountToBeExamined");
      self.set("furnitureCountToBeExamined", count += 1);
    })
  }
});

var Furniture = Backbone.Model.extend({
  defaults: {
    condition: 'new',
    material: 'oak',
    price: 0,
  },
  smash: function(furniture) {
    this.trigger('smash');
  }

});
