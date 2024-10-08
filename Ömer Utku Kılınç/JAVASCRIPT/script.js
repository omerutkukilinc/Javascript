let sections = document.querySelectorAll('section');
const slider = document.querySelector(".slider");

const writedText = document.querySelector(".writed-text");
const words = ["Ben Ömer Utku, ","Bilgisayar mühendisiyim."];
const writingDelay = 95;
const erasingDelay = 90;
const letterDelay = 500;
let index = 0; 
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    if(words.length){
        setTimeout(write,letterDelay);
    }
});

function write() {
    if(charIndex < words[index].length){
        writedText.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(write, writingDelay);
    }
    else{
        setTimeout(erase, letterDelay);
    }
}
function erase() {
    if(charIndex > 0){
        writedText.textContent = words[index].substring(0, charIndex -1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else{
        index++
        if(index>=words.length){
            index = 0;
        }
        setTimeout(write, writingDelay);
    }
}
document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
    e.preventDefault();  // Bağlantının varsayılan davranışını durdurur

    // Hedef bölüme animasyonlu geçiş
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    });
});