var script = document.createElement('script');
script.src = 'https://rawgit.com/DavidSFares/character-game/master/character-game.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$ = jQuery.noConflict();

// Shorthand for $( document ).ready()
$(function() {
    console.log( script.src );

    prepareCanvas(document.getElementById("canvasDiv"), 490, 220);
});
