import path from 'path';

export const config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    services: [
        ['appium', {
            command: 'appium',
            args: {
                address: '127.0.0.1',
                port: 4723,
                relaxedSecurity: true
            }
        }]
    ],
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'emulator-5554',
        'appium:appPackage': 'silktest.insurancemobile',
        // 'appium:app': 'D:/Coding/WDIO/MobileInsurance-Mocha/app/android/InsuranceMobile.apk',
        'appium:app': path.join(process.cwd(),'app/android/InsuranceMobile.apk'),
        'appium:noReset': false,
        'appium:dontStopAppOnReset': true
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
