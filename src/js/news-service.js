const BASE_URL = 'https://newsapi.org/v2';
export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1
    }
    fetchArticles() {

        const options = {
            headers: {
                Authorization:'875e058abcba44d5a7fc87e242778b12',
            }
        };

        const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=6 &page=${this.page}`
        return fetch(url, options)
            .then(response => response.json())
            .then(data => {
                this.page += 1;
                return data.articles;
            })
    }
    resetPage() {
        this.page = 1
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}