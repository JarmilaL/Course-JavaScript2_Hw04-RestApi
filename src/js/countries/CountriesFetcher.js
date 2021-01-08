import Country from "./Country";
import Fetcher from "../Fetcher";

export default class CountriesFetcher extends Fetcher {

    _extractDataObjects(responseJson) {
        return responseJson;
    }

    _transformDataObject(dataObject) {
        return new Country(dataObject);
    }
}