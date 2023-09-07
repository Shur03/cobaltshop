let list = document.querySelector('.list');
let details = [
    {
        header: "Захиалга",
        logo: 'fa-regular fa-laptop',
        information: 'Америкийн сайн чанарын Laptop-г үйлдвэрийн үнээр...'
    },
    {
        header: "Swap and change үйлчилгээ",
        logo: 'fa-regular fa-handshake',
        information: 'Хуучин бараагаа солих боломж'
    },
    {
        header: "Түгээмэл асуултууд",
        logo: 'fa-regular fa-circle-check',
        information: 'Хэрэглэгчдийн асуудаг нийтлэг асуултууд'
    }
];
let listing = [...new Set(details.map((item) => { return item }))];
let inf = document.getElementById('cont');
inf.innerHTML = listing.map((item) => {
    var { header, logo, information } = item;
    return (`<article class="next">
    
    <article class="icon"><i class="${logo}"></i>
    </article>
    <article id='header'>
        <h3>${header}</h3>
    </article>
    <article class='intro'>
        <p>${information}</p>
    </article>
    <button class='butt'><h3>Дэлгэрэнгүй</h3></button>
</article>`)
}).join('')