import { LightningElement, api } from 'lwc';

export default class SuggestiveAnswerItem extends LightningElement {
    @api answer;
    copyToClipboard() {
        var element = this.template.querySelector("p").textContent;
        console.log(element);

    }
}