import { LightningElement } from 'lwc';

export default class SuggestiveAnswerList extends LightningElement {
    answers = [];
    connectedCallback() {
        this.answers.push({ id: "1", content: "Interested in learning more about the Design System, how we built it, and how you can use it? Check out the links below, and check back often - we are always writing articles and gathering community-generated content" });
        this.answers.push({ id: "2", content: "Interested in learning more about the Design System, how we built it, and how you can use it? Check out the links below, and check back often - we are always writing articles and gathering community-generated content" });
        this.answers.push({ id: "3", content: "Interested in learning more about the Design System, how we built it, and how you can use it? Check out the links below, and check back often - we are always writing articles and gathering community-generated content" });
        this.answers.push({ id: "4", content: "Interested in learning more about the Design System, how we built it, and how you can use it? Check out the links below, and check back often - we are always writing articles and gathering community-generated content" });
        this.answers.push({ id: "5", content: "Interested in learning more about the Design System, how we built it, and how you can use it? Check out the links below, and check back often - we are always writing articles and gathering community-generated content" });
        this.answers.push({ id: "6", content: "Interested in learning more about the Design System, how we built it, and how you can use it? Check out the links below, and check back often - we are always writing articles and gathering community-generated content" });
    }
}