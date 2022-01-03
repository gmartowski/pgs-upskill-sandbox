var exec1 = 'exec';

function Execution1() {
  const exec2 = 'exec2';

  this.test1 = 1
  this.test2 = 4;

  function Execution2() {
    this.test3 = 'test3';
    return this.test3 + 2;
  }

  return this.test1 + exec1;
}

const exe = new Execution1();
console.log(exe);

const init = () => {
  let counter = 0;

  return {
    add() {
      return counter += 1;
    }
  }
}


const aaa = init();
console.log(aaa.add());

console.log(aaa.add());

function couter (){
  let counter = 0;

  function add(){
    return counter+=1
  }

  return add;
}

const t = couter();
// console.error(t());
// console.error(t());
// console.error(t());



