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

- Run the consumer contract tests and generate the contracts:
`npm run test:consumer`

- Publish the contracts:
`npm run publish:contract`

- Run the provider contract tests to verify the contracts:
`npm run test:provider`