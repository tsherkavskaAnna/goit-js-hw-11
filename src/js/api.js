
const API_KAY = `26979383-64bf469f69381b7a5cedcba95`;
const BASE_URL = `https://pixabay.com/api/`;
// const param = `image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`
const options = {
    header: {
        Authorization: API_KAY,
    },
};

export default class NewsApiService {
    constructor() {
        this.searchQuery = ``;
        this.page = 1;
 }
    fetchPhotos() {
       const url = `${BASE_URL}?key=${API_KAY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`

    return fetch(url, options)
    .then(response => response.json())
    .then(({hits}) => {
        this.incrementPage();

        return hits;
        
    })
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}
