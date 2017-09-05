$(document).ready(function () {

    var colorArray = ['red', 'yellow', 'blue', 'green', 'white', 'purple', 'pink', 'orange', 'gray', 'brown', 'red', 'yellow', 'blue', 'green', 'white', 'purple', 'pink', 'orange', 'gray', 'brown', 'joker'];
    var random = randomFrom(colorArray);

    $('.container').each(function(){
        var randomPosition = Math.floor(Math.random() * colorArray.length);
        var selected = colorArray.splice(randomPosition,1);
        $(this).find('.back').attr('color', selected);
        $(this).find('.back').css('background-color', selected);
    });

    $('.card').click(function () {
        if ($('.flipped').length > 1) {
            $('.card').removeClass('flipped');
        }
        if ($('.card').is('.flipped')) {
            $(this).addClass('flipped');
            if ($('.flipped').last().find('.back').attr('color') == $('.flipped').first().find('.back').attr('color') && $('.flipped').last().find('.back').attr('color')) {
                setTimeout(function(){
                    $('.flipped').css('display', 'none');
                }, 2000);
            } else {
                setTimeout(function(){
                    $('.flipped').removeClass('flipped');
                }, 1500);
            }
        } else {
            $(this).addClass('flipped');
        }
    });

});