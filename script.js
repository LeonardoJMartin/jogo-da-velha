let playerTime = 1;
let symbol = ['player1', 'player2'];

$('.square').click(function () {
    position = $(this);
    if (!(position.hasClass('player1') || position.hasClass('player2'))) {
        playerTime == 1 ? (position.addClass(symbol[0]), playerTime = 2) :
        (position.addClass(symbol[1]), playerTime = 1);
    }
});
