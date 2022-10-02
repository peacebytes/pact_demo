### pact_demo

## Start users-details-micro-service on local

Open your terminal on your project's folder

```
cd pact_demo
cd users-details-microservice
npm install
npm run provider
```
Run the provider server  `http://localhost:8081`  (Client API/Service):

## Install pact broker on local

​See ​https://github.com/pact-foundation/pact_broker/tree/master/example


```
git clone https://github.com/pact-foundation/pact_broker.git
cd pact_broker/example
sudo bundle install
```

Run pact broker
```
RACK_ENV=production bundle exec puma
```

By default pact broker will be available at  http://localhost:9292


## Running pact consumer-driven-testing

- Open your terminal on your project's folder

```
cd pact_demo
cd consumer-driven-testing
npm install
```


### Running consumer test and generate contracts
- Run the Web App consumer contract tests and generate the contracts:
```
npm run test:consumerWeb
```
- Run the Native App consumer contract tests and generate the contracts:
```
npm run test:consumerNative
```
- Run the Admin Portal consumer contract tests and generate the contracts:
```
npm run test:consumerAdmin
```

### Publishing all contracts
- Publish the contracts:
```
npm run publish:contract
```

### Running provider verification against contract
- Set up User Details Microservice:
```
cd pact_demo
cd user-details-microservice
npm install
```
- To verify web app contracts
```
npm run test:providerWeb
```
- To verify admin portal contracts:
```
npm run test:providerAdmin
```
- To verify native app contracts:
```
npm run test:providerNative
```
