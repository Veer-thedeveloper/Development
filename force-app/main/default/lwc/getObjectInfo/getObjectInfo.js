import { LightningElement, api, wire, track } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class RecordFormWithRecordType extends LightningElement {
error;
displayColumns={};
objectName;
@wire(getObjectInfo, {
objectApiName:'$objectName'
})
wiredData(data,error){
    if(data){
        console.log('data::: ', data);
        this.displayColumns=data;
        console.log('data value:::', data);
        console.log('displayColumns::: ', this.displayColumns);
    }else if(error){
        console.log('error::: ',error);
    }
}

handleClick(){
console.log('inside submit function');
this.objectName=this.template.querySelector('lightning-input').value;
console.log('value of Object: ',this.objectName);
}
}