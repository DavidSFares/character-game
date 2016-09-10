var script = document.createElement('script');
script.src = 'https://rawgit.com/DavidSFares/character-game/master/character-game.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$ = jQuery.noConflict();

// Shorthand for $( document ).ready()
$(function() {
    console.log( script.src );

    prepareCanvas(document.getElementById("canvasDiv"), 490, 220);

    $('.jumpButton').mousedown(function(e)
	{
		jump();
	})
	$('.blinkButton').mousedown(function(e)
	{
		blink();
	})
});

/*
var exampleOneDiv = $('#exampleOneDiv');
	WM.exampleOne.prepareCanvas(exampleOneDiv[0], exampleOneDiv.width(), exampleOneDiv.height());
	
	var exampleZombieDiv = $('#exampleZombieDiv');
	WM.exampleZombie.prepareCanvas(exampleZombieDiv[0], exampleZombieDiv.width(), exampleZombieDiv.height());
	
	var exampleFullDiv = $('#exampleFullDiv');
	WM.exampleFull.prepareCanvas(exampleFullDiv[0], exampleFullDiv.width(), exampleFullDiv.height());
	
	$('.jumpButton').mousedown(function(e)
	{
		WM.exampleOne.jump();
		WM.exampleZombie.jump();
		WM.exampleFull.jump();
	})
	
	$('.blinkButton').mousedown(function(e)
	{
		WM.exampleOne.blink();
		WM.exampleZombie.blink();
		WM.exampleFull.blink();

	})
*/


