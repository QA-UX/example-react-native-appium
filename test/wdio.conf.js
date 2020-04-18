exports.config = {
    services: ['appium'],
    port: 4723,
    runner: 'local',
    specs: [
        './specs/**/*.js'
    ],
    capabilities: [{
        maxInstances: 1,
        browserName: '',
        appiumVersion: '1.13.0',
        platformName: 'Android',
        platformVersion: '10.0',
        deviceName: 'pixel_2_xl',
        app: '../android/app/build/outputs/apk/debug/app-debug.apk',
        automationName: 'UiAutomator2'
    }],

    logLevel: 'trace',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
