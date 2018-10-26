import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editMeal(meal) {
        meal.save().then(() => {
          this.transitionToRoute('auth.meals.index')
        })
    }
  }
});
