const container = document.querySelector('#result');
const map = new Map();
const weakMap = new WeakMap();

map.set(undefined, 'test value');

weakMap.set({name: 'test', test: 'name'}, 'test value')
for (item of map) {
    console.log(item);
}

map.forEach((item) => {
    console.log(item)
})

console.log(map, weakMap);

console.log(map.has(undefined));


