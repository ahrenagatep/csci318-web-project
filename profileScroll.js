/*
this is the script used to cycle between
each team member
*/

let index = 0;

function nextPerson() {
    const track = document.querySelector(".carousel-track");
    index = (index + 1) % track.children.length;
    track.style.transform = `translateX(${-index * 800}px)`;
}

function prevPerson() {
    const track = document.querySelector(".carousel-track");
    index = (index - 1 + track.children.length) % track.children.length;
    track.style.transform = `translateX(${-index * 800}px)`;
}