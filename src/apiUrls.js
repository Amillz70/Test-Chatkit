let apiUrl
const apiUrls = {
  production: 'https://mighty-crag-77115.herokuapp.com/',
  development: 'http://localhost:3001'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
