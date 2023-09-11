export class RecentNewsItem {
    constructor(news) {
        this.id = news.id;
        this.name = news.name;
        this.year = news.year;
        this.price = news.price;
        this.img = news.img;
        this.alt = news.alt;
    }
    Render() {
        return `<article class="recentNews" id="recentnews_${this.id}">
        <img src="${this.img}" alt="${this.alt}" class="recentNews-imgSrc"/>
        <div class="recentNews-text">
            <h1 class="recentNews-header" contenteditable="true" id="recentnews_name_${this.name}">${this.year}</h1>
            <div class="recentNews-stat">
                <div class="recentNews-price">${this.price}</div>
                <a href="#">More...</a>
            </div>
        </div>
    </article>`;
    }

    Bind(eventType, element, property) {
        getElementById(`${element}_${this.id}`).addEventListener(eventType, (event) => {
            this[property] = event.target.innerHTML;
            recentNews._hasChanged = true;
            console.log(`event:${event} this=${JSON.stringify(recentNews)}`);
        });
        return this;
    }
}

export default class RecentNews {
    constructor(recentURL) {
        this._recentNewsList = [];
        this._recentNewsURL = recentURL;
        this._LastUpdated = Date.now();
        this._hasChanged = false;
    }

    Upload() {
        if (this._hasChanged) {
            fetch(this._recentNewsURL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'versioning': false
                },
                body: JSON.stringify(this._recentNewsList)
            })
                .then(response => { console.log(response.status); })
                .catch(err => { console.log(err); });
            this._hasChanged = false;
        }
    }

    Download(targetElement) {
        fetch(`${this._recentNewsURL}/latest`)
            .then(result => {
                result.json()
                    .then(jsob => {
                        const lastNewsYear = this._recentNewsList.length > 0 ? this._recentNewsList[this._recentNewsList.length - 1].year : "2023-03-30";
                        const filteredArray = jsob.record.filter(newsItem => Date.parse(newsItem.year) < Date.parse(lastNewsYear));

                        if (filteredArray.length > 0) {
                            filteredArray.forEach(newNews => {
                                const id = this._recentNewsList.length + 1;
                                const _newNews = new RecentNewsItem(newNews);
                                this._recentNewsList.push(_newNews);
                                const renderedNews = _newNews.Render();
                                getElementById(targetElement).insertAdjacentHTML("afterbegin", renderedNews);
                                this._recentNewsList.forEach(newsItem => newsItem.Bind("input", `recentnews_name_${newsItem.name}`, "name"));
                            });
                        }
                    })
            })
            .catch(err => { console.log(err); });
    }
}

function getElementById(id) {
    return document.getElementById(id);
}
