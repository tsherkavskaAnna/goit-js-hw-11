import axios from "axios";

axios.defaults.baseURL = `https://pixabay.com/api/`;
const API_KAY = `26979383-64bf469f69381b7a5cedcba95`;

export default class NewsApiService {
    constructor() {
       this.searchQuery = ``;
       this.page = 1;
  }
  async fetchPhotos() {
      const response = await axios.get(`?key=${API_KAY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`)
      this.incrementPage();
      return response.data;
    }
    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

}


//const options = {
    //     header: {
    //         Authorization: API_KAY,
    //     },
    // };
    
    
    // export default class NewsApiService {
    //     constructor() {
    //         this.searchQuery = ``;
    //         this.page = 1;
    //  }
    //     fetchPhotos() {
    //        const url = `${BASE_URL}?key=${API_KAY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`
    
    //     return fetch(url, options)
    //     .then(response => response.json())
    //     .then(({hits}) => {
    //         this.incrementPage();
    //         return hits;
    //     })
    //     }