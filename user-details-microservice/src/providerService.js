const { server, importData } = require("./provider")
importData()

server.listen(8081, () => {
  console.log("User Details Micros-Service running on http://localhost:8081")
})