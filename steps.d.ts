/// <reference types='codeceptjs' />
type contractsPage = typeof import('./pages/contractsPage');
type recommendationsPage = typeof import('./pages/recommendationsPage');
type demandCheckPage = typeof import('./pages/demandCheckPage');
type registrationPage = typeof import('./pages/registrationPage');
type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, contractsPage: contractsPage, recommendationsPage: recommendationsPage, demandCheckPage: demandCheckPage, registrationPage: registrationPage}
  interface Methods extends Playwright, REST, ChaiWrapper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
