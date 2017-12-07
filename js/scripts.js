$( document ).ready(function() {

$( ".cross" ).hide();
$( ".icon" ).hide();
$( ".hamburger" ).click(function() {
$( ".icon" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".icon" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});
