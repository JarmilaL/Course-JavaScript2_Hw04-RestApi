import Info from "../info";

export default class SW_Species {
    /*
    * U této třídy nechávám vypisovat i property 'homeworld'. V objektu z prvního fetche je ale na homeworld
    * pouze url planety. Takze musim uvnitr teto tridy delat druhy fetch (metod findHomeworld).
    * Nelibi se mi, ze kvuli teto jedne metode, ktera musi byt async, musim mit async dalsi dve metody
    * v teto tride a dokonce jeste jednu v Rendereru. Vsude same async - await. Predpokladam, ze to asi
    * neni uplne spravne reseni, ale stravila jsem nad tim cely den (jakoze fakt ctyri hodiny), zkousela jsem to
    * vsemozne, googlila jsem jak o zivot :)) Ale bez vysledku.
    * Takze co mam spatne? Strukturu kodu? Jak na to lepe? */

    constructor( { name, classification, homeworld, language, average_height, average_lifespan } ) {
        this._name = name;
        this._classification = classification;
        this._homeworldURL = homeworld;
        this._language = language;
        this._averageHeight = average_height;
        this._averageLifespan = average_lifespan;

    }

    getName() { return this._name; }

    getClassification() { return this._classification; }

    getHomeworld() { return this._homeworldURL; }

    getLanguage() { return this._language; }

    getAverageHeight() { return this._averageHeight; }

    getAverageLifespan() { return this._averageLifespan; }

    async getInfoList() {
        let infoList = [];
        infoList.push(new Info("Homeworld", await this._findHomeworld(this._homeworldURL)));
        infoList.push(new Info("Language", this._language));
        infoList.push(new Info("Average height", this._averageHeight));
        infoList.push(new Info("Average lifespan", this._averageLifespan));

        return infoList;

    }

    async getDataToRender() {
        return {
            title: this._name,
            subtitle: this._classification,
            imgSrc: '../images/starwars.jpg',
            infoList: await this.getInfoList()
        }
    }

    async _findHomeworld(url) {
        if (url != null) {
            const homeworld = await fetch(url).then(response => response.json());
            return homeworld.name;
        } else {
            return '';
        }
    }
}