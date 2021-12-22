const url = 'https://rickandmortyapi.com/api/character';
const urlForData = 'https://jsonplaceholder.typicode.com/posts';
const fragment = document.getElementById('records')

const data = fetch(url).then((data) => {
    return data;
})

const posts = fetch(url)
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        data.results.map((item) => {
            console.error(item);
            const div = document.createElement('div');
            const img = document.createElement('img');
            img.setAttribute('src', item.image);
            div.innerText = item.name
            fragment.appendChild(img);
            fragment.appendChild(div);

        })
    })
    .catch((e) => {
        console.error(e);
    });


