import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', {path: '/'});
  this.route('auth', function() {
    this.route('products');
    this.route('meals', function() {
      this.route('detail', {path: '/:id'});
    });
    this.route('eaten');
  });
});

export default Router;
