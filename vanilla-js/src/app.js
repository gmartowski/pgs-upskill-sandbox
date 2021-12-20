document.body.addEventListener('click', (e) => {
    console.log('Klik w body');
});

document.querySelector('#bubble').addEventListener('click', (e) => {
    console.log(e.target, e.currentTarget);
    console.log('Klik w button');
});

document.getElementById('test-ul').addEventListener('click', (e) => {
    console.log(e.target.nodeName);
    if (e.target.nodeName === 'LI') {
        console.log('cclicked li:', e.target)
    }
})


