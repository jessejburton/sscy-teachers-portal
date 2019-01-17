const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolved data.');
  }, 3000);
});

console.log('before');

promise
  .then((data) => {
    console.log('1', data);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('This is my other promise.');
      }, 3000);
    });
  })
  .then((str) => {
    console.log(str);
  })
  .catch((error) => {
    console.log(error.message);
  });

console.log('after');
