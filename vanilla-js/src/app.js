// Jak określamy kontekst ?
// - call, apply, bind
// - new
// - wskazuje na obiekt jako właściwośc którego funkcja została wywołana

function articleList () {
  console.log(this);
  return ['article 1', "article 2", "article 3"]
}

class Article {

  constructor(title) {
    this.title = title;
  }

  getTitle() {
    console.log(this)
  }
}

class News {
  constructor(title) {
    this.title = title;
  }
}

let book = new Article('The Witcher');
let news = new News('BBC');
book.getTitle.apply(news);
const value  = articleList();
