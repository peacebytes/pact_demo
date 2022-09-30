const path = require("path")
const { Verifier } = require("@pact-foundation/pact")
const SERVER_URL = "http://localhost:8081"

    describe("User Details Service Verification", () => {
        it("validates the expectations of User Details Service", () => {
          let opts = {
                logLevel: "DEBUG",
                providerBaseUrl: SERVER_URL,
                pactUrls: ["http://localhost:9292/pacts/provider/UserDetailsMicroService/consumer/NativeApp/latest"],
                consumerVersionTags: ["prod"],
                providerVersionTags: ["dev"],
                publishVerificationResult: true,
                provider: "UserDetailsMicroService",
                providerVersion: "2022.11.dev.build.14"
              }
            return new Verifier(opts).verifyProvider().then(output => {
                console.log("Pact Verification Complete!")
                console.log(output)
            })
        })
    })