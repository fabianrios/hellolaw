import axios from 'axios'
import Vue from 'vue'

const API_URL = 'http://localhost:3000' // any backend url

/**
 ******************************
 * @API
 ******************************
 */

export function makeLogin ({username, password}) {
  return axios.post(`${API_URL}/api-token-auth/`, {username, password})
    .then(response => {
      _setAuthData(response)
      return response
    }).catch(error => {
      return error
    })
}

export function makeLogout () {
  delete axios.defaults.headers.common['Authorization']
  Vue.prototype.$session.remove('data')
  Vue.prototype.$session.destroy()
}

/**
 ******************************
 * @methods
 ******************************
 */

function _setAuthData (response) {
  // start the session
  Vue.prototype.$session.start()
  Vue.prototype.$session.set('data', JSON.stringify(response.data))
  // pass the token to the axios calls
  axios.defaults.headers.common['Authorization'] = 'Token ' + response.data.token
}
