import Fetcher from "../Fetcher";
import Employee from "./Employee";

export default class EmployeesFetcher extends Fetcher {

    _extractDataObjects(responseJson) {
        return responseJson.data;
    }

    _transformDataObject(dataObject) {
        return new Employee(dataObject);
    }
}
