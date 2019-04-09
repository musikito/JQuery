/**
 * Chaining animation effects is a powerful tool in every jQuery developer's toolbox. 
 * One of the more overlooked features is that you can introduce delays between animations.
 */
// This is wrong:
$('#elem').animate({width:200},function(){
    setTimeout(function(){
        $('#elem').animate({marginTop:100});
    },2000);
});

// Do it like this: and will be faster
$('#elem').animate({width:200}).delay(2000).animate({marginTop:100});