const test = "This is a constant. It's declared on global scope";

window.onload = function() {
    console.log(test);
    
    (function testFunction() {
        const test = "This is also a constant. It's declared inside a function. So it has a new scope";
        console.log(test);
    })();
};