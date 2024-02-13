let playerTime = 1;
let symbol = ['player1', 'player2'];
let gameOver = false;
let isWin = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

$('.newGame').click(function(){
    playerTime = 1;
    gameOver = false;
    $('.square').removeClass('player1 player2 victory');
});
$('.square').click(function () {
    position = $(this);
    if(gameOver){
        return;
    }
    if (!(position.hasClass('player1') || position.hasClass('player2'))) {
        playerTime == 1 ? (position.addClass(symbol[0]), playerTime = 2) :
        (position.addClass(symbol[1]), playerTime = 1);
    }
    checkWinner();
});

function checkWinner(){
    squares = $('.square');
    let sequenceP1 = [];
    let sequenceP2 = [];
    for (let square of squares) {
        if($(square).hasClass('player1')){
            sequenceP1.push(parseInt(square.id));
        } 
        if($(square).hasClass('player2')){
            sequenceP2.push(parseInt(square.id));
        } 
    }
    for (let seq of isWin) {
        if(seq.every(elem => sequenceP1.includes(elem))){
            gameOver = true;
            layoutWinner(seq);
            alert("Vitória do Player 1");        
        }
        else if(seq.every(elem => sequenceP2.includes(elem))){
            gameOver = true;
            layoutWinner(seq);
            alert("Vitória do Player 2");       
        }
    } 
}

function layoutWinner(sequenceWinner){
    for (let seq of sequenceWinner) {
        $('#'+seq).addClass('victory');
    }
}