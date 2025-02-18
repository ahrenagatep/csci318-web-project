let index = 0;

function nextSlide() {
    const track = document.querySelector(".carousel-track");
    index = (index + 1) % track.children.length;
    track.style.transform = `translateX(${-index * 800}px)`;
}

function prevSlide() {
    const track = document.querySelector(".carousel-track");
    index = (index - 1 + track.children.length) % track.children.length;
    track.style.transform = `translateX(${-index * 800}px)`;
}
