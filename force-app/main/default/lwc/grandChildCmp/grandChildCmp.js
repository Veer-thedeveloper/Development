import { LightningElement,api } from 'lwc';

export default class GrandChild extends LightningElement {
 @api getValue;
handleClick(event){
    console.log('@@ inside grandchild 01: ',this.template.querySelector('lightning-input'));
    console.log('@@ inside grandchild 02: ',this.template.querySelector('lightning-input').value);
        this.getValue= this.template.querySelector('lightning-input').value;
        console.log('@@ inside grandchild 03: ',this.getValue);
        const evtValue= new CustomEvent('sendvalue',{detail:this.getValue,bubbles:true, composed:true});
        console.log('@@ inside grandchild 04: ',evtValue);
        this.dispatchEvent(evtValue);
} 
}