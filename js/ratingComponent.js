let submitBtn = document.getElementById('submitBtn');
let box2 = document.getElementById('box2');
let box1 = document.getElementById('box1');
let message = document.getElementById('message');


submitBtn.addEventListener("click", myFunction);

function myFunction() {
    box1.style.display = "none";
    box2.style.display = "block";
}

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');



one.addEventListener("click", function(){
    message.innerHTML = "You selected 1 out of 5";
    one.style.background = "#f57519";
    let array1=[two,three,four,five];
    array1.forEach(element => {
        element.disabled=true;
    });
});


two.addEventListener("click", function(){
    message.innerHTML = "You selected 2 out of 5";
    two.style.background = "#f57519";
    let array1=[one,three,four,five];
    array1.forEach(element => {
        element.disabled=true;
    });
});


three.addEventListener("click", function(){
    message.innerHTML = "You selected 3 out of 5";
    three.style.background = "#f57519";
    let array1=[one,two,four,five];
    array1.forEach(element => {
        element.disabled=true;
    });
});


four.addEventListener("click", function(){
    message.innerHTML = "You selected 4 out of 5";
    four.style.background = "#f57519";
    let array1=[one,two,three,five];
    array1.forEach(element => {
        element.disabled=true;
    });
});


five.addEventListener("click", function(){
    message.innerHTML = "You selected 5 out of 5";
    five.style.background = "#f57519";
    let array1=[one,two,three,four];
    array1.forEach(element => {
        element.disabled=true;
    });
});