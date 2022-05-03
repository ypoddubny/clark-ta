import Page from "./page";
import faker from "faker";
import Question from "../data/questionData";

const { I } = inject();

class DemandCheckPage extends Page {

    private progressBar = locate('.progress-bar').as('Progress Bar');

    private questionsSection = locate('section.capybara-demandcheck-question-section').as('Questions Section');

    private questionIntro = locate('div[class^="_question__intro"]').as('Question Title');

    private dateBirthField = locate('input#mandate_birthdate').as('BirthDate Field');
    private field = locate('input').as('Field');

    private radioButton = (value) => locate('li.cucumber-demandcheck-list-item').withText(value).as(value + ' option')

    private previousButton = locate('button.capybara-demandcheck-secondary-cta').as('Previous Question Button');
    private nextButton = locate('button.capybara-demandcheck-primary-cta').as('Next Question Button');


    constructor() {
        super('de/app/demandcheck');
    }

    waitForOpened() : DemandCheckPage {
        super.waitForOpened();
        I.waitInUrl('?responseId')
        I.waitForVisible(this.progressBar);
        I.waitForVisible(this.questionsSection);
        return this
    }

    fillSurvey (questions: Question[]) : void {
        for (let question of questions) {
            I.see(question.text, this.questionIntro);

            switch (question.type) {
                case "input":
                    I.fillField(this.field, question.answer);
                    I.waitForEnabled(this.nextButton);
                    I.click(this.nextButton);
                    break;
                case "option":
                    I.click(this.radioButton(question.answer));
                    break;
                case "multiple":
                    for (let ans of question.answer)
                        I.click(this.radioButton(ans));
                    I.click(this.nextButton);
                    break;
            }

        }
    }
}

export = new DemandCheckPage();
