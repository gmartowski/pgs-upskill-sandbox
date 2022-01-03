let shadow = 1
const example1 = 1111;

function outer(arg1) {
  let shadow = 10;

  function inner(arg2) {
    console.log(arg1, arg2, shadow);
    console.log(example1);
  }

  inner(arg1 * 2);
}

outer(shadow);