import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  headerMessage: 'Comming Soon',
  responseMessage: '',
  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {

  saveInvitation() {
    const email = this.get('emailAddress');

    const newInvitation = this.store.createRecord('invitation', { email: email });
    // newInvitation.save();


    // alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
    // this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
    // this.set('emailAddress', '');
    newInvitation.save().then(response => {
    this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
    this.set('emailAddress', '');
    });

  }
}

});
