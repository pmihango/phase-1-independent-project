// URLS
//1. Random brewery
const RANDOM_BREWERY = 'https://api.openbrewerydb.org/breweries/random'
// 2. List
const LIST = 'https://api.openbrewerydb.org/breweries'
// 3. Types
const BREWERY_TYPE = 'https://api.openbrewerydb.org/breweries?by_type=micro&per_page=3'
// 4. Search
const SEARCH = 'https://api.openbrewerydb.org/breweries/search?query={search}'

document.addEventListener('DOMContentLoaded', () => {

// ROWS DATA
const listBreweryRow = document.getElementById('brewery-list')
const randomBreweryRow = document.getElementById('random-brewery')
const typeOfBreweryRow = document.getElementById('brewery-type')
const searchRow = document.getElementById('search-result')

 // LINKS DATA
 const listLink = document.getElementById('list-link')
 const randomLink = document.getElementById('random-link')
 const homeLink = document.getElementById('home-link')

 
})