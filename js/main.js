//Animate Smooth Scroll
$('#view-about').on('click', function(){
    const about = $('#about').position().top;

    $('html, body').animate({
        scrollTop: about
    }, 900)
});

$('#view-roster').on('click', function(){
    const roster = $('#roster').position().top;

    $('html, body').animate({
        scrollTop: roster
    }, 900)
});

$('#view-uandu').on('click', function(){
    const uandu = $('#uandu').position().top;

    $('html, body').animate({
        scrollTop: uandu
    }, 900)
});

$('#view-sponsors').on('click', function(){
    const sponsors = $('#sponsors').position().top;

    $('html, body').animate({
        scrollTop: sponsors
    }, 900)
});

$('#view-contact').on('click', function(){
    const contact = $('#contact').position().top;

    $('html, body').animate({
        scrollTop: contact
    }, 900)
});

//Expand navbar
$('#expand-nav').on('click', function(){
    if ($('nav').hasClass('responsive')) {
        $('.nav-link').fadeOut();
        $('nav').removeClass('responsive');
    }
    else {
        $('nav').addClass('responsive');
        $('.nav-link').fadeIn();
    }
});