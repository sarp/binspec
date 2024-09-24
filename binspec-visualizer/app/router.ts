import EmberRouter from '@ember/routing/router';
import config from 'binspec-visualizer/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  // Add route declarations here
});
