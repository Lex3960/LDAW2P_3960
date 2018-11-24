import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import { all } from 'rsvp';

export default Controller.extend({
  calculator: service(),

  actions: {
  	createFood(meal) {
      meal.get('foods').createRecord({
  			meal: meal
  		}).save().then(()=>{
          window.location.reload(true);
      })
    },

    editMeal(meal, foods) {
      return all(foods.invoke('save')).then(()=>{
        meal.save().then(() => {
          let calories = meal.get('totalCalories');
          this.get('calculator').add(calories);
          this.transitionToRoute('auth.meals.index')
        })
      })
    },

    deleteFood(food) {
        food.destroyRecord();
    },

    updateFood(food){
        food.save();
    }
  }
});
