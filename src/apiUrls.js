let apiUrl
const apiUrls = {
<<<<<<< HEAD
  production: 'https://mighty-crag-77115.herokuapp.com/',
  development: 'http://localhost:3001'
=======
  production: 'https://evening-reef-19370.herokuapp.com',
  development: 'http://localhost:7165'
>>>>>>> adam
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
