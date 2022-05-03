require('ts-node/register');
const {setHeadlessWhen} = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);


exports.config = {
    tests: './scenarios/*_test.ts',
    output: './test-reports',
    helpers: {
        Playwright: {
            url: 'https://staging.clark.de/',
            show: true,
            browser: 'chromium',
            restart: false,
            timeout: 10000,
            fullPageScreenshots: true,
            uniqueScreenshotNames: false,
            waitForAction: 500,
            // pressKeyDelay: 20,
            waitForNavigation: 'networkidle',
            getPageTimeout: 30000,
            waitForTimeout: 30000,
            windowSize: '1680x960',
            video: true,
            keepVideoForPassedTests: true,
            recordVideo: {
                dir: './test-reports/video'
            }
        },
        ChaiWrapper: {
            require: "codeceptjs-chai"
        },
    },
    include: {
        contractsPage: './pages/contractsPage.ts',
        recommendationsPage: './pages/recommendationsPage.ts',
        demandCheckPage: './pages/demandCheckPage.ts',
        registrationPage: './pages/registrationPage.ts',
    },
    mocha: {},
    name: 'clark-ta',
    plugins: {
        retryFailedStep: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        },
        tryTo: {
            enabled: true,
            registerGlobal: true
        },
        subtitles: {
            enabled: true
        },
        allure: {
            enabled: true,
            outputDir: './test-reports/allure'
        }
    }
}
