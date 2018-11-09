import DS from 'ember-data';
import { computed } from '@ember/object';
import { isBlank } from '@ember/utils';

export default DS.Model.extend({
  name: DS.attr('string'),
  servings: DS.attr('number'),
  meal: DS.belongsTo('meal'),
  product: DS.belongsTo('product'),

  calories: computed('servings', 'product', function(){
  	return (!isBlank(this.get('product'))) ? this.get('servings') * this.get('product.calories'): null;
  })
});
