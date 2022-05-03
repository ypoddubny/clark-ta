export default class Question {
    text : string;
    answer: string | string[];
    type: 'input' | 'option' | 'multiple';
    mandatory: boolean

    constructor(params : {text: string, answer: string | string[], type: 'input' | 'option' | 'multiple', mandatory: boolean }) {
        this.text = params.text;
        this.answer = params.answer;
        this.type = params.type;
        this.mandatory = params.mandatory;
    }

}
