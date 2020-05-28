import { LightningElement, api, track } from 'lwc';

export default class ProgressCircle extends LightningElement {
    @api percent = 75;
    @track svgDPath;
    connectedCallback() {
        this.drawSVG(this.percent);

    }
    drawSVG() {
        var isLong = 0;
        if (this.percent > 50) {
            isLong = 1;
        }
        this.svgDPath = "M 1 0 A 1 1 0 " + isLong + " 1 " +
            Math.cos(2 * Math.PI * this.percent / 100) + " " +
            Math.sin(2 * Math.PI * this.percent / 100) + " L 0 0";
        console.log('OUTPUT : ', this.svgDPath);
    }
    drawCircle(event) {
        this.percent = event.target.value;
        this.drawSVG();
    }
}