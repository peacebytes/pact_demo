### pact_demo


## Running via CLI

- Open your terminal on your project's folder

- Install Node packages:
`npm install`

- Run the consumer contract tests (Generate the contracts and publish to pact broker):
`npm run test:consumer`

- Run the provider contract tests (Verify the contracts):
`npm run test:provider`

- Run the consumer server `http://localhost:8080` (Client API/Service):
`npm run consumer`

- Publish the contracts:
`npm run publish:contract`

## How to run micro-service on local
`npm run provider`
Run the provider server  `http://localhost:8081`  (Client API/Service):

## Install pact broker on local

​See ​https://github.com/pact-foundation/pact_broker/tree/master/example

Acquire admin privileges
```
git clone https://github.com/pact-foundation/pact_broker.git
sudo bundle install
RACK_ENV=production bundle exec puma
```
By default pact broker will be available at  http://localhost:9292
