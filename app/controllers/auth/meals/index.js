import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createMeal(){
      let name = this.get('name');
      this.store.createRecord('meal', {name: name});
      this.set('name', null);
    },

    deleteMeal(meal) {
      meal.destroyRecord();
    },

  }
});
