import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  createdAt: DS.attr('date'),
  foods: DS.hasMany('food'),

  description: computed('name', function(){
  	return `This meal is ${this.get('name')} yummy!`;
  }),

  foodCalories: computed('foods.@each.calories', function(){
  	return this.get('foods').mapBy('calories');
  }),

  totalCalories: computed.sum('foodCalories')
});
