const Async = () => {
    return new Promise ((resolve, reject) => {
        true ? setTimeout(() => resolve ('Async!')) : reject (new Error ('Error!'));
    })
}

const anotherFn = async () => {
    const something = await Async()
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');