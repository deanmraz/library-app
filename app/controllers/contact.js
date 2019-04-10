import Controller from '@ember/controller';
import { match, and, gte, not } from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  emailAddress: '',
  messageText: '',

  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: gte('messageText.length', 5),
  isDisabled: not('isBothTrue'),
  // isDisabled2: not('isValidMessage'),
  isBothTrue: and('isValidEmail', 'isValidMessage'),

  actions: {

    startType(){
      this.set('responseMessage', ``);
    },

    saveMessage() {
      const email = this.get('emailAddress');
      const message = this.get('messageText');

      const newContact = this.store.createRecord('contact', { email: email, message: message});

      debugger;

      newContact.save().then(response => {
      this.set('responseMessage', `Thank you! We saved your email address and message!`);
      this.set('emailAddress', '');
      this.set('messageText', '');
      });

    },
  // saveMessage() {
  //   alert(`Sending Message`);
  //   this.set('responseMessage', `We got your message and we’ll get in touch soon`);
  //   this.set('emailAddress', '');
  //   this.set('messageText', '');
  //
  //   const email = this.get('emailAddress');
  //   const message = this.get('messageText');
  //   const newContact = this.store.createRecord('contact', { email: email });
  //   newContact.save().then(() => this.transitionTo('contacts'));
  // },

  willTransition() {
    // rollbackAttributes() removes the record from the store
    // if the model 'isNew'
    this.controller.get('model').rollbackAttributes();
  }

//   saveContact(newContact) {
//   newContact.save().then(() => this.transitionTo('contacts'));
// },

}

});
