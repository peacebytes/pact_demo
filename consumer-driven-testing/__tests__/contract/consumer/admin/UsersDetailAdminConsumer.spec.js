"use strict"

const { Matchers } = require("@pact-foundation/pact")
const { getUsers, postUser } = require("../../lib/simulatedWebConsumer")

describe("User Details Service", () => {
    const GET_EXPECTED_BODY =[
        {
            "username": "Lisa",
            "credit_balance": 344,
            "last_online_date": "2021-12-09",
            "member_since": "2020-10-22",
            "id": 1
        },
        {
            "username": "Liam",
            "credit_balance": 988,
            "last_online_date": "2021-02-15",
            "member_since": "2018-05-24",
            "id": 2
        },
        {
            "username": "Lily",
            "credit_balance": 566,
            "last_online_date": "2021-03-13",
            "member_since": "2019-04-08",
            "id": 3
        }
    ]
    
    afterEach(() => provider.verify())

    describe("GET users", () => {
        beforeEach(() => {
            const interaction = {
                state: "I have a list of users",
                uponReceiving: "a request for all users",
                withRequest: {
                    method: "GET",
                    path: "/users",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                    },
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: Matchers.like(GET_EXPECTED_BODY).contents
                }
            }
            return provider.addInteraction(interaction)
        })

        test("returns correct body, header, and statusCode", async() => {
            const response = await getUsers()
            expect(response.headers['content-type']).toBe("application/json; charset=utf-8")
            expect(response.status).toEqual(200)
        })
    })

    const POST_BODY = {
        "username": "Lynn",
        "credit_balance": 666,
        "last_online_date": "2022-10-04",
        "member_since": "2022-10-04"
    }

    const POST_EXPECTED_BODY = {
        username: POST_BODY.username,
        member_since: POST_BODY.member_since,
    }

    describe("POST users", () => {
        beforeEach(() => {
            const interaction = {
                state: "I create a new user",
                uponReceiving: "a request to create user with username",
                withRequest: {
                    method: "POST",
                    path: "/users",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    body: POST_BODY,
                },
                willRespondWith: {
                    status: 200,
                    body: Matchers.like(POST_EXPECTED_BODY).contents,
                },
            }

            return provider.addInteraction(interaction)
        })

        test("returns correct body, header and statusCode", async() => {
            const response = await postUser(POST_BODY)
            expect(response.status).toEqual(200)
        })
    })
})