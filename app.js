

fetch("https://restcountries.com/v2/all")
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries => {

    countries.forEach(country => {
        const countriesDiv = document.getElementById('country');
        const container = document.createElement('div');
        container.className = 'country'
        const countryInfo = `
            <h3 class = 'city'> ${country.name} </h3>
            <p> ${country.capital} </p>
            <button onclick = "displayCountryDetails('${country.name}')"> Show details</button>
        `
        container.innerHTML = countryInfo;
        countriesDiv.appendChild(container);
    });
}

const displayCountryDetails = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]))
}


    const renderCountryInfo = country => {
        const divCountryDetails = document.getElementById('country-info')
        
        divCountryDetails.innerHTML = `
       <h3>${country.name.common} </h3>
        <p>Population:${country.population}</p>
        <p>Area:${country.area}</p>
        <img src= "${country.flags.png}">
       `
        


    }
        
























//    
//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         
 



    // const name = document.createElement('h3');
        // const capital = document.createElement('p');
        // name.innerText = country.name;
        // capital.innerText = country.capital;
        // container.appendChild(name);
        // container.appendChild(capital);