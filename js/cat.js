
var data = {
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


var controller = {
    selectedCatIndex: 0,
    
    init: function() {
        // init the views
        catListView.init();
        catPicView.init();
        catListView.render(data.cats);
        catPicView.render();
    },
    
    getCats: function() {
        return data.cats;
    },
    
    selectCat: function(catIndex) {
        controller.selectedCatIndex = catIndex;
        catListView.render(data.cats);
        catPicView.render();
    }, 
    
    getSelectedCat: function() {
        return data.cats[this.selectedCatIndex];
    },
    
    handleImageClick: function() {
        
        // Note how this.selectedCatIndex will be undefined since this
        // no longer refers to controller/self
        data.cats[controller.selectedCatIndex].clicks += 1;
        catPicView.render();
    }
}


var catListView = {
    domCatList : document.getElementById("catList"),

    init: function() {

        this.domCatListContent = "";
        
        // get the list of cat names
        var cats = controller.getCats();
        
        // bind each item to an eventHandler to handle clicks
        for(var i = 0; i < cats.length; i++) {
            var liElem = window.document.createElement("li");
            liElem.textContent = cats[i].name;
            
            var numCopy = i;
            liElem.addEventListener("click", (function(numCopy) {
                return function() {
                    controller.selectCat(numCopy);
                }
            }) (i));
            
            this.domCatList.appendChild(liElem);
        }

    },
    
    render: function(cats) {
        // first clear all selected attributes
        var catLiElems = window.document.getElementsByTagName("li");
        for(var i = 0; i < catLiElems.length; i++) {
            if(i == controller.selectedCatIndex) {
                catLiElems[i].setAttribute("id", "selected");
            } else {
                catLiElems[i].removeAttribute("id");
            }
        }
            
    }
    
}


var catPicView = {
    catPicElem: window.document.getElementById("selectedCatImage"),
    catNameElem: window.document.getElementById("catName"),
    catCountElem : window.document.getElementById("clickCount"),
    
    init: function() {
        // When we click on a cat pic, have controller update clicks for currently selected cat
        this.catPicElem.addEventListener("click", controller.handleImageClick, false);
    },
    
    render: function() {
         
        var cat = controller.getSelectedCat();
        
        // Add data to existing html elements
        this.catPicElem.setAttribute("src", cat.img);
        this.catNameElem.textContent = cat.name;
        this.catCountElem.textContent = cat.clicks;
 
    }
}

controller.init();