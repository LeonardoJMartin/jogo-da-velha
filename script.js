let playerTime = 1;
let symbol = ['player1', 'player2'];
let gameOver = false;
let isWin = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

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
    let sequenceP1Html = [];
    let sequenceP2Html  = [];
    for (let square of squares) {
        if($(square).hasClass('player1')){
            sequenceP1.push(square.id);
            sequenceP1Html.push(square);
        } 
        if($(square).hasClass('player2')){
            sequenceP2.push(square.id);
            sequenceP2Html.push(square);
        } 
    }
    for (let seq of isWin) {
        if(sequenceP1 == seq.toString()){
            gameOver = true;
            layoutWinner(sequenceP1Html);
            alert("Vitória do Player 1");        
        }
        else if(sequenceP2 == seq.toString()){
            gameOver = true;
            layoutWinner(sequenceP2Html);
            alert("Vitória do Player 2");       
        }
    }
    
}

function layoutWinner(sequence){
    for (let seq of sequence) {
        $(seq).addClass('victory');
    }
}
