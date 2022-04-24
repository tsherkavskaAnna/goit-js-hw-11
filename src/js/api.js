const API_KAY = `26979383-64bf469f69381b7a5cedcba95`;
const URL_BASE = `https://pixabay.com/api/`;
const OPTIONS = `q=image_type=photo&orientation=horizontal&safesearch=true`


//Example url: ${URL_BASE}?key=${API_KAY}&${OPTIONS}//

// key - твій унікальний ключ доступу до API.
// q - термін для пошуку. Те, що буде вводити користувач.
// image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
// orientation - орієнтація фотографії. Постав значення horizontal.
// safesearch - фільтр за віком. Постав значення true.