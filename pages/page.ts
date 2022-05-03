const { I } = inject();

export default class Page {
    protected readonly url: string;

    protected logo = locate('a.page-header-name-clark').as('Logo');

    protected recommendationsTab = locate('ul[role="menubar"]').find('li a[role="menuitem"].page-navigation__link--optimisations')

    constructor(url) {
        this.url = url;
    }

    open(params? : string) : void {
        I.amOnPage(this.url + params || '');
        I.usePlaywrightTo('set cookie consent', async ({ browserContext }) => {
            await browserContext.addCookies([
                {
                    name: 'consent',
                    value: '{"version":1,"categories":[{"identifier":"functional_cookies","enabled":true},{"identifier":"marketing_&_tracking","enabled":false}]}',
                    url: codeceptjs.container.helpers('Playwright').config.url
                }
            ]);
        })
        I.refreshPage();
        I.waitForVisible(this.logo);
    }


    waitForOpened() : void {
        I.waitInUrl(this.url);
        I.waitForVisible(this.logo);
    }

    goToRecommendationsTab() : void {
        I.click(this.recommendationsTab);
    }

}
