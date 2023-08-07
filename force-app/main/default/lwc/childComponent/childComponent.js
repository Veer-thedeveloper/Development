import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
@api hello;
    handleevent(event){
        console.log('inside child event: ',event.target);
        this.hello='event.target';
    }
}