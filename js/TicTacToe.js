$(document).ready(function () {

    let audio = new Audio('music/click.mp3');
    let winingMusic = new Audio('music/wining.wav');
    let displayTurn = $('#displayTurn');
    let winner = $('#winner');
    let buttons = $('.btn');
    let buttonCells = $('.btn');
    buttonCells = Array.from(buttonCells);

    let winingCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    function win() {
        winingCombination.forEach(function (combination) {
            let check = combination.every(idx => buttonCells[idx].innerText.trim() == currentPlayer);

            if (check) {
                winingMusic.play();
                winner.html(currentPlayer + ' is winner');
                buttons.prop('disabled', true,).css({ 'background-color': 'white', 'color': 'black' });
            }
        });

    }



    let currentPlayer = 'X';
    buttons.each(function () {
        $(this).click(function () {
            audio.play();
            $(this).html(currentPlayer);
            win();
            $(this).prop('disabled', true,).css({ 'background-color': 'white', 'color': 'black' });
            if (currentPlayer === 'X') {
                displayTurn.html('Turn For O').css('color', 'red');
            }
            else {
                displayTurn.html('Turn For X').css('color', 'yellow');
            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        });

    });

    $('#reset').click(function () {
        buttons.prop('disabled', false);
        winner.html('');
        buttons.html('');
    })


});