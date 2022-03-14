const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    const countriesHTML = countries.map(country => getCountryHTML(country));

    // console.log(countries)
    console.log(countriesHTML[0]);

    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

const getCountryHTML = country => {
    return `
    <div class="country">
       <h2>${country.name.common}</h2>
       <img src="${country.flags.png}">
    </div>`
}



loadCountries();