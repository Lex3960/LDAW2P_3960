import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
      createProduct(){
          this.store.createRecord('product');
      },

      deleteProduct(product) {
        product.destroyRecord();
      },

      updateProduct(product){
        product.save();
      }

    }
});
