import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

const asyncFn = async (urlApi) => {
    const response = await fetch(urlApi);
    const data = await response.json(response);
    return data;
}

const anotherFunction = async (urlApi) => {
    try {
        const products = await asyncFn(`${urlApi}/products`);
        const product = await asyncFn(`${urlApi}/products/${products[0].id}`);
        const category = await asyncFn(`${urlApi}/categories/${product.category.id}`)
        let array = []
        products.map(element => {
            for (let prop in element.category) {  
                if (prop === 'name') {
                    array.push(element.category[prop])
                }
            }
        })
    
        /* console.log(products);
        console.log(product.price);
        console.log(category.image); */
        console.log(array);
    } catch (error) {
        console.error(error);
    }
}

anotherFunction(API)