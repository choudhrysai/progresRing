import { LightningElement, api, track } from 'lwc';

export default class ProgressCircle extends LightningElement {
    @api percent = 75;
    @track svgDPath;
    @track ringStyleClass = "slds-progress-ring slds-progress-ring_large"
    connectedCallback() {
        this.drawSVG(this.percent);
    }
    drawSVG() {
        var isLong = 1;

        if (this.percent < 80 && this.percent > 50) {
            this.ringStyleClass = this.ringStyleClass + " slds-progress-ring_warning";
        }
        else if (this.percent < 51) {
            isLong = 0;
            this.ringStyleClass = this.ringStyleClass + " slds-progress-ring_expired";
        }
        this.svgDPath = "M 1 0 A 1 1 0 " + isLong + " 1 " +
            Math.cos(2 * Math.PI * this.percent / 100) + " " +
            Math.sin(2 * Math.PI * this.percent / 100) + " L 0 0";
        console.log('OUTPUT : ', this.svgDPath);
    }
}