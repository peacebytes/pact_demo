const axios = require('axios')
const UserDetailsMicroService = "http://localhost:8081"

const getUsers = async () => {
  const res = await axios
    .get(`${UserDetailsMicroService}/users`)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err.res
    })
  return res
}

const postUser = async (body) => {
      const res = await axios
      .post(`${UserDetailsMicroService}/users`, body, {'Content-Type': 'application/json;charset=utf-8'})
      .then((res) => {
          return res
        })
        .catch((err) => {
          return err.res
        })
    return res
}


module.exports = {
  getUsers,
  postUser
};