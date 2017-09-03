$(document).ready(function () {
    $('.card').click(function () {
        $(this).addClass('flipped');
        $(this).click(function(){
            $(this).parent().html('');
        })
    });
});