console.log('Starting app');

setTimeout(() => {
    console.log('Timeout now');
}, 2000);

setTimeout(() => {
    console.log('Timeout now2');
}, 0);

console.log('Finishing App');