const film_division = document.querySelector("#films")
const searchbar = document.querySelector("#searchbar")
const searchSystem = document.querySelector("#searchSystem")

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR`).then((e) => {
    return e.json()
}).then((e) => {
    const films = e.results
    films.forEach((e) => {
        const filmCard = document.createElement('div')
        filmCard.className = "film_Card"

        const filmInfo = document.createElement('div')
        filmInfo.className = "film_info"

        const filmImageSect = document.createElement('div')
        filmImageSect.className = "film_image"

        const filmImage = document.createElement('img')
        filmImage.className = "film_photo"
        filmImage.src = `https://image.tmdb.org/t/p/w500/${e.poster_path}`

        const filmTitleInfo = document.createElement('h2')
        filmTitleInfo.textContent = "Título:"
        filmTitleInfo.className = "film_titleInfo"

        const filmTitle = document.createElement('p')
        filmTitle.className = "film_title"
        filmTitle.textContent = e.title

        const overviewInfo = document.createElement('div')
        overviewInfo.className = "overviewInfo"

        const overviewTitle = document.createElement('h2')
        overviewTitle.className = "overviewTitle"
        overviewTitle.textContent = "Visão Geral:"

        const overview = document.createElement('p')
        overview.className = "overview"
        overview.textContent = e.overview

        filmImage.addEventListener('mouseenter', (e) => {
            filmImage.classList.add = "cardWide"
            overviewInfo.style.visibility = "visible"
        })

        filmCard.addEventListener('mouseleave', (e) => {
            filmImage.classList.remove = "cardWide"
            overviewInfo.style.visibility = "hidden"
        })

        const OGfilmTitle = document.createElement('h2')
        OGfilmTitle.textContent = "Título Original:"
        OGfilmTitle.className = "film_OGtitleInfo"

        const OGfilm = document.createElement('p')
        OGfilm.className = "film_OGtitle"
        OGfilm.textContent = e.original_title

        const filmReleaseDateTitle = document.createElement('h2')
        filmReleaseDateTitle.textContent = "Data de Lançamento:"
        filmReleaseDateTitle.className = "film_releaseInfo"

        const filmReleaseDate = document.createElement('p')
        filmReleaseDate.className = "film_release"
        filmReleaseDate.textContent = e.release_date

        overviewInfo.append(overviewTitle, overview)
        filmInfo.append(filmTitleInfo, filmTitle, OGfilmTitle, OGfilm, filmReleaseDateTitle, filmReleaseDate)
        filmImageSect.appendChild(filmImage)
        filmCard.append(overviewInfo, filmImageSect, filmInfo)
        film_division.append(filmCard)
    })
})

