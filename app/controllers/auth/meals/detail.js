import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  calculator: service(),

  actions: {
  	createFood(meal) {
      meal.get('foods').createRecord({
  			meal: meal
  		}).save().then(()=>{
        this.transitionToRoute({queryParams: {id: meal.get('id')}})
      })
    },

    editMeal(meal, foods) {
        foods.save().then(()=>{
          meal.save().then(() => {
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
