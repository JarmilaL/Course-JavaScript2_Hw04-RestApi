import '../css/style.css';
import EmployeesFetcher from "./employees/EmployeesFetcher";
import Renderer from "./Renderer";
import CountriesFetcher from "./countries/CountriesFetcher";
import SW_SpeciesFetcher from "./star_wars/SW_SpeciesFetcher";

/*
    Nápověda pro Star Wars API
    Pro úspešně volání API je potřeba následující formát:
    https://cors-anywhere.herokuapp.com/http://swapi.dev/api/planets
*/

// COUNTRIES API
async function renderCountries() {
    const countriesDOMList = document.getElementById('countries');
    const countries = await new CountriesFetcher().fetchAll('https://restcountries.eu/rest/v2/all');
    return new Renderer().renderNumberOfRandomItems(8, countriesDOMList, countries);
}
renderCountries()


// STAR WARS API
// Tato Api si zada zvlastni pozornost (zejmena trida SW_Species, prosim). Stravila jsem s ni neumerne mnozstvi casu :)
// Nacteni obcas chvili trva.
async function renderSWSpecies() {
    const sw_speciesDOMList = document.getElementById('star-wars-species');
    const sw_species = await new SW_SpeciesFetcher().fetchAll('https://cors-anywhere.herokuapp.com/http://swapi.dev/api/species');
    return new Renderer().renderNumberOfRandomItems(8, sw_speciesDOMList, sw_species);
}
renderSWSpecies()


// EMPLOYEES API
async function renderEmployees() {
    const employeesDOMList = document.getElementById('employees');
    const employees = await new EmployeesFetcher().fetchAll('http://dummy.restapiexample.com/api/v1/employees');
    return new Renderer().renderNumberOfRandomItems(8, employeesDOMList, employees);
}
renderEmployees();