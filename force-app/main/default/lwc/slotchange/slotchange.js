import { LightningElement } from 'lwc';

export default class Slotchange extends LightningElement {

    handleSlotchange(event){
        console.log('onslotchange event fired');
    }
}