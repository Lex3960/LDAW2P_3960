import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
  	createFood(meal) {
  		this.store.createRecord('food', {
  			meal: meal
  		})
   
    },

    editMeal(meal) {
        meal.save().then(() => {
          this.transitionToRoute('auth.meals.index')
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
