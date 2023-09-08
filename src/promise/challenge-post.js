import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

const postData = (urlApi, data) => {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data), 
    })
    return response
}

const data = {
    "title": "New Product Class",
    "price": 350,
    "description": "hecho por ariel del grande",
    "categoryId": 20,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products/277`, data)
    .then(response => response.json())
    .then(data => console.log(data))