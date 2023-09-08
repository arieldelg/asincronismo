let cows = 11

const countCows = new Promise ((resolve, reject) => {
    if (cows > 10) {
        resolve(`Tenemos ${cows} vacas en la granja, solicitud aceptada`)
    } else {
        reject (`Tenemos ${cows} vacas en la granja, solicitud denegada`)
    }
})

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'))