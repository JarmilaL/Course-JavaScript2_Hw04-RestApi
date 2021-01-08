import template from "./template";

export default class Renderer {

    renderOne(DOMElement, { title, subtitle, imgSrc, infoList }) {
        DOMElement.innerHTML = template(title, subtitle, imgSrc, infoList);
    }

    async renderAll(DOMElement, dataObject) {
        let DOMElementContent = '';

        for(let item of dataObject) {
            const { title, subtitle, imgSrc, infoList } = await item.getDataToRender();
            DOMElementContent += template(title, subtitle, imgSrc, infoList);
        }

        DOMElement.innerHTML = DOMElementContent;
    }

    renderNumberOfRandomItems(requiredNumberOfItems, DOMElement, dataObject) {
        const randomizedDataObject = this._shuffle(dataObject).splice(0, requiredNumberOfItems);
        this.renderAll(DOMElement, randomizedDataObject);
    }

    _shuffle(dataObject) {
        for (let i = dataObject.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [dataObject[i], dataObject[j]] = [dataObject[j], dataObject[i]];
        }
        return dataObject;
    }

}