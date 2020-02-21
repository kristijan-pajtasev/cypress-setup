# Cypress setup

## Cypress installation
```
npm install --save-dev cypress
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

Issues:
- requires mocha version ^5.0.0, with 6+ won't work

### Merging mochawesome reports

### Coverage
