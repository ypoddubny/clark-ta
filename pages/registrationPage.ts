import Page from "./page";

const { I } = inject();

class RegistrationPage extends Page {

    protected title = locate('h1').as('Title');

    constructor() {
        super('de/app/customer/registration');
    }

    waitForOpened() : RegistrationPage {
        I.waitInUrl(this.url)
        I.seeTextEquals('Sichere deinen Fortschritt', this.title);
        return this;
    }
}

export = new RegistrationPage();
