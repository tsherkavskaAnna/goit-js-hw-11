

export { renderGallery }

const gallery = document.querySelector(`.gallery`)

function renderGallery (hits) {
  const markup = hits
    .map(hit => {
      const { largeImageURL, webformatURL, tags, likes, views, comments, downloads } = hit;
      return `
      <div class="gallery-card">
        <a class="gallery__link" href="${largeImageURL}">
          <div class="gallery-item">
            <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes</b>${likes}</p>
              <p class="info-item"><b>Views</b>${views}</p>
              <p class="info-item"><b>Comments</b>${comments}</p>
              <p class="info-item"><b>Downloads</b>${downloads}</p>
            </div>
          </div>
        </a>
        </div>
      `;
    })
    .join('');

    gallery.insertAdjacentHTML('beforeend', markup);
}

