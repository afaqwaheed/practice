$(document).ready(function () {

    let tile1 = $('.tile1');
    let tile2 = $('.tile2');
    let tile3 = $('.tile3');
    let tile4 = $('.tile4');
    let tile5 = $('.tile5');
    let tile6 = $('.tile6');
    let tile7 = $('.tile7');
    let tile8 = $('.tile8');
    let tile9 = $('.tile9');
    let resetBtn = $('#resetBtn');
    let startBtn = $('#startBtn');
    let shuffleBtn = $('#shuffleBtn');
    let timer = $('#timer');
    let totalScore = $('#totalScore');
    var count;

    // function to shuffle images

    function shuffle() {

        let arr = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9];
        arr.sort(function () { return 0.5 - Math.random() });
        $('.box2').html(arr);
    }

    // shuffle images button
    shuffleBtn.click(function () {
        shuffle();
    });

    // set interval increment time after every second
    startBtn.click(function () {
        let sec = 1790;
        count = setInterval(() => {
            sec++;
            displayTime(sec);

        }, 1000);
        shuffleBtn.disabled = true;
    });

    // function to display time 

    function displayTime(second) {
        let min = Math.floor(second / 60);
        let sec = Math.floor(second % 60);
        timer.html(`Time: ${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`);

        if (min === 30) {  // After 30 minutes interval stop
            alert("YOUR TIME IS OVER PLEASE TRY AGAIN");
            clearInterval(count);
            timer.html(`Time: 00:00`);
            totalScore.html('Total Score : 0');
        }
    }

    // function to reset images and time

    resetBtn.click(function () {
        console.log("you have clicked reset button");
        clearInterval(count);
        timer.html(`Time: 00:00`);
    });

    // functions to move tiles

    $("[id='tile']").click(function () {
        if (tile8.next('')){
            tile8.insertAfter(tile9);
            
        }

    });




});