const path = require("path")
const Pact = require("@pact-foundation/pact").Pact

global.port = 8081
global.provider = new Pact({
  port: global.port,
  log: path.resolve(process.cwd(), "__tests__/contract/logs", "mockserver-integration.log"),
  dir: path.resolve(process.cwd(), "__tests__/contract/pacts/native"),
  spec: 2,
  logLevel: 'INFO',
  pactFileWriteMode: "overwrite",
  consumer: "NativeApp",
  provider: "UserDetailsMicroService",
})