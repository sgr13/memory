$(document).ready(function () {
    var endScore = 0;
    function changePlayer() {
        var notActivePlayer = $('.player').not(".activePlayer");
        $('.activePlayer').removeClass('activePlayer');
        notActivePlayer.addClass('activePlayer');
    }

    function checkWinner() {
        if (endScore == 10) {
            if ($('#playerOne > .score span').html() > $('#playerTwo > .score span').html()) {
                alert('Wygrywa pierwszy gracz')
            } else if ($('#playerOne > .score span').html() < $('#playerTwo > .score span').html()) {
                alert('Wygrywa drugi gracz');
            } else {
                alert('Remis');
            }
        }
    }
    $('#playerOne').addClass('activePlayer');

    var colorArray = ['red', 'yellow', 'blue', 'green', 'white', 'purple', 'pink', 'orange', 'gray', 'brown', 'red', 'yellow', 'blue', 'green', 'white', 'purple', 'pink', 'orange', 'gray', 'brown', 'joker'];

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
                    var score = parseInt($('.activePlayer > .score span').html());
                    $('.activePlayer > .score span').html(score + 1);
                    $('.flipped').css('display', 'none');
                }, 2000);
                endScore++;
                checkWinner();
            } else {
                setTimeout(function(){
                    checkWinner();
                    changePlayer();
                    $('.flipped').removeClass('flipped');
                }, 1500);
            }
        } else {
            $(this).addClass('flipped');
        }
    });
});