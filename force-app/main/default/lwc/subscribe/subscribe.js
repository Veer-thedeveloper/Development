import { LightningElement, wire } from 'lwc';
import data from '@salesforce/messageChannel/prashant__c';
import { subscribe, MessageContext } from 'lightning/messageService';

export default class Subscriber extends LightningElement {
    publisherMessage = '';
    subscription = null;
 
    @wire(MessageContext)
    messageContext;
 
    connectedCallback() {
        this.handleSubscribe();
    }
 
    handleSubscribe() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.messageContext, data, (load) => {
            console.log(message.message);
            this.publisherMessage = message.message;
            //this.ShowToast('Success', message.message, 'success', 'dismissable');
        });
    }
     
}
