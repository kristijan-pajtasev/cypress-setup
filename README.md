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

### Coverage
