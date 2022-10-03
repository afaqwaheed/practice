$(document).ready(function () {

    let buttons = $(".button");
    let display = $('#display');
    buttons.each(function () {
        $(this).click(function () {
            display.html(display.html() + $(this).val());
        });
    });

    let resetBtn = $('.resetBtn');
    resetBtn.click(function () {
        display.html('');
    });

    let delBtn = $('.delBtn');
    delBtn.click(function () {
        display.html(display.html().substr(1, display.html().length - 1));
    });

    let equalBtn = $('.equalBtn');
    equalBtn.click(function () {
        let syntaxError1 = /^[0-9]{1,}[.+-/*]{2,}[0-9]{1,}$/;
        let syntaxError2 = /^[0-9]{1,}[.+-/*]{2,}$/;
        let syntaxError3 = /^[.+-/*]{2,}[0-9]{1,}$/;
        let syntaxError4 = /^[.+-/*]{2,}$/;


        if (display.html().match(syntaxError1)) {
            display.html("syntax error");
        }
        if (display.html().match(syntaxError2)) {
            display.html("syntax error");
        }
        if (display.html().match(syntaxError3)) {
            display.html("syntax error");
        }
        if (display.html().match(syntaxError4)) {
            display.html("syntax error");
        }
        else {
            display.html(eval(display.html()));

        }

    });


});