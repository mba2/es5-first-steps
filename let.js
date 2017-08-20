window.onload = function() {
    
    (function root() {
        let listItems = document.querySelectorAll(".root li");
        
        for(var i = 0, len = listItems.length; i < len; i++) {
            (function(currIndex) {
                listItems[i].addEventListener("click", function() {
                    console.log(currIndex+1);
                });
            })(i);
        }
    })();
    
    (function nutella() {
        let listItems = document.querySelectorAll(".nutella li");
        for(let i = 0, len = listItems.length; i < len; i++) {
            listItems[i].addEventListener("click", function() {
                console.log(i+1);
            });
        }
    })()    ;

};