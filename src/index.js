
import "./css/style.css"
import { Notify } from "notiflix"
import { getPhotos } from "./js/api";
import NewsApiService from "./js/api";
import { BtnLoadMore } from "./js/btn-load-more";
import { renderGallery } from "./js/render-photos";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import simpleLightbox from "simplelightbox";

const inputSearch = document.querySelector(`.search-form`);
const btnSearch = document.querySelector(`.btn`);
const gallery = document.querySelector('.gallery');

const newsApiService = new NewsApiService()
const btnLoadMore = new BtnLoadMore({selector: `.load-more`, hidden: true});

const lightbox = new SimpleLightbox(`.gallery a`, {
  captionsData: 'alt',
  captionType: 'alt',
  captionDelay: 200,
  captionPosition: 'bottom',
});

inputSearch.addEventListener(`submit`, onInputSearch);
btnLoadMore.refs.button.addEventListener(`click`, fetchCardPhotos);


function onInputSearch(event) {
    event.preventDefault()
    newsApiService.query = event.currentTarget.elements.searchQuery.value.trim();
    
      if(newsApiService.query === ``) { 
        return Notify.info(`Please enter a search word.`)
      }
      clearPhotoCard();
      newsApiService.resetPage();
      btnLoadMore.show();
      fetchCardPhotos()
    }
      
      

function fetchCardPhotos() {
  btnLoadMore.disabled()
  newsApiService.fetchPhotos()
      .then(({hits, total, totalHits}) => {
        console.log(hits)
        if (totalHits === 0) {
        Notify.failure(`Sorry, there are no images matching your search query. Please try again.`)
        btnLoadMore.hide();
        return
      } 
      renderGallery(hits);
      lightbox.refresh();
      
       if(gallery.children.length > totalHits) {
         Notify.info(`We're sorry, but you've reached the end of search results.`)
         btnLoadMore.hide();
      }else {
        Notify.info(`Hooray! We found ${totalHits} images.`);
        btnLoadMore.enable();
        btnLoadMore.show();
      }
      })  
}

function clearPhotoCard() {
  gallery.innerHTML = ``;
}


    
    




