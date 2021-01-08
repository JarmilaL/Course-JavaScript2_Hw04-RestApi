/**
 * @param title string Hlavní titulek
 * @param subtitle string Podtitulek
 * @param imgSrc string Odkaz na obrázek
 * @param info Info[] Pole obsahující objekty Info
 * @return string
 */


export default (title, subtitle, imgSrc, infoList) => {
    let infoTemplate = []

    if (infoList.length > 0) {
        infoTemplate = infoList.reduce((acc, entry) => {
            acc.push(`<li class="country-info-item">${entry.key}: ${entry.value}</li>`)
            return acc
        }, [])
    }

    let template =  `
        <li class="country-card">
            <div class="country-flag-container">
            <img
                src=${imgSrc}
                alt="country flag"
                class="country-flag-element"
            />
            </div>

            <div class="country-data">
                <h3 class="country-name">
                    ${title}
                </h3>
                <h4 class="continent-name">${subtitle}</h4>
                <ul class="country-info">
                    ${infoTemplate.join("")}
                </ul>
            </div>
        </li>
    `

    return template;
}