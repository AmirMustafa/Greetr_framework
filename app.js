// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('John', 'Doe');

// use our chainable methods
g.greet().setLang('en').greet(true);    // using our prototype functions

// let's use our obj on click of login button
$(document).ready(function() {
    $('#login').click(function() {
       const loginGreetr = G$('Chris', 'Hemsworth');
       const lang = $('#lang').val();
       loginGreetr.setLang(lang).HTMLGreeting('#greeting', true).log();
    });
});
// g.HTMLGreeting('#greeting', true);