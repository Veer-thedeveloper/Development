// wireListInfoByName.js
import { LightningElement, wire } from 'lwc';
import { getListInfoByName } from 'lightning/uiListsApi';
export default class WireListInfoByName extends LightningElement {
error;
displayColumns;
objectName;
@wire(getListInfoByName, {
    objectApiName: '$objectName'
})listInfo({ error, data }) {
    if (data) {
        this.displayColumns = data.displayColumns;
        this.error = undefined;
    } else if (error) {
        this.error = error;
        this.displayColumns = undefined;
    }
}
handleClick(){
    console.log('inside submit function');
this.objectName=this.template.querySelector('lightning-input').value;
console.log('value of Object: ',this.objectName);
}
}