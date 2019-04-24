import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),
  saveLibrary(newLibrary) {
    newLibrary.save().then(() => this.get('router').transitionTo('libraries'));
  },
});
