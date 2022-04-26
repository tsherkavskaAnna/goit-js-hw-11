
import "./css/style.css"
import { Notify } from "notiflix"
import { getPhotos } from "./js/api";
import NewsApiService from "./js/api";
import { renderGallery } from "./js/render-photos";


const inputSearch = document.querySelector(`.search-form`);
const btnSearch = document.querySelector(`.btn`);
const btnLoadMore = document.querySelector(`.load-more`)
const gallery = document.querySelector('.gallery');

// const API_KAY = `26979383-64bf469f69381b7a5cedcba95`;
// const BASE_URL = `https://pixabay.com/api/`;
// const OPTIONS = `image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`

const newsApiService = new NewsApiService()


inputSearch.addEventListener(`submit`, onInputSearch);
btnLoadMore.addEventListener(`click`, onBtnLoadMore);


function onInputSearch(event) {
    event.preventDefault()
    gallery.innerHTML = ``;
    newsApiService.query = event.currentTarget.elements.searchQuery.value;
    newsApiService.resetPage();
    newsApiService.fetchPhotos().then(renderGallery)

    if(newsApiService.query === ``) {
      return Notify.info(`Please enter a search word.`)
    }

}

function onBtnLoadMore(event) {
     newsApiService.fetchPhotos().then(renderGallery)
    
}




