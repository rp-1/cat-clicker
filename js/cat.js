var catPicSection = document.getElementById("selectedCat");
var catList = document.getElementById("catList");
var CatClick = {
    "cats": 
        [
            {
                "name": "Bruno",
                "img": "images/cat1.jpg",
                "clicks": 0
            },
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
            {
                "name": "Mars",
                "img": "images/cat5.jpg",
                "clicks": 0
            }
        ]
};



    
for(var i = 0; i < CatClick.cats.length; i++) {
    var cat = CatClick.cats[i];
    
    // Fill catListSection with line items
    if(i === 0) {
        catList.innerHTML += "<li id='selected' onclick=catSelected(" + i + ")>" + cat.name + "</li>";
    } else {
        catList.innerHTML += "<li onclick=catSelected(" + i + ")>" + cat.name + "</li>";
    }
    
    /*
    catPicSection.innerHTML += "<p>" + cat.name + "</p>";
    catPicSection.innerHTML += "<img src='" + cat.img + "' onclick=catClicked(" + i + ") class='mainCatImage'>";
    catPicSection.innerHTML += "<p>Click count: <span id='clickCount'>" + cat.clicks + "</span></p>";
    */

}


function catClicked(index) {
    CatClick.cats[index].clicks += 1;
    // There is only one span tag at any time so we don't use index here
    document.getElementsByTagName("span")[0].innerHTML = CatClick.cats[index].clicks;
}

catSelected(0);

function catSelected(index) {
    var cat = CatClick.cats[index];
    var list = document.getElementsByTagName("li");
    for(var i = 0; i < list.length; i++) {
        if(i === index) {
            console.log("i is equal to index");
            list[i].setAttribute("id", "selected");
        } else {
            list[i].setAttribute("id", "");
        }
    }
    //list[index].setAttribute("id", "selected");
    catPicSection.innerHTML = "<p>" + cat.name + "</p>";
    catPicSection.innerHTML += "<img src='" + cat.img + "' onclick=catClicked(" + index + ") class='mainCatImage'>";
    catPicSection.innerHTML += "<p>Click count: <span id='clickCount'>" + cat.clicks + "</span></p>";

}
