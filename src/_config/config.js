let backendHost
const apiVersion = 'v1'

const hostname = window && window.location && window.location.hostname

if (hostname === 'https://lit-basin-96922.herokuapp.com') {
  backendHost = 'https://afternoon-refuge-91691.herokuapp.com'
} else {
  backendHost = 'http://localhost:3001' || process.env.REACT_APP_BACKEND_HOST
}

export const API_ROOT = `${backendHost}/api/${apiVersion}`
