const track = document.querySelector(".track");
const slides = document.querySelectorAll(".container3");

let index = 0;

function updateSlide() {
    const slideWidth = slides[0].offsetWidth; // ⭐ ukuran ASLI
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}


document.querySelector(".next").addEventListener("click", () => {
    index++;
    if (index >= slides.length) index = 0;
    updateSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
    index--;
    if (index < 0) index = slides.length - 1;
    updateSlide();
});

const imgModel = document.querySelector("#imgModel");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                imgModel.classList.add("show");
            }
        });
    },
    {
        threshold: 0.3
    }
);

observer.observe(imgModel);

document.getElementById("jelajahB").onclick = function() {
    document.getElementById("column2").scrollIntoView({ behavior: "smooth" });
  };

const loader = document.getElementById("loading");

let finished = false;

function endLoading() {
    if (finished) return;
    finished = true;

    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    setTimeout(() => loader.remove(), 500);
}

setTimeout(endLoading, 5000);

window.addEventListener("load", endLoading);



