
import "./css/style.css"
import { Notify } from "notiflix"
import axios from "axios"
import { getPhotos } from "./js/api";

const inputSearch = document.querySelector(`input`);
console.log(inputSearch)
const btnSearch = document.querySelector(`.btn`);
console.log(btnSearch)
const gallery = document.querySelector(`.gallery`)
console.log(gallery)



let data = ``;
btnSearch.addEventListener(`submit`, onInputSearch);

function onInputSearch(event) {
    event.ppreventDefault()
    const hits = inputSearch.searchQuery.value.trim();
    console.log(hits)

}

getPhotos(hits).then(renderPhotoCard).catch();

function renderPhotoCard() {
    gallery.innerHTML = ``;
    if(name.length === 0) {
        Notify.failure(`Sorry, there are no images matching your search query. Please try again.`)
    }
    return makePhotoCard()
}

function makePhotoCard({data}) {
    const markup = data.map(({webformatURL,largeImageURL,tags,likes,views,comments,downloads}) => {
        return `<div class="photo-card">
        <a class="gallery-item" href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
        <div class="info">
          <p class="info-item">
            <b>Likes: </b></br>${likes}
          </p>
          <p class="info-item">
            <b>Views:</b></br>${views}
          </p>
          <p class="info-item">
            <b>Comments:</b></br>${comments}
          </p>
          <p class="info-item">
            <b>Dowloads:</b></br>${downloads}
          </p>
        </div>
      </div>`
    }).join(``);
gallery.innerHTML = markup
}
// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.


