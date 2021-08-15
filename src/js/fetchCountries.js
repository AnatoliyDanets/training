// поиск страны
// import countryTmpl from '../templates/country-card.hbs';
// import countriesTmpl from '../templates/countries-list.hbs';
// var debounce = require('lodash.debounce');
// const cardContainer = document.querySelector('.container')
// const counrtyList = document.querySelector('.country-list')
// const input = document.querySelector('.inp');
// console.log(input);

// input.addEventListener('input', debounce(searchCountries, 500));

// function searchCountries(e) {
//     const searchQuery = e.target.value;
//     fetchCountries(searchQuery)
//         .then(countries => {
//             if (countries.length === 1) {
//                 const markup = countryTmpl(countries);
//                 cardContainer.innerHTML = markup;
//                 clearCountries(counrtyList)
//             }
//             else {
//                 const markup = countriesTmpl(countries);
//                 counrtyList.innerHTML = markup;
//                 clearCountries(cardContainer)
//             }

//         }).catch(error => console.log(error))
// }



// function fetchCountries(name) {
//     return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
//         .then((response) => { return response.json() })

// }

// function clearCountries(place) {
//     place.innerHTML = '';

// }





// Пагинация
import '../style/styles';
import NewsApiService from './news-service';
import articlesTmpl from '../templates/articles.hbs'
const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articleContainer: document.querySelector('.js-articles-container'),
    loadBtn: document.querySelector('[data-action="load-more"]')
}
const newApiService = new NewsApiService();
refs.searchForm.addEventListener('submit', onSearch);

refs.loadBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
    e.preventDefault();
    clearArticles();
    newApiService.query = e.currentTarget.elements.query.value;
    newApiService.resetPage();
    newApiService.fetchArticles().then(appendArticles).catch(error=>console.log(error));

}

function onLoadMore() {
    newApiService.fetchArticles().then(appendArticles).catch(error=>console.log(error));
}
function appendArticles(articles) {
    refs.articleContainer.insertAdjacentHTML('beforeend', articlesTmpl(articles))
}
function clearArticles() {
    refs.articleContainer.innerHTML = '';

}