searchbar.addEventListener("input", (e) => {
    film_division.innerHTML = ""
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR&query=${searchbar.value}`).then((e) => {
        return e.json()
    }).then((e) => {
        const films = e.results
        if (searchbar.value == "") {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR`).then((e) => {
                return e.json()
            }).then((e) => {
                const films = e.results
                films.forEach((e) => {
                    const filmCard = document.createElement('div')
                    filmCard.className = "film_Card"

                    const filmInfo = document.createElement('div')
                    filmInfo.className = "film_info"

                    const filmImageSect = document.createElement('div')
                    filmImageSect.className = "film_image"

                    const filmImage = document.createElement('img')
                    filmImage.className = "film_photo"
                    filmImage.src = `https://image.tmdb.org/t/p/w500/${e.poster_path}`

                    const filmTitleInfo = document.createElement('h2')
                    filmTitleInfo.textContent = "Título:"
                    filmTitleInfo.className = "film_titleInfo"

                    const filmTitle = document.createElement('p')
                    filmTitle.className = "film_title"
                    filmTitle.textContent = e.title

                    const overviewInfo = document.createElement('div')
                    overviewInfo.className = "overviewInfo"

                    const overviewTitle = document.createElement('h2')
                    overviewTitle.className = "overviewTitle"
                    overviewTitle.textContent = "Visão Geral:"

                    const overview = document.createElement('p')
                    overview.className = "overview"
                    overview.textContent = e.overview

                    filmImage.addEventListener('mouseenter', (e) => {
                        filmImage.classList.add = "cardWide"
                        overviewInfo.style.visibility = "visible"
                    })

                    filmCard.addEventListener('mouseleave', (e) => {
                        filmImage.classList.remove = "cardWide"
                        overviewInfo.style.visibility = "hidden"
                    })

                    const OGfilmTitle = document.createElement('h2')
                    OGfilmTitle.textContent = "Título Original:"
                    OGfilmTitle.className = "film_OGtitleInfo"

                    const OGfilm = document.createElement('p')
                    OGfilm.className = "film_OGtitle"
                    OGfilm.textContent = e.original_title

                    const filmReleaseDateTitle = document.createElement('h2')
                    filmReleaseDateTitle.textContent = "Data de Lançamento:"
                    filmReleaseDateTitle.className = "film_releaseInfo"

                    const filmReleaseDate = document.createElement('p')
                    filmReleaseDate.className = "film_release"
                    filmReleaseDate.textContent = e.release_date

                    overviewInfo.append(overviewTitle, overview)
                    filmInfo.append(filmTitleInfo, filmTitle, OGfilmTitle, OGfilm, filmReleaseDateTitle, filmReleaseDate)
                    filmImageSect.appendChild(filmImage)
                    filmCard.append(overviewInfo, filmImageSect, filmInfo)
                    film_division.append(filmCard)
                })
            })
        } else {

            films.forEach((e) => {
                const filmCard = document.createElement('div')
                filmCard.className = "film_Card"

                const filmInfo = document.createElement('div')
                filmInfo.className = "film_info"

                const filmImageSect = document.createElement('div')
                filmImageSect.className = "film_image"

                const filmImage = document.createElement('img')
                filmImage.className = "film_photo"
                filmImage.src = `https://image.tmdb.org/t/p/w500/${e.poster_path}`

                const filmTitleInfo = document.createElement('h2')
                filmTitleInfo.textContent = "Título:"
                filmTitleInfo.className = "film_titleInfo"

                const filmTitle = document.createElement('p')
                filmTitle.className = "film_title"
                filmTitle.textContent = e.title

                const overviewInfo = document.createElement('div')
                overviewInfo.className = "overviewInfo"

                const overviewTitle = document.createElement('h2')
                overviewTitle.className = "overviewTitle"
                overviewTitle.textContent = "Visão Geral:"

                const overview = document.createElement('p')
                overview.className = "overview"
                overview.textContent = e.overview

                filmImage.addEventListener('mouseenter', (e) => {
                    filmImage.classList.add = "cardWide"
                    overviewInfo.style.visibility = "visible"
                })

                filmCard.addEventListener('mouseleave', (e) => {
                    filmImage.classList.remove = "cardWide"
                    overviewInfo.style.visibility = "hidden"
                })

                filmCard.addEventListener('click' ,(e)=>{
                    
                })

                const OGfilmTitle = document.createElement('h2')
                OGfilmTitle.textContent = "Título Original:"
                OGfilmTitle.className = "film_OGtitleInfo"

                const OGfilm = document.createElement('p')
                OGfilm.className = "film_OGtitle"
                OGfilm.textContent = e.original_title

                const filmReleaseDateTitle = document.createElement('h2')
                filmReleaseDateTitle.textContent = "Data de Lançamento:"
                filmReleaseDateTitle.className = "film_releaseInfo"

                const filmReleaseDate = document.createElement('p')
                filmReleaseDate.className = "film_release"
                filmReleaseDate.textContent = e.release_date

                overviewInfo.append(overviewTitle, overview)
                filmInfo.append(filmTitleInfo, filmTitle, OGfilmTitle, OGfilm, filmReleaseDateTitle, filmReleaseDate)
                filmImageSect.appendChild(filmImage)
                filmCard.append(overviewInfo, filmImageSect, filmInfo)
                film_division.append(filmCard)
            })
        }
    })
})