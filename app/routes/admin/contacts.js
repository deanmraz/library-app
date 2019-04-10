import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('contact');
  },

  // actions: {
  // 
  //   saveLibrary(newLibrary) {
  //     newLibrary.save().then(() => this.transitionTo('contact'));
  //   },
  //
  //   willTransition() {
  //     this.controller.get('model').rollbackAttributes();
  //   }
  // }
});
