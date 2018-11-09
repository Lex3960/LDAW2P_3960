import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createMeal(){
      let name = this.get('name');
      let meal = this.store.createRecord('meal', {name: name});
      meal.save().then(()=>{
          this.set('name', null);
      })
    },
    deleteMeal(meal) {
      meal.destroyRecord();
    },

  }
});
