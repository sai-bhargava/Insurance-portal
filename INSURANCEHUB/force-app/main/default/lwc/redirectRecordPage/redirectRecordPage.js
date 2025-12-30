import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class RedirectRecordPage extends NavigationMixin(LightningElement) {
    @api recordId;  // recordId will be passed from Flow

    connectedCallback() {
        if (this.recordId) {
            console.log('Navigating to:', this.recordId); // Debugging purpose

            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: this.recordId,
                    objectApiName: 'Customer__c', // Replace with correct Object API Name
                    actionName: 'view'
                }
            });
        }
    }
}
