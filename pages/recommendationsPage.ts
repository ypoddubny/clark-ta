import Page from "./page";

const { I } = inject();

class RecommendationsPage extends Page {

    private swiper = locate('.swiper-container').as('Swiper');

    private startCheckButton = locate('a[data-test-stories-call-to-action]').as('Start Check Button')

    constructor() {
        super('de/app/recommendations?tab=no1-recommendation');
    }

    open() : RecommendationsPage {
        super.open();
        I.waitForVisible(this.swiper);
        return this;
    }

    waitForOpened(): RecommendationsPage {
        super.waitForOpened();
        I.waitForVisible(this.swiper);
        return this
    }

    startDemandCheck() : void {
        I.click(this.startCheckButton);
    }
}

export = new RecommendationsPage();
