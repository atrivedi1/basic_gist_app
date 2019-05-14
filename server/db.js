// const dataStore = {}

class UrlGenerator {
  constructor(dataStore = {}) {
    this.dataStore = dataStore;
  }

  generateUrl () {
    let url = Date.now();
    return url;
  }

  storeData(title, snippet) {
    let url = this.generateUrl()
    this.dataStore[url] = { title, snippet }
  }

  getContent (id) {
    console.log("type of id", typeof id, "id", id, "id in data store?", this.dataStore)
    if(this.dataStore[id]) {
      return this.dataStore[id]
    }
    return "didnt find anything"
  }
}

let urlModel = new UrlGenerator({})

module.exports = {
  urlModel
}