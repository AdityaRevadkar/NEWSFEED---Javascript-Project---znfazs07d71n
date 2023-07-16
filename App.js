
function loadSavedNews() {
   
    window.location.href = "saved_news.html";
}

function loadNewNews() {
   
    window.location.href = "new_news.html";
}

function filterNewsByCategory() {
    var categorySelect = document.getElementById("categorySelect");
    var selectedCategory = categorySelect.value;
 
}

function saveNewsToLocalStorage(news) {
    var savedNews = JSON.parse(localStorage.getItem("savedNews")) || [];
    savedNews.push(news);
    localStorage.setItem("savedNews", JSON.stringify(savedNews));
}

function fetchNews() {
    fetch("https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news")
        .then(response => response.json())
        .then(data => {
            var newsContainer = document.getElementById("newsContainer");
            

            data.forEach(news => {
             
                 
                var newsCard = document.createElement("div");
                newsCard.classList.add("news-card");
                // console.log(news)

                

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
            
                likeButton.onclick = function() {
                    saveNewsToLocalStorage(news);
                };

               
                newsCard.appendChild(publisher);
                newsCard.appendChild(category);
                newsCard.appendChild(content);
                newsCard.appendChild(readMoreLink);
                newsCard.appendChild(likeButton);

                newsContainer.appendChild(newsCard);
            });
        })
        .catch(error => console.log(error));
}

fetchNews();

