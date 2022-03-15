const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    const countriesHTML = countries.map(country => getCountryHTML(country));

    console.log(countries[1])
    // console.log(countriesHTML[0]);

    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

/* original=====
const getCountryHTML = country => {
    return `
    <div class="country">
    <h2>${country.name.common}</h2>
    <img src="${country.flags.png}">
    <h3>Capital: ${country.capital}</h3>
    <h3>Population: ${country.population}</h3>
    <h3>Region: ${country.region}</h3>
    <h3>subregion: ${country.subregion}</h3>
    <h3>status: ${country.status}</h3>
    <h3>Area: ${country.area}</h3>
    </div>`
} 
*/

/* option-1======
const getCountryHTML = country => {
    const { name, flags, capital, population, region, area, status, subregion } = country;
    return `
    <div class="country">
    <h2>${name.common}</h2>
    <img src="${flags.png}">
    <h3>Capital: ${capital}</h3>
    <h3>Population: ${population}</h3>
    <h3>Region: ${region}</h3>
    <h3>subregion: ${subregion}</h3>
    <h3>status: ${status}</h3>
    <h3>Area: ${area}</h3>
    </div>`
} 
*/

//option-2======
const getCountryHTML = ({ name, flags, capital, population, region, area, status, subregion }) => {
    return `
    <div class="country">
    <h2>${name.common}</h2>
    <img src="${flags.png}">
    <h3>Official Name: ${name.official}</h3>
    <h3>Capital: ${capital}</h3>
    <h3>Population: ${population}</h3>
    <h3>Region: ${region}</h3>
    <h3>subregion: ${subregion}</h3>
    <h3>status: ${status}</h3>
    <h3>Area: ${area}</h3>
    </div>`
}

loadCountries();