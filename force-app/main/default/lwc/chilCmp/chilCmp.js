import { LightningElement,api } from 'lwc';

export default class ChilCmp extends LightningElement {

@api displayValue;

handleevt(event){
    console.log('@@ inside child cmp: ',event.detail);
    this.displayValue=event.detail;

}

}