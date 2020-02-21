# Cypress setup

## Cypress installation
```
npm install --save-dev cypress
```

## Running
Headed
```
cypress open
```
Headless
```
cypress run
```

## Options
--browser
```
cypress run --browser chrome
```

--headless
```
cypress run --headless
```

--spec
```
cypress run --spec folder/test.spec.js
```

--config-file
```
cypress run --config-file test/cypress.json
```

## Reporters

### Mochawesome

Required packages
- mocha
- mochawesome

```
npm install mocha@^5.0.0
npm install mochawesome
```

#### Running
```
cypress run --reporter mochawesome
```

#### cypress.json config

Adding reporter
```
{
  "reporter": "mochawesome"
}
```

Reporter options
```
{
  "reporter": "mochawesome",
    "reporterOptions": {
        "charts": true,
        "html": true,
        "json": true,
        "reportDir": "cypress/reports",
        "reportFilename": "report"
      }
}
```

Issues:
- requires mocha version ^5.0.0, with 6+ won't work
- generates report per test suite

### Merging mochawesome reports

#### Installation
```
npm install mochawesome-merge --save-dev
```

#### cypress.json
```
{
  "reporter": "mochawesome",
  "reporterOptions": {
    "charts": true,
    "overwrite": false,
    "html": false,
    "json": true,
    "reportDir": "cypress/report/mochawesome-report"
  }
}
```

#### To merge execute:
```
mochawesome-merge cypress/report/mochawesome-report/*.json > cypress/report/output.json
```

#### To generate HTML execute:
```
marge cypress/report/output.json --reportDir ./ --inline
```

#### Node script to delete old reports
```
const fs = require("fs");
fs.rmdirSync("./cypress/reports", {recursive: true});
```

### Coverage
