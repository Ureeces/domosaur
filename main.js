// Flex Goals
const messSpan = document.querySelector('span.mess-with-me');
messSpan.style.fontSize = "3em";

const messP = document.querySelector('p.mess-with-me');
messP.style.backgroundColor = "green";

const hiddenDino = document.querySelector('#hide-me-area');
hiddenDino.style.display = "none";

const triceratops = document.querySelector('#triceratops');
triceratops.width = "324";

// Events
const makeSpanOrange = function() {
    messSpan.style.color = "orange";
}



// Event Listeners
messSpan.addEventListener('click', makeSpanOrange);


