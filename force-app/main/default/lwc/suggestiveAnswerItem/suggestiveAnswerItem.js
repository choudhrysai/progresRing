import { LightningElement, api } from 'lwc';

export default class SuggestiveAnswerItem extends LightningElement {
    @api answer;
    renderedCallback() {
        const style = document.createElement('style');
        style.innerText = `c-suggestive-answer-item .slds-button_neutral {width:2rem;padding-left: 1.3rem;border-radius: 1rem;}`;
        this.template.querySelector('lightning-button').appendChild(style);
    }

    copyToClipboard() {
        var element = this.template.querySelector("p").textContent;
        var inputEle = document.createElement("input");
        inputEle.setAttribute("value", element);
        document.body.appendChild(inputEle);
        inputEle.select();
        document.execCommand("copy");
    }
}