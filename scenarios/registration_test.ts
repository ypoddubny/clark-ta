import Question from "../data/questionData";
import faker from "faker";

Feature('Recommendation funnel');

Scenario('Recommendation funnel', async ({
                                             I,
                                             contractsPage,
                                             recommendationsPage,
                                             demandCheckPage,
                                             registrationPage,
                                         }) => {

    let survey: Question[] = [
        new Question({
            text: 'Wann bist du geboren?',
            answer: '31.12.1991',
            type: 'input',
            mandatory: true
        }),
        new Question({
            text: 'Was ist dein Geschlecht?',
            answer: 'Weiblich',
            type: 'option',
            mandatory: true
        }),
        new Question({
            text: 'Wo wohnst du?',
            answer: 'In meiner eigenen Wohnung',
            type: 'option',
            mandatory: true
        }),
        new Question({
            text: 'Planst du innerhalb der nächsten 12 Monate eine Immobilie zu (re-)finanzieren?',
            answer: 'Ja, ich plane eine Anschlussfinanzierung',
            type: 'option',
            mandatory: true
        }),
        new Question({
            text: 'Besitzt du eines der folgenden Fahrzeuge?',
            answer: ['Auto', 'Motorrad'],
            type: 'multiple',
            mandatory: true
        }),
        new Question({
            text: 'Wie ist deine Familiensituation?',
            answer: 'Ich bin verheiratet',
            type: 'option',
            mandatory: true
        }),
        new Question({
            text: 'Hast du Kinder, die unter 18 Jahre alt oder noch in Ausbildung sind?',
            answer: 'Ja',
            type: 'option',
            mandatory: true
        }),
        new Question({
            text: 'Was machst du beruflich?',
            answer: 'Schüler',
            type: 'option',
            mandatory: true
        }),
        new Question({
            text: 'Bist du gesetzlich oder privat krankenversichert?',
            answer: 'Privat',
            type: 'option',
            mandatory: true
        }),
        new Question({
            text: 'Was machst du in deiner Freizeit?',
            answer: ['Ich verbringe sehr viel Zeit mit meiner Familie'],
            type: 'multiple',
            mandatory: true
        }),
        new Question({
            text: 'Hast du Tiere?',
            answer: [],
            type: 'multiple',
            mandatory: true
        }),
        new Question({
            text: 'Wie hoch ist dein Jahresbruttogehalt?',
            answer: faker.datatype.number({min: 10000, max: 99999}).toString(),
            type: 'input',
            mandatory: true
        }),
    ];

    await contractsPage.open();
    contractsPage.goToRecommendationsTab();
    recommendationsPage.waitForOpened().startDemandCheck();
    demandCheckPage.waitForOpened();
    demandCheckPage.fillSurvey(survey);
    registrationPage.waitForOpened();

});
