let backendHost
const apiVersion = 'v1'

const hostname = window && window.location && window.location.hostname

if (hostname === 'realsite.com') {
  backendHost = 'https://sleepy-woodland-46242.herokuapp.com'
} else {
  backendHost = 'http://localhost:3001' || process.env.REACT_APP_BACKEND_HOST
}

export const API_ROOT = `${backendHost}/api/${apiVersion}`
