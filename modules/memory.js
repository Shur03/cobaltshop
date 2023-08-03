export class RecentNewsItem
class RecentNewsItem {

    //constructor
    constructor(news) {
        this.id = news.id;
        this.name = news.name;
        this.year = news.year;
        // this.price = news.price;
        //this.publishedDate = news.publishedDate;
        this.img = news.img;
        this.alt = news.alt;
    }

    //build and return html
    Render() {
        return `<article class="recentNews" id="recentnews_${this.id}">
                    <img src="${this.thumb} " class="recentNews-thumb"/>
                    <div class="recentNews-text">
                        <h1 class="recentNews-header" contenteditable="true" id="recentnews_title_${this.id}">${this.title} </h1>
                        <div class="recentNews-stat">
                            <div class="recentNews-pubdate"> ${this.publishedDate} </div>
                            <div class="recentNews-shareCount"> ${this.shareCount} </div>
                            <a href="#">More...</a>
                        <div>
                    </div>
                </article>`
    }

    /* reflect changes to the [property] of the object
    For example:  <h1 id="recentnews_title_1>Medee...</h1> => recentNewsItem.title="Medee..."
    */
    Bind(eventType, element, property) {
        gebi(`${element}_${this.id}`).addEventListener(eventType, (event) => {

            //this[property] used to access the object's property.
            //for example this["title"]
            //event.target gets <h1> element in our example
            this[property] = event.target.innerHTML;
            recentNews._hasChanged = true;
            console.log(`event:${event} this=${JSON.stringify(recentNews)}`);
        })
        return this;
    }
}

export default class RecentNews {

    constructor(recentNewsUrl) {
        this._recentNewsList = [];
        this._recentNewsUrl = recentNewsUrl;
        this._lastUpdated = Date.now();
        this._hasChanged = false;
    }
    //
    Upload() {
        if (this._hasChanged) {
            fetch(this._recentNewsUrl,
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

    //download then filter() then map() then reduce() 
    Download(targetElement) {
        fetch(`${this._recentNewsUrl}/latest`)
            .then(result => {
                result.json()
                    .then(jsob => {

                        //filter only new NewsItem     
                        const filteredArray = jsob.filter(newsItem => Date.parse(newsItem.publishedDate) > Date.parse(this._recentNewsList.length > 0 ? this._recentNewsList[this._recentNewsList.length - 1].publishedDate : "2020-01-01"))

                        //updating own javascript
                        if (filteredArray.length > 0) {
                            // filteredArray.forEach(newNewsItem => { this._recentNewsList.push((new RecentNewsItem(newNewsItem))) });

                            gebi(targetElement).insertAdjacentHTML("afterbegin",

                                filteredArray
                                    .map(newNews => {
                                        const _newNews = new RecentNewsItem(newNews);
                                        this._recentNewsList.push(_newNews);
                                        return _newNews.Render();
                                    })
                                    .reduce((prevVal, curVal) => prevVal + curVal, "")
                            );

                            this._recentNewsList.forEach(newsItem => newsItem.Bind("input", "recentnews_title", "title"));
                        }

                        // const mappedArray=filteredArray.map(newNews => (new RecentNewsItem(newNews)).Render());
                        // gebi("main").insertAdjacentHTML("afterbegin", mappedArray.reduce((prevVal, curVal) => prevVal + curVal, ""));


                    })
            })
            .catch(err => { console.log(err) });

    }
}

//shortcut to getElementById
const gebi = id => document.getElementById(id);

//Create RecentNews object, with url
const recentNews = new RecentNews("https://api.jsonbin.io/v3/b/6461e7aa9d312622a35e85c9");

//Load content from RecentNewsURL
recentNews.Download("main");

//Download news in every 60 seconds into #main
setInterval(() => recentNews.Download("main"), 60000);

//Upload updated news in every 15 seconds back to server
setInterval(() => recentNews.Upload(), 15000);

// const recentNewsItem = new RecentNewsItem(
//     {
//       "title": "Мэдээ1",
//       "thumb": "https://abc.com/images/1.png",
//       "alt":"zurag 1",
//       "publishedDate": "2020.10.01 07:00:01",
//       "shareCount": 999
//     });

// document.getElementsByTagName("main")[0].innerHTML = recentNewsItem.Render();