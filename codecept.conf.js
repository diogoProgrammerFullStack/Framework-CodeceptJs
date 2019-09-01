exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.amazon.com/',
      browser: 'chrome',
      waitForTimeout: 5000,
      smartWait: 5000,
      Mochawesome: {
        uniqueScreenshotNames: true,
      },
      uniqueScreenshotNames: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    allure:{
      enabled: true,
    },
    fullPageScreenshots: true,
    
    StepByStepReport:{
      enabled: true,
      deleteSuccessful: false
    }
  },
  bootstrap: null,
  mocha: {
    reporterOptions:{
      reportDir: 'output'
    }
  },
  name: 'framework-web-node',
  translation: 'pt-BR'
}