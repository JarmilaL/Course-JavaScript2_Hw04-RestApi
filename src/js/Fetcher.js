export default class Fetcher {

    async fetchAll(url) {
        const responseJson = await fetch(url).then(response => response.json());
        const dataObjects = this._extractDataObjects(responseJson);
        return dataObjects.map(item => this._transformDataObject(item));
    }

    // Extract array of objects from HTTP response.
    _extractDataObjects(responseJson) { }

    // Convert an extracted object to a type determined by the fetcher type.
    _transformDataObject(dataObject) { }
}
