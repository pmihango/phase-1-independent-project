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

 // search form
  const searchForm = document.getElementById('search-form')
  const searchInput = document.getElementById('search')

 // CLICK EVENTS FOR LINKS
 listLink.addEventListener('click', () => {
    // hide random brewery
    randomBreweryRow.style.display = "none"
    // hide brewery types
    typeOfBreweryRow.style.display = "none"
    // hide search page
    searchRow.style.display = "none"
    // show list of breweries
    listBreweryRow.removeAttribute('hidden')
    listBreweryRow.style.display = "flex"
})

randomLink.addEventListener('click', () => {
    // hide brewery list
    listBreweryRow.style.display = "none"
    // hide types of brewery
    typeOfBreweryRow.style.display = "none"
    // hide search page
    searchRow.style.display = "none"
    // show random brewery
    randomBreweryRow.removeAttribute('hidden')
    randomBreweryRow.style.display = "flex"
})


})