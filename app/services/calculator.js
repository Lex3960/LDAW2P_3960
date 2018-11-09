import Service from '@ember/service';
import { computed } from '@embr/object';

export default Service.extend({
  limit: null,
  count: null,

  init(){
    this._super(...arguments);
    this.set('limit', 1200);
    this.set('count', 0);
  },

  inShape: computed('limit', 'count', function(){
    return this.get('limit') > this.get('count');
  }),

  remaining: computed('limit', 'count', function(){
    return this.get('limit') - this.get('count');
  }),

  add(calories) {
    let count = this.get('count');
    this.set(count, count += calories);
  },

  remove(calories) {
    let count = this.get('count');
    this.set(count, count -= calories);
  }

});
