import SW_Species from "./SW_Species";
import Fetcher from "../Fetcher";

export default class SW_SpeciesFetcher extends Fetcher {

    _extractDataObjects(responseJson) {
        return responseJson.results;
    }

    _transformDataObject(dataObject) {
        return new SW_Species(dataObject);
    }
}