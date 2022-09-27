const path = require("path")
const { Verifier } = require("@pact-foundation/pact")
const SERVER_URL = "http://localhost:8081"
//const { server, importData } = require("../../../src/provider")


    // server.listen(8081, () => {
    //     importData()
    //     console.log(`Clients Service listening on ${SERVER_URL}`)
    //   })

    describe("Clients Service Verification", () => {
        it("validates the expectations of Client Service", () => {
          let opts = {
                provider: "ClientsMicroService",
                logLevel: "DEBUG",
                providerBaseUrl: SERVER_URL,
                pactUrls: ["http://localhost:9292/pacts/provider/ClientsMicroService/consumer/AdminFrontend/latest"],
                consumerVersionTags: ["dev"],
                providerVersionTags: ["dev"],
                publishVerificationResult: true,
                providerVersion: "1.0.2.build11"
              }
            return new Verifier(opts).verifyProvider().then(output => {
                console.log("Pact Verification Complete!")
                console.log(output)
            })
        })
    })