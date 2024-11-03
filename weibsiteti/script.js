
// semubunyikan navbar
let prevScrollPos = window.pageYOffset;
const navbarTop = document.getElementById("navbarTop");
const navbarBottom = document.getElementById("navbarBottom");

window.onscroll = function() {
    if (window.innerWidth > 768) {
        let currentScrollPos = window.pageYOffset;

        if (currentScrollPos > 10) {
            navbarTop.style.display = "none";
            navbarBottom.style.top = "0";

        }else {
            navbarTop.style.display = "flex";
            navbarBottom.style.top = "56px";

        }
    }
}


// Modal video
const myModal = document.getElementById('myModal');
const videoIframe = document.getElementById('videoIframe');
const videoSrc = videoIframe.src; // Simpan URL asli

myModal.addEventListener('hide.bs.modal', function () {
    videoIframe.src = ""; // Hapus URL saat modal ditutup
});

myModal.addEventListener('show.bs.modal', function () {
    videoIframe.src = videoSrc; // Kembalikan URL saat modal dibuka
});

// Mendapatkan tahun saat ini
document.getElementById('year').textContent = new Date().getFullYear();


// jarallax
jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5
});


// loader
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});
