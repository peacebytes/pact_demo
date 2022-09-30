let publisher = require("@pact-foundation/pact-node")
let path = require("path")

let opts = {
    pactFilesOrDirs: [path.resolve(process.cwd(), "__tests__/contract/pacts/web")],
    pactBroker: "http://localhost:9292",
    consumerVersion: "2022.12.web.b4",
    providerVersion: "2022.12",
    tags: "prod"
}

publisher.publishPacts(opts)