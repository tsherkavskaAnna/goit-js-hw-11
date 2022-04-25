const API_KAY = `26979383-64bf469f69381b7a5cedcba95`;
const BASE_URL = `https://pixabay.com/api/`;
const OPTIONS = `q=image_type=photo&orientation=horizontal&safesearch=true`


//Example url: ${BASE_URL}?key=${API_KAY}&${OPTIONS}//

export const getPhotos = () => {
    return fetch(`${BASE_URL}?key=${API_KAY}&${OPTIONS}`)
    .then(response => {
        if(!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json()
    })
}