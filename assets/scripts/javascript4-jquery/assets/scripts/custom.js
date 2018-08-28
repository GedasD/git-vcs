$(document).ready(function(){
    console.log('jquery veikia');
    var pagalId = $('#pirmas');
    console.log(pagalId);
    var pagalKlase = $('.orange');
    console.log(pagalKlase);
    var suCss = $('ul:first-child li:nth-child(4)');
    console.log(suCss);

    //metodas each kuris leidzia apdoroti masyvus ir objektus;

    $('.orange').each(function(){
        console.log($(this).html());
        $(this).html('<i>'+$(this).html()+'<i>');
    })
    $('ul:first-child > :not(.orange)').addClass('big-text orange');
    // $('.big-text').prepend('<i>').append('</i>');
    $('ul:first-child > li').each(function(){
        $(this).prepend('!!! ').append(' ???');
    })
    $("ul:first-child").prepend('<li>pirmas</li><li>Antras</li>');
    $("ul:first-child").append('<li>paskutinis</li><li>paskutinis</li>');
    
    $('ul:first-child').css('border', '10px solid red');
    $('ul li:last').css('color', 'cyan');
    $('ul li:nth-child(3)').css('background-color', 'red');
    $('ul li:eq(3)').css('background-color', 'blue');
   
    $('ul li:nth-child(even)').css('background-color', 'yellow');
    $('ul li:even').css('background-color', 'green');

});
