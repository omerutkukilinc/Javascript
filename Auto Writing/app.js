const writedText = document.querySelector(".writed-text");
const words = ["Cool","Nice","Awesome","Great"];
const writingDelay = 200;
const erasingDelay = 200;
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