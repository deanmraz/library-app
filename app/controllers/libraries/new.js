import Controller from '@ember/controller';

export default Controller.extend({

    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));
    },


});
