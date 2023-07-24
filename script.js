// // const card = document.getElementById("ad")

// // console.dir(card)

// //card.style.color="blue"
// // console.dir(card)
// // card.className="container"
// // const colle=card.children
// // const arr=Array.from(colle)
// // arr[0].style.border= "1px solid black"


// //-----------------------------------------------------------------------------------------------


// //  document.getElementById("s").addEventListener("click",(event)=>{
// // event.preventDefault()
// //     const card = document.getElementById("a")
// //     console.dir(card)
// //     const val = card.value
// //     console.log(val)
    
// //     if(parseInt(val)=== '5'){
// //    const add= document.getElementById("ad")
// //    add.textContent="hi i am 5"
// //    console.dir(add)
// //     }
// // })

// // ------------------------------------------------------------------------------

// // function add(a,b){
// // return function(){
// //     let sum=a+b;
// //     console.log(sum)
// // }
// // }

// // const ad=add(2)
// // ad();


// const inputText= document.getElementById("input")
// // console.dir(inputText)

// function search(event){
    
//     console.dir(event.target)
// }
// // function de(callback,delay){
    
// // let timer;
   
// //     return function(){
// //         const event=arguments[0];
// // //  console.log(event);
// // clearTimeout(timer)
// // timer=setTimeout(()=>{
// //     callback(event)
// // },delay)

// //     }

// // }
// // debaounce =de(search,3000)
// inputText.addEventListener("input",search)

function getNewsFromLocalStorage() {
    const allTheFavNewsString = JSON.parse(localStorage.getItem("favNews"))

    if(allTheFavNewsString === null || allTheFavNewsString === undefined) {
        return [];
    } else {
        return allTheFavNewsString;
    }

}


function setNewsToLocalStorage(news) {
    const allFavNews = getNewsFromLocalStorage()

    const arrayOfNews = [...allFavNews, news]

    localStorage.setItem("favNews", JSON.stringify(arrayOfNews))
}


// function removeFavNewsFromLocalStorage() {
//     const favNewsid = getNewsFromLocalStorage();
//     const filteredNews = favNewsid.filter((NewsId) => NewsId != )
//     localStorage.setItem("favMovie", JSON.stringify(filteredNews))
// }



function loadSavedNews() {
   
    window.location.href = "saved_news.html";
}

function loadNewNews() {
   
    window.location.href = "new_news.html";
}



// function saveNewsToLocalStorage(news) {
//     var savedNews = JSON.parse(localStorage.getItem("savedNews")) || [];
//     savedNews.push(news);
//     localStorage.setItem("savedNews", JSON.stringify(savedNews));
// }

function fetchNews() {
    fetch("https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news")
        .then(response => response.json())
        .then(data => {
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
        })
        .catch(error => console.log(error));
}

async function filter(){

    const categorySelect = document.getElementById("categorySelect");
    const selectedCategory = categorySelect.value;
 
   const response= await fetch("https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news")
   const data=  await response.json()

   console.log(data)

   if(selectedCategory==="all"){
    fetchNews();
   }

   
    newsContainer.innerHTML="";

data.forEach(news=>{
    
    const category1 = news[" category"];
    if(selectedCategory===category1){

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

    likeButton.onclick = function() {
        setNewsToLocalStorage(news);
    };

    newsCard.appendChild(publisher);
    newsCard.appendChild(category);
    newsCard.appendChild(content);
    newsCard.appendChild(readMoreLink);
    newsCard.appendChild(likeButton);

    newsContainer.appendChild(newsCard)

}
})
}



async function saved(){

   
   const response= await fetch("https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news")
   const data=  await response.json()

//    console.log(data)

   newsContainer.innerHTML="";

   const savedData=getNewsFromLocalStorage();
   console.log(savedData)

   data.forEach(news=>{

    if(savedData.includes(JSON.parse(news))){

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


    newsCard.appendChild(publisher);
    newsCard.appendChild(category);
    newsCard.appendChild(content);
    newsCard.appendChild(readMoreLink);
    newsCard.appendChild(likeButton);

    newsContainer.appendChild(newsCard)

}


})
}


fetchNews();

// saved();
