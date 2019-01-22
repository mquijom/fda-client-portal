// import setAuthToken from '@/axios-config.js'
// var jwt = require('jsonwebtoken')

const state = {
  isAuthenticated: false,
  token: 'sample_tokenssss',
  user: {},
  task: {}
}

const mutations = {
  LOGIN: function (state, payload) {
    state.user = payload.user
    state.token = payload.token
    state.isAuthenticated = true
  },
  LOGOUT: function (state) {
    state.user = {}
    state.token = false
    state.isAuthenticated = false
  },
  CHECK_SESSION: function (state) {
    // var decoded = jwt.verify(state.token, 'D!m3 P0rt@l')
  },
  CURRENT_TASK: function (state, payload) {
    state.task = payload
  }
}

// var actions = {
//   checkAdmin: (state, data) => {
//     console.log('############ calling token: ' + JSON.stringify(state.state.user._id))
//     var instance = setAuthToken(state.state.token)
//     return instance.get('/api/users/isAdmin/' + state.state.user._id)
//   }
// }

export default {
  state,
  mutations
  //   actions
}
