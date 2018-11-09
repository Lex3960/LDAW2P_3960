import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  	model(params){
	  	return RSVP.hash({
	  		meal: this.store.findRecord('meal', params.id),
	  		products: this.store.findAll('product'),
	  		foods: this.store.query('food', {meal_id: params.id})
	  	})
  	}
});
