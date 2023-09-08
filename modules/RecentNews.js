export class RecentNewsItem {
    constructor(id, news) { // id нэмсэн
        this.id = id;
        this.name = news.name;
        this.gen = news.gen;
        this.year = news.year;
        this.imgSrc = news.imgSrc;
        this.alt = news.alt;
    }

    Render() {
        return `<article class="recentNews" id="recentnews_${this.id}">
        <img src="${this.imgSrc}" alt="${this.alt}" class="recentNews-imgSrc"/>
        <div class="recentNews-text">
            <h1 class="recentNews-header" contenteditable="true" id="recentnews_name_${this.name}">${this.year}</h1>
            <div class="recentNews-stat">
                <div class="recentNews-gen">${this.gen}</div>
                <a href="#">More...</a>
            </div>
        </div>
    </article>`;
    }

    Bind(eventType, element, property) {
        gebi(`${element}_${this.id}`).addEventListener(eventType, (event) => {
            this[property] = event.target.innerHTML;
            recentNews._hasChanged = true;
            console.log(`event:${event} this=${JSON.stringify(recentNews)}`);
        });
        return this;
    }
}

export default class RecentNews {
    constructor(RecentURL) {
        this._recentNewsList = []; // _RecentNewsList-ийг _recentNewsList болгон шинэчилж өгсөн
        this._RecentNewsURL = RecentURL; // recentNewsURL-ийг RecentURL болгон шинэчилж өгсөн
        this._LastUpdated = Date.now();
        this._hasChanged = false;
    }

    Upload() {
        if (this._hasChanged) {
            fetch(this._RecentNewsURL, {
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
        fetch(`${this._RecentNewsURL}/latest`)
            .then(result => result.json())
            .then(jsob => {
                const lastNewsYear = this._recentNewsList.length > 0 ? this._recentNewsList[this._recentNewsList.length - 1].year : "2023-03-30";
                const filteredArray = jsob.filter(newsItem => Date.parse(newsItem.year) > Date.parse(lastNewsYear));

                if (filteredArray.length > 0) {
                    filteredArray.forEach(newNews => {
                        const id = this._recentNewsList.length + 1; // Шинэ ID үүсгэх
                        const _newNews = new RecentNewsItem(id, newNews); // id-г нэмсэн
                        this._recentNewsList.push(_newNews);
                        const renderedNews = _newNews.Render();
                        gebi(targetElement).insertAdjacentHTML("afterbegin", renderedNews);
                        _newNews.Bind("input", "recentnews_name", "year"); // "recentnews_title" -> "recentnews_name"
                    });
                }
            })
            .catch(err => { console.log(err); });
    }
}

const gebi = id => document.getElementById(id);

const recentNews = new RecentNews("https://api.jsonbin.io/v3/b/64cb37329d312622a38af6a9");

recentNews.Download("main");

setInterval(() => recentNews.Download("main"), 45000);

setInterval(() => recentNews.Upload(), 15000);
