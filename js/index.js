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
homeLink.addEventListener('click', () => {
    // hide categories, search and countries
    randomBreweryRow.style.display = "flex"
    listBreweryRow.style.display = "none"
    typeOfBreweryRow.style.display = "none"
    searchRow.style.display = "none"

})
    // search form submit listener
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const query = searchInput.value
        searchMeal(query)
        randomBreweryRow.style.display = "none"
        listBreweryRow.style.display = "none"
        typeOfBreweryRow.style.display = "none"
        searchRow.style.display = "flex"
        searchRow.removeAttribute('hidden')
    })

    // create random brewery element
    const createRandomBrewery = (image, name, description) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12', 'px-0', 'mb-3')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-6')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('col-6', 'card-body')

        const breweryImg = document.createElement('img')
        breweryImg.classList.add('card-img', 'h-100')
        breweryImg.src = image
        breweryImg.objectFit = 'cover'

        const breweryTitle = document.createElement('h5')
        breweryTitle.classList.add('card-title')
        breweryTitle.innerText = name

        const breweryDescription = document.createElement('p')
        breweryDescription.classList.add('card-text')
        breweryDescription.innerText = description

        // append body elements
        bodyDiv.appendChild(breweryTitle)
        bodyDiv.appendChild(breweryDescription)

        // append image elements
        imgDiv.appendChild(breweryImg)

        // append divs to row
        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        // append row to card
        cardDiv.appendChild(rowDiv)

        // return the cardDiv
        return cardDiv
    }
// create list element
const createCategory = (image, name) => {

    const rootDiv = document.createElement('div')
    rootDiv.classList.add('col-4', 'p-1')

    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card', 'col-12', 'p-2')

    const listImg = document.createElement('img')
    listImg.classList.add('card-img-top')
    listImg.src = image

    const listTitle = document.createElement('h4')
    listTitle.classList.add('card-title')
    listTitle.innerText = name

    // append title and image to card
    cardDiv.appendChild(listImg)
    cardDiv.appendChild(listTitle)

    rootDiv.appendChild(cardDiv)

    return rootDiv
}
// create brewery types element
    const createTypes = (Type) => {
    const rootDiv = document.createElement('div')
    rootDiv.classList.add('col-3', 'p-1')

    const spanData = document.createElement('span')
    spanData.classList.add('col-12', 'badge', 'text-bg-success', 'p-2')
    spanData.innerText = type

    rootDiv.appendChild(spanData)
    return rootDiv
}

// create search results
const createSearchResults = (name, image, link) => {
    const rootDiv = document.createElement('div')
    rootDiv.classList.add('col-3', 'p-1')

    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card', 'px-0', 'h-100')

    const breweryImg = document.createElement('img')
    breweryImg.classList.add('card-img-top')
    breweryImg.src = image

    const breweryTitle = document.createElement('h6')
    breweryTitle.classList.add('p-2')
    breweryTitle.innerText = name

    const breweryLink = document.createElement('a')
    breweryLink.classList.add('mt-1', 'mb-2', 'me-3', 'ms-3', 'btn', 'btn-warning')
    breweryLink.innerText = 'VISIT ...'
    breweryLink.href = link
    breweryLink.target = '_blank'

    cardDiv.appendChild(breweryImg)
    cardDiv.appendChild(breweryTitle)
    cardDiv.appendChild(brewerylLink)

    rootDiv.appendChild(cardDiv)
    return rootDiv
}

})