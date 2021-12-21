import ExampleSingleton from "./singleton/singleton";

const first = new ExampleSingleton(1);
const second= new ExampleSingleton(11);

console.log(first);
console.log(second);
console.log(first.add());
console.log(second.add());
