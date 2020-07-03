import { LightningElement } from 'lwc';

export default class SuggestiveAnswerList extends LightningElement {
    answers = [];
    connectedCallback() {
        this.answers.push({ id: "1", confidance: 90, content: "Interested in learning more about the Design System, how we built it, and how you can use it? Check out the links below, and check back often - we are always writing articles and gathering community-generated content" });
        this.answers.push({ id: "2", confidance: 100, content: "Interested in learning more about the Design System, how we built it, and how you can use it? Check out the links below, and check back often - we are always writing articles and gathering community-generated content" });
        this.answers.push({ id: "3", confidance: 70, content: "Interested in learning more about the Design System, how we built it, and how you can use it? Check out the links below, and check back often - we are always writing articles and gathering community-generated content" });
        this.answers.push({ id: "4", confidance: 60, content: "Interested in learning more about the Design System, how we built it, and how you can use it? Check out the links below, and check back often - we are always writing articles and gathering community-generated content" });
        this.answers.push({ id: "5", confidance: 50, content: "Interested in learning more about the Design System, how we built it, and how you can use it? Check out the links below, and check back often - we are always writing articles and gathering community-generated content" });
        this.answers.push({ id: "6", confidance: 40, content: "Interested in learning more about the Design System, how we built it, and how you can use it? Check out the links below, and check back often - we are always writing articles and gathering community-generated content" });
        this.sortList();
    }
    sortList() {
        if (this.answers) {
            this.answers.sort(function (a, b) { return b.confidance - a.confidance });
        }
    }
}