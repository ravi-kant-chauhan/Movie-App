const APILINK = '';
const IMG_PATH = '';
const SEARCHAPI = '';

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data)) {
        console.log(data.results);
        data.results.forEach(Element => {
            const div_card = document.createElement('div');
            const div_row = document.createElement('div');
            const div_column = document.createElement('div');
            const image = document.createElement('img');
            const title = document.createElement('h3');
            const center = document.createElement('center');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row);
        });
    };
}


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if(searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value;
    }
})