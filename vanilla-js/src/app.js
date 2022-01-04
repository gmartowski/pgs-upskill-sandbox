const rickAndMortyAPI = {
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode",
  "error": 'eeor'
}

const promise = new Promise((resolve, reject) => {
  resolve(
    fetch(rickAndMortyAPI.error).then((response) => response)
  )
  reject(new Error('Sth went wrong'))
})

promise.then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

console.log(promise);
console.log('Finished');

// Immediately resolved promise - np, jak chcemy coś pobrac albo z localStorage albo z serwera (zmienna z wartoscia z LS opakowujemy w resolve)
const promise1 = Promise.resolve(42);
console.log(promise1);

// Immediately rejected promise
const promise2 = Promise.reject(42);
console.log(promise1);

// Promise.all
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('OOOPS !')), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 2000))
])
  .then(response => console.log(response))
  .catch(err => console.error(err));

// Promice.race
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve(1), 5000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 1000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 2000))
]).then(response => console.log(response));

// Async / Await
async function foo() {
  const promise = await new Promise((resolve, reject) => {
    setTimeout(() => resolve('Finished'), 2000)
  })

  console.log(promise)
}


foo();

