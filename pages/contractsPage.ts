import Page from "./page";
import waitUntil from "async-wait-until";

const { I } = inject();

class ContractsPage extends Page {

    private swiper = locate('.swiper-container').as('Swiper');

    constructor() {
        super('de/app/contracts');
    }

    async open() : Promise<ContractsPage> {
        super.open('?cv=2');
        await waitUntil(async () => {
            let url = await I.grabCurrentUrl();
            if (!url.includes(this.url)) I.amOnPage(this.url);
            return url.includes(this.url);
        }, {
            timeout: 60000,
            intervalBetweenAttempts: 5000,
        })
        I.waitForVisible(this.swiper);
        return this;
    }
}

export = new ContractsPage();
