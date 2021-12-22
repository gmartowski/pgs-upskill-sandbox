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
