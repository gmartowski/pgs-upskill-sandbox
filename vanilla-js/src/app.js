//

function closureFunction(){

    const test1 = 'test1';
    const test2 = 'test2';

    return {
        prop: () => {
            return test1 + test1
        }
    }
}

console.log(closureFunction());
