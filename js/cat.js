var catSection = document.getElementById("catSection");

var CatClick = {
    "cats": 
        [
            {
                "name": "Bruno",
                "img": "images/cat1.jpg",
                "clicks": 0
            },

            {
                "name": "Mars",
                "img": "images/cat5.jpg",
                "clicks": 0
            }
        ]
};


document.on
    
for(var i = 0; i < CatClick.cats.length; i++) {
    var cat = CatClick.cats[i];
    catSection.innerHTML += "<p>" + cat.name + "</p>";
    catSection.innerHTML += "<img src='" + cat.img + "' onclick=catClicked(" + i + ") class='mainCatImage'>";
    catSection.innerHTML += "<p>Click count: <span id='clickCount'>" + cat.clicks + "</span></p>";

}


function catClicked(index) {
    CatClick.cats[index].clicks += 1;
    document.getElementsByTagName("span")[index].innerHTML = CatClick.cats[index].clicks;
}

    


/*
        {
            "name": "JJ",
            "img": "images/cat2.jpg",
            "clicks": 0
        },
        {
            "name": "Alfafa",
            "img": "images/cat3.jpg",
            "clicks": 0
        },
        {
            "name": "Cool Cat",
            "img": "images/cat4.jpg",
            "clicks": 0
        },
*/  