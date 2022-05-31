let fetch = require('node-fetch')
fetch('http://localhost:8000/organization/getemployee').then(response => response.json()).then(data => console.log(data))

