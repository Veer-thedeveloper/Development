import { LightningElement, wire } from 'lwc';
import data from '@salesforce/messageChannel/prashant__c';
import {publish, MessageContext} from 'lightning/messageService'
 
export default class LWCLMS extends LightningElement {
    @wire(MessageContext)
    messageContext;
    message;
 
    handleChange(event){
        this.message = event.detail.value;
    }
 
    handleClick() {
        let payload = {message: this.message};
        publish(this.messageContext, data, payload);
    }
}