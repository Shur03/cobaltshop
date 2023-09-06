let contact = document.querySelector('.list');
let info = [{
    name: 'Хаяг',
    text: 'Хан-Уул дүүрэг',
    links: 'github.com',
    logo: 'fa-solid fa-location-dot',
    idName: 'address'
},
{
    name: 'Facebook',
    text: 'Computer shop Mongolia',
    links: 'https://www.facebook.com/computershop.mn/',
    logo: 'fa-brands fa-facebook>',
    idName: 'fb'
},
{
    name: 'Instagram',
    text: 'Computer Shop',
    links: 'https://www.instagram.com/computershop.mn/',
    logo: 'fa-regular fa-circle-check',
    idName: 'ig'
},
{
    name: 'Утас',
    text: '86843309',
    links: 'telecom.mn',
    logo: 'fa-solid fa-phone-volume',
    idName: 'telphone'
}
];
let categories = [... new Set(info.map((item) => { return item }))];
let sort = document.getElementById('contactInfo');
sort.innerHTML = categories.map((item) => {
    var { name, text, links, logo, idName } = item;
    return (`<div class="box">
    <div class="icon">
    <i id='${idName}' class='${logo}'></i>
    <a href=${links}></a>
    </div>
    <div class="text">
        <h3>${name}</h3>
        <p>${text}</p>
    </div>
</div>`)
}).join('')