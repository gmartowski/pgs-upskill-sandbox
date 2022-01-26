const test = async () => await fetch('https://rickandmortyapi.com/api/character').then(response => response.json()).then(response => {
  console.error(response);
  document.getElementById('container').innerText = JSON.stringify(response)
});

function Artist(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

Artist.prototype.getName = function () {
  console.log(this);
  return this.name + this.age;
}

function Music(name, age) {
  this.name = name;
  this.age = age;
  Artist.call(name, age)
}


const artist = new Artist('John', 22, 177);


console.log(artist.getName());
