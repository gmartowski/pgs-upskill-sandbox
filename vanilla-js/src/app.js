const url = 'https://rickandmortyapi.com/api/character';
const urlForData = 'https://jsonplaceholder.typicode.com/posts';
const fragment = document.getElementById('records')

const data = fetch(url).then((data) => {
    return data;
})

const posts = fetch(urlForData)
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        data.results.map((item) => {
            console.error(item);
            const img = document.createElement('img');
            img.setAttribute('src', item.image);
            fragment.appendChild(img);

        })
    })
    .catch((e) => {
        console.error(e);
    });


