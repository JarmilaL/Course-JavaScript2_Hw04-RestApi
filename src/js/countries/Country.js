import Info from "../info";

export default class Country {
    constructor( { name, region, flag, capital, population, currencies, languages } ) {
        this._name = name;
        this._region = region;
        this._flag = flag;
        this._capital = capital;
        this._population = population;
        this._currency = currencies;
        this._language = languages;
    }

    getName() { return this._name; }

    getRegion() { return this._region; }

    getFlag() { return this._flag; }

    getCapital() { return this._capital; }

    getPopulation() { return this._population; }

    getCurrency() { return this._currency; }

    getLanguage() { return this._language; }

    getInfo() {
        let infoList = []
        infoList.push(new Info("Capital", this._capital));
        infoList.push(new Info("Population", parseInt(this._population).toLocaleString('cs-cz')));
        infoList.push(new Info("Currency", this._currency[0].name));
        infoList.push(new Info("Language", this._language[0].name));

        return infoList;
    }

    getDataToRender() {
        return {
            title: this._name,
            subtitle: this._region,
            imgSrc: this._flag,
            infoList: this.getInfo()
        }
    }
}