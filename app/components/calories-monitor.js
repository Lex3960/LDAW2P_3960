import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  classNameBindings: ['inShape:green:red'],
  calculator: service(),

  inShape:computed(function(){
    return this.get('calculator.inShape');
  }),

  remaining: computed(function(){
		return this.get('calculator.remaining');
	})
});
