// Flex Goals
const messSpan = document.querySelector('span.mess-with-me');
messSpan.style.fontSize = "3em";

const messP = document.querySelector('p.mess-with-me');
messP.style.backgroundColor = "green";

const hiddenDino = document.querySelector('#hide-me-area');
hiddenDino.style.display = "none";

const triceratops = document.querySelector('#triceratops');
triceratops.style.width = '324px';

const feathers = document.querySelector('#feathers');

const switchBckgrndButton = document.querySelector('#toggle');

const dinoRow = document.querySelector('#row');

const bigDino = document.querySelector('#biggify');

// Events
const makeSpanOrange = function() {
    messSpan.style.color = "orange";
}

const makeRedImgBorder = function() {
    triceratops.style.border = "1px solid red";
}

const makeHalfTransparent = function() {
    feathers.style.opacity = 0.5;
}

const changeRowColor = function() {
    dinoRow.style.backgroundColor = "goldenrod";
}

const makeBigDino = function() {
    bigDino.style.width += "200px";
}


// Event Listeners
messSpan.addEventListener('click', makeSpanOrange);

triceratops.addEventListener('click', makeRedImgBorder);

feathers.addEventListener('click', makeHalfTransparent);

switchBckgrndButton.addEventListener('click', changeRowColor);

bigDino.addEventListener('mouseenter', makeBigDino);