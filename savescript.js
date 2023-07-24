function getNewsFromLocalStorage() {

const allTheFavNewsString = JSON.parse(localStorage.getItem("favNews"))

if(allTheFavNewsString === null || allTheFavNewsString === undefined) {

return [];

} else {

return allTheFavNewsString;

}

}

function getNewsToLocalStorage() {

const allFavNews = getNewsFromLocalStorage()

fetchNews(allFavNews);

}

getNewsToLocalStorage();

function fetchNews(data) {

var newsContainer = document.getElementById("newsContainer");

console.log(data)

data.forEach(news => {

var newsCard = document.createElement("div");

newsCard.classList.add("news-card");

var publisher = document.createElement("p");

publisher.innerText ="By "+ news[" author"];

publisher.classList.add("auther")

var category = document.createElement("p");

category.innerText = news[" category"];

category.classList.add("cat")

var content = document.createElement("p");

content.innerText = news.content;

var readMoreLink = document.createElement("a");

readMoreLink.innerText = "Read More";

readMoreLink.href = news.url;

var likeButton = document.createElement("button");

likeButton.innerText = "Like";

likeButton.classList.add("btn-btn")

likeButton.onclick = function(event){

const val=event.target

if(!val.classList.contains("fave")){

val.classList.add("fave")

setNewsToLocalStorage(news)

}

else{

val.classList.remove("fave")

}

}

newsCard.appendChild(publisher);

newsCard.appendChild(category);

newsCard.appendChild(content);

newsCard.appendChild(readMoreLink);

newsCard.appendChild(likeButton);

newsContainer.appendChild(newsCard);

});

}

// saved();
