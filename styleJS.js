const header = document.querySelector ('header');
// store the current position
let prevScrollPos = window.scrollY;
let buttonPressed = false;
//flag to stop hiding nav bar when button is pushed
const nav = document.querySelector('.nav-buttons');
//function to handle the scroll event

window.onscroll = () => {
    const currentScrollPosition = window.scrollY;

    //check if current scroll position is greater than the previous one

    if (!buttonPressed) {
        if (prevScrollPos > currentScrollPosition){
                     //if scrolling up, show nav bar
         header.classList.remove('scrolling-down');
        } else {
            // if down, hide nav bar
            header.classList.add('scrolling-down');
        }
    }
//reset previous position
    prevScrollPos = currentScrollPosition;
};

nav.addEventListener('click',function() {
    buttonPressed=true;
    //flag is tru when button pushed
    setTimeout(function() {
        buttonPressed=false;
    }, 500);

});