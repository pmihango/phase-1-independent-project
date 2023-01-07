// URLS
//1. Random cocktail
const RANDOM_COCKTAIL = 'www.thecocktaildb.com/api/json/v1/1/random.php'
// 2. Categories
const CATEGORIES = 'www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
// 3. Glasses
const GLASSES = 'www.thecocktaildb.com/api/json/v1/1/list.php?g=list'
// 4. Search
const SEARCH = 'www.thecocktaildb.com/api/json/v1/1/search.php?s='

document.addEventListener('DOMContentLoaded', () => {


    // ROWS DATA
    const randomCocktailRow = document.getElementById('random-cocktail')
    const cocktailCategoryRow = document.getElementById('cocktail-categories')
    const cocktailGlassRow = document.getElementById('cocktail-glasses')
    const searchRow = document.getElementById('search-result')

    // LINKS DATA
    const categoriesLink = document.getElementById('category-link')
    const glassesLink = document.getElementById('glass-link')
    const homeLink = document.getElementById('home-link')

    // search form
    const searchForm = document.getElementById('search-form')
    const searchInput = document.getElementById('search')

    // CLICK EVENTS FOR LINKS
    categoriesLink.addEventListener('click', () => {
        // hide random cocktail
        randomCocktailRow.style.display = "none"
        // hide glasses
        cocktailGlassRow.style.display = "none"
        // hide search page
        searchRow.style.display = "none"
        // show categories
        cocktailCategoryRow.removeAttribute('hidden')
        cocktailCategoryRow.style.display = "flex"

    })

    glassesLink.addEventListener('click', () => {
        // hide random cocktail
        randomCocktailRow.style.display = "none"
        // hide categories
        cocktailCategoryRow.style.display = "none"
        // hide search page
        searchRow.style.display = "none"
        // show glasses
        cocktailGlassRow.removeAttribute('hidden')
        cocktailGlassRow.style.display = "flex"
    })

    homeLink.addEventListener('click', () => {
        // hide categories, search and glasses
        randomCocktailRow.style.display = "flex"
        cocktailCategoryRow.style.display = "none"
        cocktailGlassRow.style.display = "none"
        searchRow.style.display = "none"

    })

    // search form submit listener
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const query = searchInput.value
        searchCocktail(query)
        randomCocktailRow.style.display = "none"
        cocktailCategoryRow.style.display = "none"
        cocktailGlassRow.style.display = "none"
        searchRow.style.display = "flex"
        searchRow.removeAttribute('hidden')
    })

    // create random cocktail element
    const createRandomCocktail = (image, name, description) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12', 'px-0', 'mb-3')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-6')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('col-6', 'card-body')

        const cocktailImg = document.createElement('img')
        cocktailImg.classList.add('card-img', 'h-100')
        cocktailImg.src = image
        cocktailImg.objectFit = 'cover'

        const cocktailTitle = document.createElement('h5')
        cocktailTitle.classList.add('card-title')
        cocktailTitle.innerText = name

        const cocktailDescription = document.createElement('p')
        cocktailDescription.classList.add('card-text')
        cocktailDescription.innerText = description

        // append body elements
        bodyDiv.appendChild(cocktailTitle)
        bodyDiv.appendChild(cocktailDescription)

        // append image elements
        imgDiv.appendChild(cocktailImg)

        // append divs to row
        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        // append row to card
        cardDiv.appendChild(rowDiv)

        // return the cardDiv
        return cardDiv
    }

    // create category element
    const createCategory = (image, name) => {

        const rootDiv = document.createElement('div')
        rootDiv.classList.add('col-4', 'p-1')

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12', 'p-2')

        const categoryImg = document.createElement('img')
        categoryImg.classList.add('card-img-top')
        categoryImg.src = image

        const categoryTitle = document.createElement('h4')
        categoryTitle.classList.add('card-title')
        categoryTitle.innerText = name

        // append title and image to card
        cardDiv.appendChild(categoryImg)
        cardDiv.appendChild(categoryTitle)

        rootDiv.appendChild(cardDiv)

        return rootDiv

    }

    // create glasses element
    const createGlasses = (glass) => {
        const rootDiv = document.createElement('div')
        rootDiv.classList.add('col-3', 'p-1')

        const spanData = document.createElement('span')
        spanData.classList.add('col-12', 'badge', 'text-bg-success', 'p-2')
        spanData.innerText = glass

        rootDiv.appendChild(spanData)
        return rootDiv
    }

    // create search results
    const createSearchResults = (name, image, link) => {
        const rootDiv = document.createElement('div')
        rootDiv.classList.add('col-3', 'p-1')

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'px-0', 'h-100')

        const cocktailImg = document.createElement('img')
        cocktailImg.classList.add('card-img-top')
        cocktailImg.src = image

        const cocktailTitle = document.createElement('h6')
        cocktailTitle.classList.add('p-2')
        cocktailTitle.innerText = name

        const cocktailLink = document.createElement('a')
        cocktailLink.classList.add('mt-1', 'mb-2', 'me-3', 'ms-3', 'btn', 'btn-warning')
        cocktailLink.innerText = 'VISIT ...'
        cocktailLink.href = link
        cocktailLink.target = '_blank'

        cardDiv.appendChild(cocktailImg)
        cardDiv.appendChild(cocktailTitle)
        cardDiv.appendChild(cocktailLink)

        rootDiv.appendChild(cardDiv)
        return rootDiv
    }

   

    // load random cocktail
    const loadRandomCocktail = () => {
        fetch(RANDOM_COCKTAIL)
            .then((response) => response.json())
            .then((data) => {
                const cocktailData = data.drinks[0]
                const name = cocktailData.strDrink
                const instructions = cocktailData.strInstructions
                const image = cocktaillData.strDrinkThumb
                const cocktailElement = createRandomCocktail (image, name, instructions)
                randomCocktailRow.appendChild(cocktailElement)
            })
    }

    // load cocktail categories
    const loadCategories = () => {
        fetch(CATEGORIES)
            .then((response) => response.json())
            .then((data) => {
                const categoriesData = data.strCategory
                const categoryElems = categoriesData.map(
                    cat => createCategory(cat.strCategoryThumb, cat.strCategory)
                )
                cocktailCategoryRow.append(...categoryElems)
            })
    }

    // load glasses
    const loadGlasses = () => {
        fetch(GLASSES)
            .then((response) => response.json())
            .then((glass) => {
                const cocktailGlasses = glass.strGlass

                const cocktailElems = cocktailGlasses.map(
                    glass =>  createGlasses(glass.strGlass)
                )
                cocktailGlassRow.append(...cocktailElems)
            })
    }

    // search data
    const searchCocktail = (cocktail) => {
        fetch(`${SEARCH}${cocktail}`)
            .then((response) => response.json())
            .then((data) => {
                const cocktailDataList = data.cocktails
                const searchResults = cocktailDataList.map(
                    cocktailData => {
                        const name = cocktailData.strCocktail
                        const image = cocktailData.strCocktailThumb
                        const link = cocktailData.strYoutube
                        console.log(name)
                        return createSearchResults(name, image, link)
                    }
                )
                // replace all children
                searchRow.replaceChildren(...searchResults)
            })
    }

    // load data to UI
    loadRandomCocktail()
    loadCategories()
    loadGlasses()

})













