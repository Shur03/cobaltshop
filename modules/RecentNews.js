export class RecentNewsItem {
    constructor(news) {
        this.id = id;
        this.name = news.name;
        this.gen = news.gen;
        this.year = news.year;
        this.imgSrc = news.imgSrc;
        this.alt = news.alt;
    }
    //Build and return html
    Render() {
        return `<article class="recentNews" id="recentnews_${this.id}">
        <img src="${this.imgSrc} " alt="${this.alt}" class="recentNews-imgSrc"/>
        <div class="recentNews-text">
            <h1 class="recentNews-header" contenteditable="true" id="recentnews_name_${this.name}">${this.year} </h1>
            <div class="recentNews-stat">
                <div class="recentNews-gen"> ${this.gen} </div>
                <a href="#">More...</a>
            <div>
        </div>
    </article>`
    }
    /** reflect changes to the [property] of the object
    For example:  <h1 id="recentnews_title_1>Medee...</h1> => recentNewsItem.title="Medee..."*/
    Bind(eventType, element, property) {
        gebi(`${element}_${this.id}`).addEventListener(eventType, (event) => {
            //this[property] used to access the object's property.
            //for example this["title"]
            //event.target gets <h1> element in our example
            this[property] = event.target.innerHTML;
            recentNews._hasChanged = true;
            console.log(`event:${event}
            this=${JSON.stringify(recentNews)}`);
        })
        return this;
    }
}


export default class RecentNews {
    constructor(RecentURL) {
        this._RecentNewsList = [];
        this._RecentNewsURL = recentNewsURL;
        this._LastUpdated = Date.now();
        this._hasChanged = false;

    }
    Upload() {
        if (this._hasChanged) {
            fetch(this._RecentNewsURL,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'versioning': false
                    },
                    body: JSON.stringify(this._recentNewsList)
                })
                .then(response => { console.log(response.status); })
                .catch(err => { console.log(err) });
            this._hasChanged = false;
        }
    }
    //Download then filter() then map() then reduce()
    Download(targetElement) {
        fetch(`${this._RecentNewsURL}/latest`)
            .then(result => {
                result.json
                    .then(jsob => {
                        //filter only new News
                        const filteredArray = jsob.filter(
                            newsItem => Date.parse(newsItem.year) > Date.parse(this._recentNewsList[this._RecentNewsList.length - 1].year : "2023-03-30"))
                        //updating own js 
                        if (filteredArray.length > 0) {
                            gebi(targetElement).insertAdjacentHTML("afterbegin"),
                                filteredArray.map(newNews => {
                                    const _newNews = new RecentNewsItem(newNews);
                                    this._recentNewsList.push(_newNews);
                                    return _newNews.Render();
                                })
                                    .reduce((prevVal, curVal) =>
                                        prevVal + curVal, "");
                            this._recentNewsList.forEach(newsItem => {
                                newsItem.Bind("input", "recentnews_title", "title")
                            });
                        }
                        // const mappedArray=filteredArray.map(newNews => (new RecentNewsItem(newNews)).Render());
                        // gebi("main").insertAdjacentHTML("afterbegin", mappedArray.reduce((prevVal, curVal) => prevVal + curVal, ""));
                    })
            })
            .catch(err => { console.log(err) });
    }
}
//shorcut to getElementById
const gebi = id => document.getElementById(id);

//Create RecentNews object, with url
const recentNews = new RecentNews("https://api.jsonbin.io/v3/b/64cb37329d312622a38af6a9");

//Load content from RecentNewsURL
recentNews.Download("main");


//Download news in every 45 seconds into #main
setInterval(() => recentNews.Download("main"), 45000);

//Upload updated news in every 15 seconds back to server
setInterval(() => recentNews.Upload(), 15000);