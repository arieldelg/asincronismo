<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>                                                                                                                                                                                                                                                                                                         ole.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product);
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category);
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Finally')) */

;    

let names = []

fetchData(`${API}/users`)
    .then(response => response.json())
    .then(users => {
        
        users.map(element => {
            for (let prop in element) {
                if(prop === 'name') {
                     names.push(element[prop])
                }
            }
        })
        return users
    })
    .catch(error => console.log(error))
;

console.log(names);