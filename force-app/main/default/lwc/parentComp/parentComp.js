import { LightningElement,api } from 'lwc';

export default class ParentCmp extends LightningElement {

    @api displaychildValue;
    handleevt(event){
        console.log('@@ in parent cmp: ',event.detail);
        this.displaychildValue=event.detail;
 
    }
}