const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const Repository = require("./repository")

const server = express()
server.use(cors())
server.use(bodyParser.json())
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
server.use((req, res, next) => {
  res.header("Content-Type", "application/json; charset=utf-8")
  next()
})

const userRepository = new Repository()

// Load user data into a repository object
const importData = () => {
  const data = require("./data/usersData.json")
  data.reduce((a, v) => {
    v.id = a + 1
    userRepository.add(v)
    return a + 1
  }, 0)
}

// Get all users
server.get("/users", (req, res) => {
  userRepository.clear(); // This is a trick for deming the same response for get all users
  importData()
  res.json(userRepository.fetchAll())
})

// Find user by ID
server.get("/users/:id", (req, res) => {
  const response = userRepository.getById(req.params.id)
  if (response) {
    res.end(JSON.stringify(response))
  } else {
    res.status(404)
    res.send({message: 'User not found!'})
    res.end()
  }
})

// Add a new user
server.post("/users", (req, res) => {
  const user = req.body

  // Basic validation for missing username field
  if (!user || !user.username) {
    res.status(400)
    res.send({message:'Missing username!', body: req.body})
    res.end()

    return
  }

  user.id = userRepository.fetchAll().length
  userRepository.add(user)

  res.json(user)
})

module.exports = {
  server,
  importData,
  userRepository,
}