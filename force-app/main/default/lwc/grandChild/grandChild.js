import { LightningElement } from 'lwc';

export default class GrandChild extends LightningElement {

    handleClick(){

        const sendEvt = new CustomEvent('grandchild',{bubbles:true,composed:true});
        this.dispatchEvent(sendEvt);
        console.log('Grand child dispatched event');
    }

}