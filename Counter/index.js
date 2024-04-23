const buttons = document.querySelectorAll(".btn");
const value = document.querySelector(".count");
let count = 0;
buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count=0;
        }
        value.textContent = count;

    });
})