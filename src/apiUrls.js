let apiUrl
const apiUrls = {
  production: 'https://evening-reef-19370.herokuapp.com',
  development: 'http://localhost:7165'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
